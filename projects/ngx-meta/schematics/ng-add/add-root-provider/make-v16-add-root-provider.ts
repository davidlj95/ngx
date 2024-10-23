import { Rule } from '@angular-devkit/schematics'
import { classify } from '@angular-devkit/core/src/utils/strings'
import { type addRootProvider } from '@schematics/angular/utility'
import { MetadataModules } from '../schema'

const METADATA_ENTRYPOINTS = new Set<MetadataModules>([
  'json-ld',
  'open-graph',
  'standard',
  'twitter-card',
])

export const makeV16AddRootProvider =
  (ngAddRootProvider: typeof addRootProvider) =>
  ({ project, name }: { project: string; name: string }): Rule => {
    const entrypoint =
      [...METADATA_ENTRYPOINTS].find((entrypoint) =>
        name.startsWith(entrypoint),
      ) ?? name
    return ngAddRootProvider(
      project,
      ({ code, external }) =>
        code`${external(`provideNgxMeta${classify(name)}`, `@davidlj95/ngx-meta/${entrypoint}`)}()`,
    )
  }
