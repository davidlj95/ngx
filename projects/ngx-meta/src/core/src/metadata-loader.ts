import { FactoryProvider, InjectionToken, SkipSelf } from '@angular/core'
import { MetadataRegistry } from './metadata-registry'

export type MetadataLoader = () => void

export const METADATA_LOADER = new InjectionToken(
  ngDevMode ? /* istanbul ignore next */ 'NgxMeta loader' : 'NgxMetaL',
)
export const METADATA_LOADER_FACTORY: (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
) => MetadataLoader =
  (globalRegistry: MetadataRegistry, localRegistry: MetadataRegistry) => () => {
    const localMetadata = localRegistry.getAll()
    for (const metadata of localMetadata) {
      globalRegistry.register(metadata)
    }
  }
export const METADATA_LOADER_PROVIDER: FactoryProvider = {
  provide: METADATA_LOADER,
  useFactory: METADATA_LOADER_FACTORY,
  deps: [[MetadataRegistry, new SkipSelf()], [MetadataRegistry]],
}
