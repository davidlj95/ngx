import {
  isImportDeclaration,
  isNamedImports,
  isStringLiteral,
  SourceFile,
} from 'typescript'
import { SchematicContext } from '@angular-devkit/schematics'
import {
  Change,
  ReplaceChange,
} from '../../external-utils/schematics/angular/utility/change'
import { isDefined } from '../../utils/is-defined'
import { maybeGetNewIdentifierFromOldIdentifier } from './maybe-get-new-identifier-from-old-identifier'

export const updateImports = (
  sourceFile: SourceFile,
  filePath: string,
  logger: SchematicContext['logger'],
): Change[] => {
  const importStatements = sourceFile.statements.filter(isImportDeclaration)
  const libraryImportStatements = importStatements.filter(
    (importStatement) =>
      isStringLiteral(importStatement.moduleSpecifier) &&
      importStatement.moduleSpecifier.text.startsWith('@davidlj95/ngx-meta'),
  )
  /* istanbul ignore next - perf opt */
  if (!libraryImportStatements.length) {
    return []
  }
  const libraryNamedImports = libraryImportStatements
    .map((importStatement) =>
      /* istanbul ignore next - quite safe */
      importStatement.importClause?.namedBindings &&
      isNamedImports(importStatement.importClause.namedBindings)
        ? importStatement.importClause.namedBindings
        : undefined,
    )
    .filter(isDefined)
  if (libraryNamedImports.length != libraryImportStatements.length) {
    logger.warn(
      [
        `Some non-named imports of the library detected in ${filePath}`,
        'This is not the recommended usage. You should use named imports for tree-shaking purposes',
      ].join('\n'),
    )
  }
  return libraryNamedImports
    .map((libraryNamedImport) =>
      libraryNamedImport.elements
        .map((element) => {
          const identifier = element.name.text
          const maybeNewIdentifier =
            maybeGetNewIdentifierFromOldIdentifier(identifier)
          if (!maybeNewIdentifier) {
            return
          }
          return new ReplaceChange(
            filePath,
            element.getStart(),
            identifier,
            maybeNewIdentifier,
          )
        })
        .filter(isDefined),
    )
    .flatMap((x) => x)
}
