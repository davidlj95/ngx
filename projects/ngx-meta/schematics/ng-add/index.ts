import { chain, noop, Rule } from '@angular-devkit/schematics'
import { Schema } from './schema'
import { makeAddRootProviderFn } from './add-root-provider'

// noinspection JSUnusedGlobalSymbols (actually used in `collection.json`)
export function ngAdd(options: Schema): Rule {
  return async () => {
    const addRootProvider = await makeAddRootProviderFn()
    const addRootProviderToProject = (name: string) =>
      addRootProvider({ name, project: options.project })

    return chain([
      addRootProviderToProject('core'),
      options.routing ? addRootProviderToProject('routing') : noop(),
      ...options.metadataModules.map((metadataModule) =>
        addRootProviderToProject(metadataModule),
      ),
    ])
  }
}
