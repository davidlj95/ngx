import { SchematicTestRunner } from '@angular-devkit/schematics/testing'
import { Tree } from '@angular-devkit/schematics'
import { beforeEach, describe } from '@jest/globals'
import { join } from 'path'
import { Schema as NgAddSchema } from './schema'
import { ProviderTestCase } from './testing/provider-test-case'
import { shouldAddRootProvider } from './testing/should-add-root-provider'
import { createTestApp } from '../testing/create-test-app'

// https://github.com/angular/components/blob/18.2.8/src/cdk/schematics/ng-add/index.spec.ts
// https://github.com/angular/components/blob/18.2.8/src/material/schematics/ng-add/index.spec.ts
// https://github.com/FortAwesome/angular-fontawesome/blob/0.15.0/projects/schematics/src/ng-add/index.spec.ts
describe('ng-add schematic', () => {
  const SCHEMATIC_NAME = 'ng-add'
  let runner: SchematicTestRunner
  let appTree: Tree

  const defaultOptions: NgAddSchema = {
    project: 'test',
  }

  beforeEach(async () => {
    runner = new SchematicTestRunner(
      'schematics',
      join(__dirname, '..', 'collection.json'),
    )
  })

  const CORE_PROVIDER = new ProviderTestCase({
    name: 'core',
    symbol: 'provideNgxMetaCore',
  })

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
          tree = await runner.runSchematic<NgAddSchema>(
            SCHEMATIC_NAME,
            defaultOptions,
            appTree,
          )
        })

        shouldAddRootProvider(CORE_PROVIDER, () => tree, standalone)
      })
    })
  })
})
