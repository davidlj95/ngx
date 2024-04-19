import {
  ImportDeclarationStructure,
  ImportSpecifierStructure,
  OptionalKind,
  SourceFile,
} from 'ts-morph'

type DeclarationsByModuleSpecifier = Map<
  string,
  OptionalKind<ImportDeclarationStructure>
>

/**
 * Adds import declarations from a {@link template} source file into a
 * {@link destination} source file import declarations
 *
 * Simplifies imports first of both source files by merging import declarations
 * from same module specifier
 *
 * This may give issues, as merging declarations imports is not always possible
 * @see {@link mergeImportDeclarations}
 *
 * Then creates the merged declarations list by merging existing imports from
 * {@link destination} source file with merged {@link template} imports
 *
 * Finally, replaces import declarations of {@link destination} with the merged
 * import declarations calculated
 *
 * Only properly merges named imports and default imports.
 * Should be enough: Angular CLI shouldn't generate other kind of imports:
 *  - Namespace imports (aka `foo as *`) difficult tree-shaking
 *  - Default imports are a bad practice (but used here to import JSON files)
 *  - Side effect imports (aka `import 'some-lib'`).
 *      Those are also now handled at build time with Angular CLI since v15
 *  - Other kind of imports (file types other than JS) are experimental
 *      Though, JSON module imports may be coming soon
 *      https://github.com/tc39/proposal-json-modules
 */
export function addImportsFromTemplateIntoSourceFile({
  template,
  destination,
}: {
  template: SourceFile
  destination: SourceFile
}) {
  const destinationDeclarations = destination.getImportDeclarations()
  const destinationDeclarationStructures = destinationDeclarations.map((d) =>
    d.getStructure(),
  )
  const destinationDeclarationsByModuleSpecifier =
    getDeclarationsByModuleSpecifier(destinationDeclarationStructures)
  const templateDeclarationsByModuleSpecifier =
    getDeclarationsByModuleSpecifier(
      template.getImportDeclarations().map((d) => d.getStructure()),
    )
  const mergedDeclarationsByModuleSpecifier = Array.from(
    templateDeclarationsByModuleSpecifier.entries(),
  ).reduce<DeclarationsByModuleSpecifier>(
    (
      accumulator,
      [templateDeclarationModuleSpecifier, templateDeclaration],
    ) => {
      const existingDeclaration = accumulator.get(
        templateDeclarationModuleSpecifier,
      )
      if (!existingDeclaration) {
        return accumulator.set(
          templateDeclarationModuleSpecifier,
          templateDeclaration,
        )
      }
      return accumulator.set(
        templateDeclarationModuleSpecifier,
        mergeImportDeclarations(existingDeclaration, templateDeclaration),
      )
    },
    destinationDeclarationsByModuleSpecifier,
  )
  // Rewrite imports of source file
  destinationDeclarations.forEach((d) => d.remove())
  destination.addImportDeclarations(
    Array.from(mergedDeclarationsByModuleSpecifier.values()),
  )
}

function getDeclarationsByModuleSpecifier(
  declarations: ReadonlyArray<ImportDeclarationStructure>,
): DeclarationsByModuleSpecifier {
  return declarations.reduce<DeclarationsByModuleSpecifier>(
    (accumulator, declaration) => {
      const existingDeclaration = accumulator.get(declaration.moduleSpecifier)
      accumulator.set(
        declaration.moduleSpecifier,
        existingDeclaration
          ? mergeImportDeclarations(existingDeclaration, declaration)
          : declaration,
      )
      return accumulator
    },
    new Map(),
  )
}

/**
 * Merges two import declarations for same module specifier
 *
 * ie: `import { Foo } from 'pkg' + `import { Bar } from 'pkg'` into
 *     `import { Foo, Bar } from 'pkg'`
 *
 * This is tricky and not always possible, but works fine for named imports
 * which are the ones we care about most
 *
 * For instance:
 *  - Two side effect imports (should be there twice? only once?)
 *  - Namespace import + named imports (can't be in a single import declaration as per spec)
 *  - Two default/namespace imports with different names:
 *      - Which name do we choose?
 *      - Do we keep both? Then each name should be in its import declaration
 *      - Default + namespace import could be in same import declaration though
 *  ...
 *
 * @param declaration
 * @param otherDeclaration
 */
function mergeImportDeclarations(
  declaration: OptionalKind<ImportDeclarationStructure>,
  otherDeclaration: OptionalKind<ImportDeclarationStructure>,
): OptionalKind<ImportDeclarationStructure> {
  if (declaration.moduleSpecifier !== declaration.moduleSpecifier) {
    throw new Error("Can't merge imports from different modules")
  }
  if (isSideEffectImport(declaration) || isSideEffectImport(otherDeclaration)) {
    throw new Error("Can't merge side-effect imports")
  }
  if (
    declaration.defaultImport &&
    otherDeclaration.defaultImport &&
    declaration.defaultImport !== otherDeclaration.defaultImport
  ) {
    throw new Error("Can't merge default imports with different names")
  }
  if (
    declaration.namespaceImport &&
    otherDeclaration.namespaceImport &&
    declaration.namespaceImport !== otherDeclaration.namespaceImport
  ) {
    throw new Error("Can't merge namespace imports with different names")
  }
  const defaultImport =
    declaration.defaultImport ?? otherDeclaration.defaultImport
  const namespaceImport =
    declaration.namespaceImport ?? otherDeclaration.namespaceImport
  const namedImports = mergeNamedImportSpecifiers(
    declaration.namedImports,
    otherDeclaration.namedImports,
  )
  return {
    defaultImport,
    namespaceImport,
    namedImports,
    moduleSpecifier: declaration.moduleSpecifier,
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only
function isSideEffectImport(
  declaration: OptionalKind<ImportDeclarationStructure>,
) {
  return (
    declaration.namespaceImport === undefined &&
    declaration.defaultImport === undefined &&
    declaration.namedImports === undefined &&
    declaration.attributes === undefined
  )
}

function mergeNamedImportSpecifiers(
  specifiers: ImportDeclarationStructure['namedImports'],
  otherSpecifiers: ImportDeclarationStructure['namedImports'],
) {
  if (specifiers === undefined && otherSpecifiers === undefined) {
    return undefined
  }
  if (specifiers === undefined || otherSpecifiers === undefined) {
    return specifiers ?? otherSpecifiers
  }
  const isSameSpecifier = (
    specifier: ImportSpecifierStructure,
    otherSpecifier: ImportSpecifierStructure,
  ) => {
    if (specifier.name !== otherSpecifier.name) {
      return false
    }
    return (
      (specifier.alias === undefined && otherSpecifier.alias === undefined) ||
      specifier.alias !== otherSpecifier.alias
    )
  }
  return (otherSpecifiers as ReadonlyArray<ImportSpecifierStructure>).reduce<
    ImportSpecifierStructure[]
  >(
    (accumulator, otherSpecifier) => {
      const alreadyAdded = accumulator.some((importSpecifier) =>
        isSameSpecifier(importSpecifier, otherSpecifier),
      )
      if (alreadyAdded) {
        return accumulator
      }
      return [...accumulator, otherSpecifier]
    },
    [...(specifiers as ReadonlyArray<ImportSpecifierStructure>)],
  )
}
