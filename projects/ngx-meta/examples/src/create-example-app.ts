import { execa, execaSync } from 'execa'
import {
  getAppsDir,
  getLibraryDistDir,
  getModuleTemplatesDir,
  getRelativeLibraryDistDir,
  getRelativeLibraryE2EDir,
  getStandaloneTemplatesDir,
  isMain,
  jsonToString,
  Log,
} from './utils.js'
import { basename, join } from 'path'
import { cp, readFile, writeFile } from 'fs/promises'
//👇 Type assertion needed to make Node.js happy
// https://stackoverflow.com/a/70106896/3263250
import ANGULAR_CLI_VERSIONS_PKG_JSON from '../angular-cli-versions.json' with { type: 'json' }
import ts from 'typescript'
import semverCoerce from 'semver/functions/coerce.js'
import semverGte from 'semver/functions/gte.js'
import { SemVer } from 'semver'
import {
  ArrayLiteralExpression,
  Decorator,
  Expression,
  ImportDeclarationStructure,
  ImportSpecifierStructure,
  OptionalKind,
  Project,
  SourceFile,
  SyntaxKind,
} from 'ts-morph'

type AngularCliVersion =
  keyof typeof ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies

interface ExampleApp {
  readonly name: string
  //👇 Right now name + CLI version MUST match
  //   See example apps workflow cache info step for more info
  readonly cliVersion: AngularCliVersion
  readonly angularCliNewArguments?: ReadonlyArray<string>
  readonly standalone: boolean
}

const EXAMPLE_APPS = [
  {
    name: 'v17',
    cliVersion: 'v17',
    angularCliNewArguments: [
      '--standalone=true', // Default in v17, but to be explicit
    ],
    standalone: true,
  },
  {
    name: 'v16',
    cliVersion: 'v16',
    angularCliNewArguments: [
      '--standalone=false', // Default in v16, but to be explicit
    ],
    standalone: false,
  },
  {
    name: 'v15',
    cliVersion: 'v15',
    standalone: false, // No standalone CLI argument in v15
  },
] satisfies ReadonlyArray<ExampleApp>

const EXAMPLE_APPS_BY_NAME = new Map<string, ExampleApp>(
  EXAMPLE_APPS.map((exampleApp) => [exampleApp.name, exampleApp]),
)

async function createExampleApp({
  exampleApp,
  baseAppDir,
  noCleanup,
  tmpDir,
}: CreateExampleAppOptions) {
  const angularCliVersion = semverCoerceOrExit(exampleApp.cliVersion)
  Log.info(`Creating example app`)

  if (baseAppDir) {
    Log.info('Using "%s" as base app', baseAppDir)
  } else {
    if (!tmpDir) {
      tmpDir = await generateTmpDirAndRegisterCleanupCallback(
        noCleanup ? () => {} : cleanUpTmpDir,
      )
    }
    await createPackageJsonWithAngularCli(exampleApp.cliVersion, tmpDir)
    await installCli(tmpDir)
    baseAppDir = await createAngularApp({
      name: exampleApp.name,
      extraArgs: exampleApp.angularCliNewArguments,
      dir: tmpDir,
      angularCliVersion,
    })
    const cliBinary = '../node_modules/.bin/ng'
    await disableAnalytics({ cliBinary, appDir: baseAppDir })
    await setupSsr({ cliBinary, appDir: baseAppDir, angularCliVersion })
  }

  const appDir = await copyAppDirIntoProject(baseAppDir)
  await Promise.all([
    (async () => {
      await addLinkedLibrary(appDir)
      await addCiBuildRunScript({ appDir, appName: exampleApp.name })
    })(),
    copyTemplates({ appDir, standalone: exampleApp.standalone }),
    updateTsConfigToImportJsonFilesAndSetPathMappings(appDir),
    updateAppModuleOrAppConfigFromTemplates(appDir, exampleApp.standalone),
  ])
  await installApp(appDir)
}

interface CreateExampleAppOptions {
  readonly exampleApp: ExampleApp
  readonly baseAppDir?: string
  readonly noCleanup?: boolean
  readonly tmpDir?: string
}

function semverCoerceOrExit(version: string): SemVer {
  const semverVersion = semverCoerce(version)
  if (!semverVersion) {
    Log.error(`Version '%s' cannot be coerced into a semver version`, version)
    process.exit(1)
  }
  return semverVersion
}

async function generateTmpDirAndRegisterCleanupCallback(
  cleanUpCallback: (tmpDir: string) => void,
): Promise<string> {
  const tmpDir = (await execa('mktemp', ['-d'])).stdout
  registerAbortAndExitCallback(() => cleanUpCallback(tmpDir))
  Log.debug('Temporary dir: "%s"', tmpDir)
  return tmpDir
}

// https://stackoverflow.com/a/14032965/3263250
function registerAbortAndExitCallback(cleanUpCallback: () => void) {
  //👇 Otherwise this prevents script from exiting
  // process.stdin.resume() // so the program will not close instantly

  process.on('exit', cleanUpCallback)
  // catches ctrl+c event
  process.on('SIGINT', () => {
    Log.info('SIGINT received')
    process.exit(2)
  })
  // catches "kill pid" (for example: nodemon restart)
  process.on('SIGUSR1', () => {
    Log.info('SIGUSR1 received')
    process.exit(2)
  })
  process.on('SIGUSR2', () => {
    Log.info('SIGUSR2 received')
    process.exit(2)
  })
  // catches uncaught exceptions
  process.on('uncaughtException', (error) => {
    Log.error('Uncaught exception')
    console.log(error)
    process.exit(3)
  })
}

// Must be sync as it's an exit handler
// https://stackoverflow.com/a/14032965/3263250
function cleanUpTmpDir(tmpDir: string) {
  Log.step('Cleanup')
  if (tmpDir != '' && tmpDir != '/') {
    Log.step('Deleting temporary dir')
    execaSync('rm', ['-rf', tmpDir])
  }
}

const PKG_JSON = 'package.json'

async function createPackageJsonWithAngularCli(
  cliVersion: AngularCliVersion,
  tmpDir: string,
) {
  const DEV_DEPENDENCIES_KEY =
    'devDependencies' satisfies keyof typeof ANGULAR_CLI_VERSIONS_PKG_JSON
  const pkgJsonFile = join(tmpDir, PKG_JSON)
  const pkgJsonWithOnlyAngularCliDevDep = {
    ...ANGULAR_CLI_VERSIONS_PKG_JSON,
    [DEV_DEPENDENCIES_KEY]: {
      [cliVersion]: ANGULAR_CLI_VERSIONS_PKG_JSON.devDependencies[cliVersion],
    },
  }
  await writeFile(pkgJsonFile, jsonToString(pkgJsonWithOnlyAngularCliDevDep))
}

async function installCli(tmpDir: string) {
  Log.step('Installing Angular CLI')
  const installCommand = execa('pnpm', ['install'], {
    cwd: tmpDir,
    all: true,
    env: { FORCE_COLOR: true.toString() },
  })
  Log.stream(installCommand.all)
  await installCommand
}

async function createAngularApp(opts: {
  name: string
  extraArgs?: ReadonlyArray<string>
  dir: string
  angularCliVersion: SemVer
}): Promise<string> {
  Log.step('Creating Angular app using Angular CLI')
  const ngNewSupportsSsr = supportsNgNewWithSsr(opts.angularCliVersion)
  if (ngNewSupportsSsr) {
    Log.info('Adding built-in SSR support')
  }
  // https://angular.dev/cli/new
  const ANGULAR_CLI_NEW_DEFAULT_ARGS = [
    '--inline-style',
    '--minimal',
    '--package-manager=pnpm',
    '--routing',
    '--skip-git',
    '--skip-install',
    '--skip-tests',
    '--style=css',
  ]
  const ANGULAR_CLI_NEW_SSR_ARG = '--ssr'
  const ngNewCommand = execa(
    'pnpm',
    [
      'ng',
      `new`,
      `${opts.name}`,
      ...ANGULAR_CLI_NEW_DEFAULT_ARGS,
      ...(opts.extraArgs ?? []),
      ...(ngNewSupportsSsr ? [ANGULAR_CLI_NEW_SSR_ARG] : []),
    ],
    { cwd: opts.dir, all: true, env: { FORCE_COLOR: true.toString() } },
  )
  Log.stream(ngNewCommand.all)
  await ngNewCommand
  Log.ok('Angular app created')
  return join(opts.dir, opts.name)
}

function supportsNgNewWithSsr(angularCliVersion: SemVer) {
  const ANGULAR_CLI_NEW_SSR_MIN_VERSION = semverCoerceOrExit('v17')
  return semverGte(angularCliVersion, ANGULAR_CLI_NEW_SSR_MIN_VERSION)
}

async function disableAnalytics(opts: { cliBinary: string; appDir: string }) {
  Log.step('Disabling Angular analytics')
  const disableAnalyticsCommand = execa(
    opts.cliBinary,
    ['config', 'cli.analytics', false.toString()],
    {
      cwd: opts.appDir,
      all: true,
      env: { FORCE_COLOR: true.toString() },
    },
  )
  Log.stream(disableAnalyticsCommand.all)
  await disableAnalyticsCommand
}

async function setupSsr(opts: {
  cliBinary: string
  appDir: string
  angularCliVersion: SemVer
}) {
  if (supportsNgNewWithSsr(opts.angularCliVersion)) {
    Log.debug(
      `Skipping SSR setup: Angular CLI %s supports creating apps
   with SSR support, so assuming it has been added already at creation`,
    )
    return
  }
  // Avoid failing on CI/CD where second `install` command triggered by
  // adding `@nguniversal` doesn't work due to default `--frozen-lockfile`
  // behaviour
  Log.step('Configuring pnpm to disable lockfiles')
  const NPMRC_FILENAME = '.npmrc'
  await writeFile(join(opts.appDir, NPMRC_FILENAME), 'lockfile=false')
  // Before v17, the recommendation was using @nguniversal for SSR
  // Current docs SSR guide do this with `ng add @angular/ssr`, which starts at v17
  // https://v16.angular.io/guide/universal
  Log.step('Setting up SSR using @nguniversal')
  const ngAddNgUniversalCommand = execa(
    opts.cliBinary,
    ['add', '--skip-confirmation', '@nguniversal/express-engine'],
    {
      cwd: opts.appDir,
      all: true,
      env: { FORCE_COLOR: true.toString() },
    },
  )
  Log.stream(ngAddNgUniversalCommand.all)
  await ngAddNgUniversalCommand
  // Seems there's no way to avoid installing deps
  // https://github.com/angular/angular-cli/blob/16.2.14/packages/angular/cli/src/commands/add/cli.ts#L304
  Log.step('Removing node modules and %s', NPMRC_FILENAME)
  const rmNodeModulesAndLockfileCommand = execa(
    'rm',
    ['-rf', 'node_modules', NPMRC_FILENAME],
    {
      cwd: opts.appDir,
      all: true,
      env: { FORCE_COLOR: true.toString() },
    },
  )
  Log.stream(rmNodeModulesAndLockfileCommand.all)
  await rmNodeModulesAndLockfileCommand
}

async function copyAppDirIntoProject(appDir: string) {
  Log.step('Copying app from into project')
  const appDirName = basename(appDir)
  const destination = join(getAppsDir(), appDirName)
  await cp(appDir, destination, { recursive: true })
  return destination
}

/**
 * Due to caching lockfile in CI/CD, cannot use `pnpm add/install`
 * because that would be run twice:
 * - When installing Angular deps (`pnpm i`)
 * - When installing the library (`pnpm add <libDir>`)
 * So the cached lockfile would include library, but then when running
 * `pnpm i` with cached lockfile, `specifiers` section would be out of sync
 * given lockfile contains library, but package.json does not (yet)
 * See https://github.com/davidlj95/ngx/pull/518
 */
async function addLinkedLibrary(appDir: string) {
  Log.step('Adding linked library')
  const appPkgJsonFile = join(appDir, PKG_JSON)
  const [libPkgJson, appPkgJson] = (
    await Promise.all([
      readFile(join(getLibraryDistDir(), PKG_JSON), 'utf8'),
      readFile(join(appDir, PKG_JSON), 'utf8'),
    ])
  ).map(
    (data) =>
      JSON.parse(data) as {
        name: string
        dependencies: Record<string, string>
      },
  )

  //👇 Can't use link: protocol (default when you pnpm i <relativeDir>)
  //   When building SSR target if using `@nguniversal`, it fails
  //   Even with preserveSymlinks: true in angular.json + hoisted node-linker
  appPkgJson.dependencies[libPkgJson.name] =
    `file:${getRelativeLibraryDistDir()}`
  await writeFile(appPkgJsonFile, jsonToString(appPkgJson))
}

async function addCiBuildRunScript(opts: { appDir: string; appName: string }) {
  // Builds with SSR + source maps
  Log.step('Adding build run script for CI/CD')
  const appPkgJsonFile = join(opts.appDir, PKG_JSON)
  const appPkgJson = JSON.parse(
    await readFile(join(opts.appDir, PKG_JSON), 'utf8'),
  ) as {
    scripts: Record<string, string>
  }
  const BUILD_WITH_SOURCE_MAPS = 'ng build --source-map'
  if ('build:ssr' in appPkgJson.scripts) {
    appPkgJson.scripts['build:ci'] =
      `${BUILD_WITH_SOURCE_MAPS} && ng run ${opts.appName}:server`
  } else {
    appPkgJson.scripts['build:ci'] = BUILD_WITH_SOURCE_MAPS
  }
  await writeFile(appPkgJsonFile, jsonToString(appPkgJson))
}

async function copyTemplates(opts: { appDir: string; standalone: boolean }) {
  const templatesDir = opts.standalone
    ? getStandaloneTemplatesDir()
    : getModuleTemplatesDir()
  Log.step(
    `Copying ${opts.standalone ? 'standalone' : 'module'} apps template files`,
  )
  Log.item(templatesDir)
  await cp(templatesDir, opts.appDir, {
    recursive: true,
    filter: (source) => !source.endsWith('.template.ts'),
  })
}

async function updateTsConfigToImportJsonFilesAndSetPathMappings(
  appDir: string,
) {
  Log.step('Adding JSON imports and path mappings to Typescript config')
  const configFileName = await findTsConfigFileOrExit(appDir)

  const configFile = ts.readConfigFile(configFileName, ts.sys.readFile)
  if (configFile.error) {
    Log.error('Unable to read Typescript config file', configFileName)
    process.exit(1)
  }
  const config = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    appDir,
  )
  type TsConfig = { compilerOptions: ts.CompilerOptions }
  const rawConfig = config.raw as TsConfig
  rawConfig.compilerOptions.resolveJsonModule = true
  // 👇 Not needed for Angular v17, given `esModuleInterop` is enabled there
  //    https://www.typescriptlang.org/tsconfig#allowSyntheticDefaultImports
  rawConfig.compilerOptions.allowSyntheticDefaultImports = true
  rawConfig.compilerOptions.paths = {
    ...rawConfig.compilerOptions.paths,
    '@/e2e/*': [join(getRelativeLibraryE2EDir(), '*')],
  }
  await writeFile(configFileName, jsonToString(config.raw))
}

async function findTsConfigFileOrExit(projectDir: string) {
  const configFileName = ts.findConfigFile(projectDir, ts.sys.fileExists)
  if (!configFileName) {
    Log.error('Cannot find Typescript config file in project directory')
    Log.item(projectDir)
    process.exit(1)
  }
  return configFileName
}

async function updateAppModuleOrAppConfigFromTemplates(
  appDir: string,
  standalone: boolean,
) {
  const tsMorphProject = new Project({
    tsConfigFilePath: await findTsConfigFileOrExit(appDir),
    skipAddingFilesFromTsConfig: true,
    skipFileDependencyResolution: true,
  })
  standalone
    ? await updateAppConfig(appDir)
    : await updateAppModule(tsMorphProject, appDir)
}

async function updateAppModule(tsMorphProject: Project, appDir: string) {
  Log.step('Updating app module from template')
  const APP_MODULE_TEMPLATE_FILENAME = 'app.module.template.ts'
  const APP_MODULE_FILENAME = 'app.module.ts'
  const appModuleTemplateFile = tsMorphProject.addSourceFileAtPath(
    join(getModuleTemplatesDir(), 'src', 'app', APP_MODULE_TEMPLATE_FILENAME),
  )
  const appModuleFile = tsMorphProject.addSourceFileAtPath(
    join(appDir, 'src', 'app', APP_MODULE_FILENAME),
  )
  addImportsFromTemplateIntoSourceFile({
    destination: appModuleFile,
    template: appModuleTemplateFile,
  })
  addAppModuleFromTemplateIntoSourceFile({
    destination: appModuleFile,
    template: appModuleTemplateFile,
  })
  await appModuleFile.save()
}

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
function addImportsFromTemplateIntoSourceFile({
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
type DeclarationsByModuleSpecifier = Map<
  string,
  OptionalKind<ImportDeclarationStructure>
>

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

/**
 * Completes an existing `AppModule` from a {@link destination} source file
 * using an `AppModule` from a {@link template} source file
 *
 * Only completes array literal expressions for an `NgModule`:
 *  - declarations
 *  - imports
 *  - providers
 *  - bootstrap
 */
function addAppModuleFromTemplateIntoSourceFile({
  template,
  destination,
}: {
  template: SourceFile
  destination: SourceFile
}) {
  const [destinationAppModuleDecorator, templateAppModuleDecorator] = [
    getAppModuleClassDecoratorFromSourceFile(destination),
    getAppModuleClassDecoratorFromSourceFile(template),
  ]
  const decoratorPropertiesToMerge = [
    'declarations',
    'imports',
    'providers',
    'bootstrap',
  ]
  decoratorPropertiesToMerge.forEach((property) =>
    addToNgModuleDecoratorArrayPropertyFromTemplate({
      template: templateAppModuleDecorator,
      destination: destinationAppModuleDecorator,
      property,
    }),
  )
}

function getAppModuleClassDecoratorFromSourceFile(sourceFile: SourceFile) {
  const APP_MODULE_CLASS_NAME = 'AppModule'
  const APP_MODULE_DECORATOR_NAME = 'NgModule'
  return sourceFile
    .getClassOrThrow(APP_MODULE_CLASS_NAME)
    .getDecoratorOrThrow(APP_MODULE_DECORATOR_NAME)
}

function addToNgModuleDecoratorArrayPropertyFromTemplate({
  template,
  destination,
  property,
}: {
  template: Decorator
  destination: Decorator
  property: string
}) {
  const destinationPropertyArray = getNgModuleDecoratorArrayPropertyOrExit(
    destination,
    property,
  )
  const templatePropertyArray = getNgModuleDecoratorArrayPropertyOrExit(
    template,
    property,
  )
  if (!templatePropertyArray) {
    return
  }
  if (!destinationPropertyArray) {
    return templatePropertyArray
  }
  const elementsToAdd = templatePropertyArray
    .getElements()
    .reduce<
      ReadonlyArray<Expression>
    >((accumulator, templatePropertyExpression) => {
      // Avoid duplicates
      if (
        destinationPropertyArray
          .getElements()
          .some((destinationPropertyExpression) => {
            const sameExpression =
              destinationPropertyExpression.getText() ===
              templatePropertyExpression.getText()
            //👇 In Angular v15, BrowserModule with SSR is BrowserModule.withServerTransition
            //   So template BrowserModule should not be added in favour of that one
            const sameExpressionButWithPropertyAccess =
              destinationPropertyExpression
                .getText()
                .startsWith(`${templatePropertyExpression.getText()}.`)
            return sameExpression || sameExpressionButWithPropertyAccess
          })
      ) {
        return accumulator
      }
      // Or add it
      return [...accumulator, templatePropertyExpression]
    }, [])
  destinationPropertyArray.addElements(elementsToAdd.map((e) => e.getText()))
}

function getNgModuleDecoratorArrayPropertyOrExit(
  decorator: Decorator,
  property: string,
): ArrayLiteralExpression | undefined {
  const decoratorArguments = decorator.getArguments()
  if (decoratorArguments.length < 1) {
    throw new Error('NgModule decorator without arguments found')
  }
  if (decoratorArguments.length > 1) {
    Log.warn('NgModule decorator found with more than 1 argument')
  }
  const decoratorObject = decorator
    .getArguments()[0]
    .asKindOrThrow(SyntaxKind.ObjectLiteralExpression)
  const propertyAssignment = decoratorObject.getProperty(property)
  if (!propertyAssignment) {
    return undefined
  }
  return propertyAssignment
    .asKindOrThrow(SyntaxKind.PropertyAssignment)
    .getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression)
}

async function updateAppConfig(appDir: string) {
  Log.step('Updating app config from template')
  Log.info('TODO')
}

async function installApp(appDir: string) {
  Log.step('Installing app dependencies')
  const installCommand = execa('pnpm', ['install'], {
    cwd: appDir,
    all: true,
    env: { FORCE_COLOR: true.toString() },
  })
  Log.stream(installCommand.all)
  await installCommand
}

const BASE_APP_DIR_ARG = '--base-app-dir'
const NO_CLEANUP_ARG = '--no-cleanup'
const TMP_DIR_ARG = '--tmp-dir'

if (isMain(import.meta.url)) {
  await createExampleApp(parseArgs(process.argv))
}

function parseArgs(argv: ReadonlyArray<string>): CreateExampleAppOptions {
  let appName: string | null = null
  let baseAppDir: string | undefined
  let noCleanup: boolean = false
  let tmpDir: string | undefined
  for (const arg of argv) {
    if (arg.startsWith('/') || arg.startsWith('node')) {
      continue
    }
    if (arg.startsWith(BASE_APP_DIR_ARG)) {
      const [_, argValue] = arg.split('=')
      baseAppDir = argValue
      continue
    }
    if (arg === NO_CLEANUP_ARG) {
      noCleanup = true
      continue
    }
    if (arg.startsWith(TMP_DIR_ARG)) {
      const [_, argValue] = arg.split('=')
      tmpDir = argValue
      continue
    }
    if (appName === null) {
      appName = arg
      continue
    }
    Log.error('Unknown argument', arg)
    printUsageAndExit()
    process.exit(1)
  }
  if (!appName || appName.length === 0) {
    Log.error('No app name specified. Specify app name as first param')
    printUsageAndExit()
    process.exit(1)
  }
  const exampleApp = EXAMPLE_APPS_BY_NAME.get(appName)
  if (!exampleApp) {
    Log.error('Unknown example app')
    printAppNamesAndExit()
    process.exit(1)
  }
  return {
    exampleApp,
    baseAppDir,
    noCleanup,
    tmpDir,
  }
}

function printUsageAndExit() {
  const scriptName = process.argv[1]
  console.log(`
Usage: node ${scriptName} APP_NAME
       [${BASE_APP_DIR_ARG}=APP_DIR] [${NO_CLEANUP_ARG}]
       [${TMP_DIR_ARG}=TMP_DIR]

       ${BASE_APP_DIR_ARG} allows to use an already created Angular CLI app as base
       If not provided, a fresh new app will be created

       [${NO_CLEANUP_ARG}] will not clean up generated base app dir upon process exit
       Useful to use the same base app dir later. If using ${TMP_DIR_ARG}, no cleanup
       will happen anyway.

       [${TMP_DIR_ARG}=TMP_DIR] lets you set the temporary dir where Angular CLI will
       be installed and a new Angular app will be created. A "package.json" will be
       created there to install the CLI and allow caching lockfile + deps in CI/CD.
       Does nothing if ${BASE_APP_DIR_ARG} is used. Directory will not be cleaned up
       as wasn't created by the script (therefore implicitly enabling ${NO_CLEANUP_ARG})
  `)
  printAppNamesAndExit()
}

function printAppNamesAndExit() {
  Log.info('Known app names:')
  ;[...EXAMPLE_APPS_BY_NAME.keys()].forEach((name) => Log.item(name))
  process.exit(1)
}
