import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals'
import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing'
import { join } from 'path'
import { logging } from '@angular-devkit/core'
import { LIB_NAME } from '../../testing/lib-name'
import {
  JSON_LD_REPLACEMENTS,
  OPEN_GRAPH_PROFILE_REPLACEMENTS,
  OPEN_GRAPH_REPLACEMENTS,
  STANDARD_REPLACEMENTS,
  TWITTER_CARD_REPLACEMENTS,
} from './testing/replacements'
import { Tree } from '@angular-devkit/schematics' // https://github.com/angular/angular/blob/19.0.x/packages/core/schematics/test/explicit_standalone_flag_spec.ts

// https://github.com/angular/angular/blob/19.0.x/packages/core/schematics/test/explicit_standalone_flag_spec.ts
// https://github.com/angular/angular/blob/19.0.x/packages/core/schematics/test/inject_migration_spec.ts
// https://github.com/angular/angular/blob/19.0.x/packages/core/schematics/test/provide_initializer_spec.ts
describe('Tree shakeable manager providers migration', () => {
  let runner: SchematicTestRunner
  let tree: UnitTestTree
  let logWarnSpy: jest.Spied<(typeof logging.Logger.prototype)['warn']>
  const [SAMPLE_OLD_IDENTIFIER, SAMPLE_NEW_IDENTIFIER, SAMPLE_ENTRYPOINT] = [
    Object.keys(STANDARD_REPLACEMENTS.identifierReplacements)[0],
    Object.values(STANDARD_REPLACEMENTS.identifierReplacements)[0],
    'standard',
  ]
  const SAMPLE_TYPESCRIPT_FILE_PATH = '/index.ts'

  beforeEach(async () => {
    runner = new SchematicTestRunner(
      'schematics',
      join(__dirname, '..', '..', 'migrations.json'),
    )
    tree = new UnitTestTree(Tree.empty())
    logWarnSpy = jest.spyOn(logging.Logger.prototype, 'warn').mockReturnValue()
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })

  const runMigration = () =>
    runner.runSchematic('tree-shakeable-manager-providers', {}, tree)

  it('should not change non-Typescript files', async () => {
    const INDEX_HTML_CONTENTS = `
        Some sample code that isn't in a Typescript file
        <pre>
        import { ${SAMPLE_OLD_IDENTIFIER} from '${LIB_NAME}/${SAMPLE_ENTRYPOINT}'

        const providers = [ ${SAMPLE_OLD_IDENTIFIER} ];
        </pre>
      `
    tree.create('/index.html', INDEX_HTML_CONTENTS)

    await runMigration()

    expect(tree.readContent('/index.html')).toEqual(INDEX_HTML_CONTENTS)
  })

  it('should replace many old identifier imports and usages for new ones', async () => {
    tree.create(
      SAMPLE_TYPESCRIPT_FILE_PATH,
      `
      import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
      import { provideClientHydration } from '@angular/platform-browser'
      import {
        provideNgxMetaCore,
        withNgxMetaBaseUrl,
        withNgxMetaDefaults,
      } from '@davidlj95/ngx-meta/core'
      import { provideNgxMetaRouting } from '${LIB_NAME}/routing'
      import {
        ${JSON_LD_REPLACEMENTS.getOldIdentifiersLines()},
        provideNgxMetaJsonLd
      } from '${LIB_NAME}/json-ld'
      import {
        ${OPEN_GRAPH_REPLACEMENTS.getOldIdentifiersLines()},
        provideNgxMetaOpenGraph
      } from '${LIB_NAME}/open-graph'
      import {
        ${OPEN_GRAPH_PROFILE_REPLACEMENTS.getOldIdentifiersLines()},
        provideNgxMetaOpenGraphProfile
      } from '${LIB_NAME}/open-graph'
      import {
        ${STANDARD_REPLACEMENTS.getOldIdentifiersLines()},
        provideNgxMetaStandard
      } from '${LIB_NAME}/standard'
      import {
        ${TWITTER_CARD_REPLACEMENTS.getOldIdentifiersLines()},
        provideNgxMetaTwitterCard
      } from '${LIB_NAME}/twitter-card'

      export const appConfig: ApplicationConfig = {
        providers: [
          provideZoneChangeDetection({ eventCoalescing: true }),
          provideClientHydration(),
          provideNgxMetaCore(
            withNgxMetaDefaults({ title: 'Default title' }),
            withNgxMetaBaseUrl('https://example.com'),
          ),
          provideNgxMetaRouting(),
          ${JSON_LD_REPLACEMENTS.getOldUsagesLines()},
          provideNgxMetaJsonLd(),
          ${OPEN_GRAPH_REPLACEMENTS.getOldUsagesLines()},
          provideNgxMetaOpenGraph(),
          ${OPEN_GRAPH_PROFILE_REPLACEMENTS.getOldUsagesLines()},
          provideNgxMetaOpenGraphProfile(),
          ${STANDARD_REPLACEMENTS.getOldUsagesLines()},
          provideNgxMetaStandard(),
          ${TWITTER_CARD_REPLACEMENTS.getOldUsagesLines()},
          provideNgxMetaTwitterCard(),
        ],
      }`,
    )

    await runMigration()

    const content = tree.readContent(SAMPLE_TYPESCRIPT_FILE_PATH)
    expect(content).toBe(`
      import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
      import { provideClientHydration } from '@angular/platform-browser'
      import {
        provideNgxMetaCore,
        withNgxMetaBaseUrl,
        withNgxMetaDefaults,
      } from '@davidlj95/ngx-meta/core'
      import { provideNgxMetaRouting } from '${LIB_NAME}/routing'
      import {
        ${JSON_LD_REPLACEMENTS.getNewIdentifiersLines()},
        provideNgxMetaJsonLd
      } from '${LIB_NAME}/json-ld'
      import {
        ${OPEN_GRAPH_REPLACEMENTS.getNewIdentifiersLines()},
        provideNgxMetaOpenGraph
      } from '${LIB_NAME}/open-graph'
      import {
        ${OPEN_GRAPH_PROFILE_REPLACEMENTS.getNewIdentifiersLines()},
        provideNgxMetaOpenGraphProfile
      } from '${LIB_NAME}/open-graph'
      import {
        ${STANDARD_REPLACEMENTS.getNewIdentifiersLines()},
        provideNgxMetaStandard
      } from '${LIB_NAME}/standard'
      import {
        ${TWITTER_CARD_REPLACEMENTS.getNewIdentifiersLines()},
        provideNgxMetaTwitterCard
      } from '${LIB_NAME}/twitter-card'

      export const appConfig: ApplicationConfig = {
        providers: [
          provideZoneChangeDetection({ eventCoalescing: true }),
          provideClientHydration(),
          provideNgxMetaCore(
            withNgxMetaDefaults({ title: 'Default title' }),
            withNgxMetaBaseUrl('https://example.com'),
          ),
          provideNgxMetaRouting(),
          ${JSON_LD_REPLACEMENTS.getNewUsagesLines()},
          provideNgxMetaJsonLd(),
          ${OPEN_GRAPH_REPLACEMENTS.getNewUsagesLines()},
          provideNgxMetaOpenGraph(),
          ${OPEN_GRAPH_PROFILE_REPLACEMENTS.getNewUsagesLines()},
          provideNgxMetaOpenGraphProfile(),
          ${STANDARD_REPLACEMENTS.getNewUsagesLines()},
          provideNgxMetaStandard(),
          ${TWITTER_CARD_REPLACEMENTS.getNewUsagesLines()},
          provideNgxMetaTwitterCard(),
        ],
      }`)
  })

  describe('when namespace imports are used to import the library', () => {
    const namespaceImport = `import ngxMetaMetadataModule from '${LIB_NAME}/${SAMPLE_ENTRYPOINT}'`
    const oldUsage = `ngxMetaMetadataModule.${SAMPLE_OLD_IDENTIFIER}`
    const newUsage = `ngxMetaMetadataModule.${SAMPLE_NEW_IDENTIFIER}()`

    it('should leave the import as is', async () => {
      tree.create(SAMPLE_TYPESCRIPT_FILE_PATH, namespaceImport)

      await runMigration()

      expect(tree.readContent(SAMPLE_TYPESCRIPT_FILE_PATH)).toEqual(
        namespaceImport,
      )
    })

    it('should warn about it', async () => {
      tree.create(SAMPLE_TYPESCRIPT_FILE_PATH, namespaceImport)

      await runMigration()

      expect(logWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('non-named imports of the library detected'),
      )
    })

    it('should replace those usages too', async () => {
      tree.create(
        SAMPLE_TYPESCRIPT_FILE_PATH,
        `${namespaceImport}

         const providers = [
            ${oldUsage},
         ]`,
      )

      await runMigration()

      expect(tree.readContent(SAMPLE_TYPESCRIPT_FILE_PATH)).toBe(
        `${namespaceImport}

         const providers = [
            ${newUsage},
         ]`,
      )
    })
  })
})
