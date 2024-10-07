import { InjectionToken, Provider } from '@angular/core'
import {
  _injectMetadataManagers,
  NgxMetaMetadataManager,
} from './ngx-meta-metadata-manager'

export interface MetadataRegistry {
  readonly register: (manager: NgxMetaMetadataManager) => void
  readonly getAll: () => Iterable<NgxMetaMetadataManager>
  readonly findByGlobalOrJsonPath: (
    globalOrJsonPath: string,
  ) => Iterable<NgxMetaMetadataManager>
}

const metadataRegistryFactory: () => MetadataRegistry = () => {
  const managers = _injectMetadataManagers()
  const managersById = new Map<string, NgxMetaMetadataManager>()
  const register: MetadataRegistry['register'] = (manager) => {
    if (managersById.has(manager.id)) {
      return
    }
    managersById.set(manager.id, manager)
  }
  managers.forEach(register)
  const getAll: MetadataRegistry['getAll'] = () => managersById.values()
  const findByGlobalOrJsonPath: MetadataRegistry['findByGlobalOrJsonPath'] = (
    globalOrJsonPath,
  ) =>
    [...getAll()].filter(
      (manager) =>
        manager.resolverOptions.global == globalOrJsonPath ||
        manager.resolverOptions.jsonPath.join('.') == globalOrJsonPath,
    )
  return {
    register,
    getAll,
    findByGlobalOrJsonPath,
  }
}

export const METADATA_REGISTRY = new InjectionToken<MetadataRegistry>(
  ngDevMode ? 'NgxMeta Metadata Registry' : 'NgxMetaMR',
  { factory: metadataRegistryFactory },
)

export const provideMetadataRegistry: () => Provider = () => ({
  provide: METADATA_REGISTRY,
  useFactory: metadataRegistryFactory,
})
