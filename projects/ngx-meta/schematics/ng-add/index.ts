import { chain, noop, Rule } from '@angular-devkit/schematics'
import { addRootProvider } from '@schematics/angular/utility'
import { Schema } from './schema'
import { classify } from '@angular-devkit/core/src/utils/strings'

// noinspection JSUnusedGlobalSymbols (actually used in `collection.json`)
export function ngAdd(options: Schema): Rule {
  const maybeAddNgxMetaRootProvider = (name?: string): Rule => {
    if (!name) {
      return noop()
    }
    return addRootProvider(
      options.project,
      ({ code, external }) =>
        code`${external(`provideNgxMeta${classify(name)}`, `@davidlj95/ngx-meta/${name}`)}()`,
    )
  }

  return chain([
    maybeAddNgxMetaRootProvider('core'),
    maybeAddNgxMetaRootProvider(options.routing ? 'routing' : undefined),
  ])
}
