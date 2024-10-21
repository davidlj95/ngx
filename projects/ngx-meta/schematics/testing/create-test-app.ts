import { SchematicTestRunner } from '@angular-devkit/schematics/testing'
import { Schema as NgNewSchema } from '@schematics/angular/ng-new/schema'

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
