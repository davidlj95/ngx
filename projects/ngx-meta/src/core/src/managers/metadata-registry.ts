import { Provider } from '@angular/core'
import {
  _injectMetadataManagers,
  NgxMetaMetadataManager,
} from './ngx-meta-metadata-manager'
import { _LazyInjectionToken, _makeInjectionToken } from '../utils'

/**
 * @internal
 */
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

export const metadataRegistry: _LazyInjectionToken<MetadataRegistry> = () =>
  _makeInjectionToken(
    ngDevMode ? 'Metadata Registry' : 'MReg',
    metadataRegistryFactory,
  )

export const provideMetadataRegistry: () => Provider = () => ({
  provide: metadataRegistry(),
  useFactory: metadataRegistryFactory,
})
