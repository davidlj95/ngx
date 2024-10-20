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

  describe('when the app is standalone', () => {
    beforeEach(async () => {
      appTree = await createTestApp(runner, {
        name: defaultOptions.project,
        standalone: true, // to be explicit, but it's the default now
      })
    })

    it('should add core provider to app config', async () => {
      const tree = await runner.runSchematic<NgAddSchema>(
        SCHEMATIC_NAME,
        defaultOptions,
        appTree,
      )
      const appConfig = getFileContent(tree, '/src/app/app.config.ts')
      expect(appConfig).toContain(
        `import { provideNgxMetaCore } from '${LIB_NAME}/core`,
      )
      expect(stripWhitespace(appConfig)).toMatch(
        /providers:\[.*provideNgxMetaCore\(\).*]/,
      )
    })
  })

  describe('when the app is module-based', () => {
    beforeEach(async () => {
      appTree = await createTestApp(runner, {
        name: defaultOptions.project,
        standalone: false,
      })
    })

    it('should add core provider to app module', async () => {
      const tree = await runner.runSchematic<NgAddSchema>(
        SCHEMATIC_NAME,
        defaultOptions,
        appTree,
      )
      const appModule = getFileContent(tree, '/src/app/app.module.ts')
      expect(appModule).toContain(
        `import { provideNgxMetaCore } from '${LIB_NAME}/core`,
      )
      expect(stripWhitespace(appModule)).toMatch(
        /providers:\[.*provideNgxMetaCore\(\).*]/,
      )
    })
  })
})

// https://github.com/FortAwesome/angular-fontawesome/blob/0.15.0/projects/schematics/src/ng-add/index.spec.ts#L107
// https://github.com/angular/components/blob/18.2.8/src/cdk/schematics/testing/test-app.ts
export const createTestApp = async (
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

// https://github.com/angular/components/blob/18.2.8/src/cdk/schematics/testing/file-content.ts
export function getFileContent(tree: Tree, filePath: string): string {
  const contentBuffer = tree.read(filePath)

  if (!contentBuffer) {
    throw new Error(`Cannot read "${filePath}" because it does not exist.`)
  }

  return contentBuffer.toString()
}

const stripWhitespace = (value: string) => value.replace(/\s/g, '')
