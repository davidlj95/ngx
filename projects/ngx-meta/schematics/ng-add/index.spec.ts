import { SchematicTestRunner } from '@angular-devkit/schematics/testing'
import { Tree } from '@angular-devkit/schematics'
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals'
import { join } from 'path'
import { MetadataModules, Schema as NgAddSchema } from './schema'
import { ProviderTestCase } from './testing/provider-test-case'
import { createTestApp } from '../testing/create-test-app'
import { shouldAddRootProvider } from './testing/should-add-root-provider'
import { shouldNotAddRootProvider } from './testing/should-not-add-root-provider'
import * as AngularSchematicsUtilities from '@schematics/angular/utility'
import { logging } from '@angular-devkit/core'

// https://github.com/angular/components/blob/18.2.8/src/cdk/schematics/ng-add/index.spec.ts
// https://github.com/angular/components/blob/18.2.8/src/material/schematics/ng-add/index.spec.ts
// https://github.com/FortAwesome/angular-fontawesome/blob/0.15.0/projects/schematics/src/ng-add/index.spec.ts
describe('ng-add schematic', () => {
  const SCHEMATIC_NAME = 'ng-add'
  let runner: SchematicTestRunner
  let appTree: Tree

  const defaultOptions = {
    project: 'test',
  } satisfies Partial<NgAddSchema>

  beforeEach(async () => {
    jest.spyOn(logging.Logger.prototype, 'info').mockReturnValue()
    runner = new SchematicTestRunner(
      'schematics',
      join(__dirname, '..', 'collection.json'),
    )
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })

  const CORE_PROVIDER = new ProviderTestCase({
    name: 'core',
    symbol: 'provideNgxMetaCore',
  })
  const ROUTING_PROVIDER = new ProviderTestCase({
    name: 'routing',
    symbol: 'provideNgxMetaRouting',
  })
  const PROVIDERS_BY_MODULE_NAME: {
    // 👇 With this type we ensure that all possible types are tested
    //    If we miss one, the type will be incomplete
    [K in MetadataModules]: ProviderTestCase
  } = {
    'json-ld': new ProviderTestCase({
      name: 'JSON-LD',
      symbol: 'provideNgxMetaJsonLd',
      entrypoint: 'json-ld',
    }),
    'open-graph': new ProviderTestCase({
      name: 'Open Graph',
      symbol: 'provideNgxMetaOpenGraph',
      entrypoint: 'open-graph',
    }),
    'open-graph-profile': new ProviderTestCase({
      name: 'Open Graph (profile)',
      symbol: 'provideNgxMetaOpenGraphProfile',
      entrypoint: 'open-graph',
    }),
    standard: new ProviderTestCase({
      name: 'standard',
      symbol: 'provideNgxMetaStandard',
    }),
    'twitter-card': new ProviderTestCase({
      name: 'Twitter Card',
      symbol: 'provideNgxMetaTwitterCard',
      entrypoint: 'twitter-card',
    }),
  }

  ;([true, false] as const).forEach((standalone) => {
    const appKind = standalone ? 'standalone' : 'module-based'
    describe(`when the app is ${appKind}`, () => {
      beforeEach(async () => {
        appTree = await createTestApp(runner, {
          name: defaultOptions.project,
          standalone,
        })
      })

      describe('by default', () => {
        let tree: Tree

        beforeEach(async () => {
          tree = await runner.runSchematic<Partial<NgAddSchema>>(
            SCHEMATIC_NAME,
            defaultOptions,
            appTree,
          )
        })

        shouldAddRootProvider(CORE_PROVIDER, () => tree, standalone)
        shouldNotAddRootProvider(ROUTING_PROVIDER, () => tree, standalone)
        Object.values(PROVIDERS_BY_MODULE_NAME).forEach((provider) => {
          shouldNotAddRootProvider(provider, () => tree, standalone)
        })
      })
      ;[true, false].forEach((routing) => {
        describe(`when routing option is ${routing}`, () => {
          let tree: Tree

          beforeEach(async () => {
            tree = await runner.runSchematic<Partial<NgAddSchema>>(
              SCHEMATIC_NAME,
              { ...defaultOptions, routing },
              appTree,
            )
          })

          routing
            ? shouldAddRootProvider(ROUTING_PROVIDER, () => tree, standalone)
            : shouldNotAddRootProvider(ROUTING_PROVIDER, () => tree, standalone)
        })
      })
      Object.keys(PROVIDERS_BY_MODULE_NAME).forEach(
        (metadataModule: MetadataModules) => {
          describe(`when metadata module option contains '${metadataModule}'`, () => {
            let tree: Tree

            beforeEach(async () => {
              tree = await runner.runSchematic<Partial<NgAddSchema>>(
                SCHEMATIC_NAME,
                { ...defaultOptions, metadataModules: [metadataModule] },
                appTree,
              )
            })

            shouldAddRootProvider(
              PROVIDERS_BY_MODULE_NAME[metadataModule],
              () => tree,
              standalone,
            )
          })
        },
      )
    })
  })

  // Below Angular v16.1
  describe("when addRootProvider isn't available", () => {
    let logSpy: jest.Spied<(typeof logging.Logger.prototype)['warn']>

    beforeEach(async () => {
      logSpy = jest.spyOn(logging.Logger.prototype, 'warn').mockReturnValue()
      jest.mock<Partial<typeof AngularSchematicsUtilities>>(
        '@schematics/angular/utility',
        () =>
          ({
            ...AngularSchematicsUtilities,
            addRootProvider: undefined,
          }) satisfies Partial<typeof AngularSchematicsUtilities>,
      )
      await runner.runSchematic<Partial<NgAddSchema>>(
        SCHEMATIC_NAME,
        defaultOptions,
        appTree,
      )
    })

    it('should log a message', () => {
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('Please, setup the library manually'),
      )
    })
  })
})
