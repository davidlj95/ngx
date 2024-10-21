import { chain, noop, Rule } from '@angular-devkit/schematics'
import { addRootProvider } from '@schematics/angular/utility'
import { MetadataModules, Schema } from './schema'
import { classify } from '@angular-devkit/core/src/utils/strings'

const ENTRYPOINTS = new Set<MetadataModules>([
  'json-ld',
  'open-graph',
  'standard',
  'twitter-card',
])
// noinspection JSUnusedGlobalSymbols (actually used in `collection.json`)
export function ngAdd(options: Schema): Rule {
  const addNgxMetaRootProvider = (name: string): Rule => {
    const entrypoint =
      [...ENTRYPOINTS].find((entrypoint) => name.startsWith(entrypoint)) ?? name
    return addRootProvider(
      options.project,
      ({ code, external }) =>
        code`${external(`provideNgxMeta${classify(name)}`, `@davidlj95/ngx-meta/${entrypoint}`)}()`,
    )
  }

  return chain([
    addNgxMetaRootProvider('core'),
    options.routing ? addNgxMetaRootProvider('routing') : noop(),
    ...options.metadataModules.map((metadataModule) =>
      addNgxMetaRootProvider(metadataModule),
    ),
  ])
}
