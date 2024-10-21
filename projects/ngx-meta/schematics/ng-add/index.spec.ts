import { SchematicTestRunner } from '@angular-devkit/schematics/testing'
import { Tree } from '@angular-devkit/schematics'
import { beforeEach, describe, expect, it } from '@jest/globals'
import { join } from 'path'
import { Schema as NgAddSchema } from './schema'
import { Schema as NgNewSchema } from '@schematics/angular/ng-new/schema'
import { LIB_NAME } from '../testing/lib-name'

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
  ;([true, false] as const).forEach((standalone) => {
    const appKind = standalone ? 'standalone' : 'module-based'
    describe(`when the app is ${appKind}`, () => {
      beforeEach(async () => {
        appTree = await createTestApp(runner, {
          name: defaultOptions.project,
          standalone,
        })
      })

      it('should add core provider', async () => {
        const tree = await runner.runSchematic<NgAddSchema>(
          SCHEMATIC_NAME,
          defaultOptions,
          appTree,
        )
        const appConfigOrAppModule = getAppConfigOrAppModuleContents(
          tree,
          standalone,
        )
        expect(appConfigOrAppModule).toContain(
          `import { provideNgxMetaCore } from '${LIB_NAME}/core`,
        )
        expect(stripWhitespace(appConfigOrAppModule)).toMatch(
          /providers:\[.*provideNgxMetaCore\(\).*]/,
        )
      })
    })
  })
})

// https://github.com/FortAwesome/angular-fontawesome/blob/0.15.0/projects/schematics/src/ng-add/index.spec.ts#L107
// https://github.com/angular/components/blob/18.2.8/src/cdk/schematics/testing/test-app.ts
const createTestApp = async (
  runner: SchematicTestRunner,
  options: Omit<NgNewSchema, 'version'> & Partial<Pick<NgNewSchema, 'version'>>,
) => {
  return runner.runExternalSchematic<NgNewSchema>(
    '@schematics/angular',
    'ng-new',
    {
      version: '9.0.0',
      directory: '.',
      ...options,
    },
  )
}

const getAppConfigOrAppModuleContents = (tree: Tree, standalone: boolean) =>
  standalone
    ? getFileContent(tree, '/src/app/app.config.ts')
    : getFileContent(tree, '/src/app/app.module.ts')

// https://github.com/angular/components/blob/18.2.8/src/cdk/schematics/testing/file-content.ts
const getFileContent = (tree: Tree, filePath: string): string => {
  const contentBuffer = tree.read(filePath)

  if (!contentBuffer) {
    throw new Error(`Cannot read "${filePath}" because it does not exist.`)
  }

  return contentBuffer.toString()
}

const stripWhitespace = (value: string) => value.replace(/\s/g, '')
