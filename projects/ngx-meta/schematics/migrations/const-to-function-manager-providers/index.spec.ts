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
    runner.runSchematic('const-to-function-manager-providers', {}, tree)

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
        ${JSON_LD_REPLACEMENTS.oldIdentifiersLines},
        provideNgxMetaJsonLd
      } from '${LIB_NAME}/json-ld'
      import {
        ${OPEN_GRAPH_REPLACEMENTS.oldIdentifiersLines},
        provideNgxMetaOpenGraph
      } from '${LIB_NAME}/open-graph'
      import {
        ${OPEN_GRAPH_PROFILE_REPLACEMENTS.oldIdentifiersLines},
        provideNgxMetaOpenGraphProfile
      } from '${LIB_NAME}/open-graph'
      import {
        ${STANDARD_REPLACEMENTS.oldIdentifiersLines},
        provideNgxMetaStandard
      } from '${LIB_NAME}/standard'
      import {
        ${TWITTER_CARD_REPLACEMENTS.oldIdentifiersLines},
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
          ${JSON_LD_REPLACEMENTS.oldUsagesLines},
          provideNgxMetaJsonLd(),
          ${OPEN_GRAPH_REPLACEMENTS.oldUsagesLines},
          provideNgxMetaOpenGraph(),
          ${OPEN_GRAPH_PROFILE_REPLACEMENTS.oldUsagesLines},
          provideNgxMetaOpenGraphProfile(),
          ${STANDARD_REPLACEMENTS.oldUsagesLines},
          provideNgxMetaStandard(),
          ${TWITTER_CARD_REPLACEMENTS.oldUsagesLines},
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
        ${JSON_LD_REPLACEMENTS.newIdentifiersLines},
        provideNgxMetaJsonLd
      } from '${LIB_NAME}/json-ld'
      import {
        ${OPEN_GRAPH_REPLACEMENTS.newIdentifiersLines},
        provideNgxMetaOpenGraph
      } from '${LIB_NAME}/open-graph'
      import {
        ${OPEN_GRAPH_PROFILE_REPLACEMENTS.newIdentifiersLines},
        provideNgxMetaOpenGraphProfile
      } from '${LIB_NAME}/open-graph'
      import {
        ${STANDARD_REPLACEMENTS.newIdentifiersLines},
        provideNgxMetaStandard
      } from '${LIB_NAME}/standard'
      import {
        ${TWITTER_CARD_REPLACEMENTS.newIdentifiersLines},
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
          ${JSON_LD_REPLACEMENTS.newUsagesLines},
          provideNgxMetaJsonLd(),
          ${OPEN_GRAPH_REPLACEMENTS.newUsagesLines},
          provideNgxMetaOpenGraph(),
          ${OPEN_GRAPH_PROFILE_REPLACEMENTS.newUsagesLines},
          provideNgxMetaOpenGraphProfile(),
          ${STANDARD_REPLACEMENTS.newUsagesLines},
          provideNgxMetaStandard(),
          ${TWITTER_CARD_REPLACEMENTS.newUsagesLines},
          provideNgxMetaTwitterCard(),
        ],
      }`)
  })

  describe('when namespace imports are used to import the library', () => {
    const [SAMPLE_OLD_IDENTIFIER, SAMPLE_NEW_IDENTIFIER, SAMPLE_ENTRYPOINT] = [
      ...STANDARD_REPLACEMENTS.sampleReplacement,
      'standard',
    ]
    const namespaceImport = `import ngxMetaMetadataModule from '${LIB_NAME}/${SAMPLE_ENTRYPOINT}'`
    const fileWithOldUsage = `
      ${namespaceImport}

      const providers = [ngxMetaMetadataModule.${SAMPLE_OLD_IDENTIFIER}]
    `
    const fileWithNewUsage = `
      ${namespaceImport}

      const providers = [ngxMetaMetadataModule.${SAMPLE_NEW_IDENTIFIER}()]
    `

    it('should warn about it', async () => {
      tree.create(SAMPLE_TYPESCRIPT_FILE_PATH, fileWithOldUsage)

      await runMigration()

      expect(logWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('non-named imports of the library detected'),
      )
    })

    it('should replace those usages too, leaving import as is', async () => {
      tree.create(SAMPLE_TYPESCRIPT_FILE_PATH, fileWithOldUsage)

      await runMigration()

      expect(tree.readContent(SAMPLE_TYPESCRIPT_FILE_PATH)).toEqual(
        fileWithNewUsage,
      )
    })
  })
})
