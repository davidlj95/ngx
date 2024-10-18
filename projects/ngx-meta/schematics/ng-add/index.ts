import { Rule } from '@angular-devkit/schematics'
import { addRootProvider } from '@schematics/angular/utility'
import { Schema } from './schema'

// noinspection JSUnusedGlobalSymbols (actually used in `collection.json`)
export function ngAdd(options: Schema): Rule {
  return addRootProvider(
    options.project,
    ({ code, external }) =>
      code`${external('provideNgxMetaCore', '@davidlj95/ngx-meta/core')}()`,
  )
}
