import { ENVIRONMENT_INITIALIZER, inject, Provider } from '@angular/core'
import { MetadataRegistry } from './metadata-registry'

/**
 * Allows to load metadata modules after library has been initialized
 *
 * For module-based apps, use {@link NgxMetaMetadataLoaderModule} instead
 *
 * @public
 */
export const provideNgxMetaMetadataLoader = (): Provider[] => [
  MetadataRegistry,
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: () => {
      const globalRegistry = inject(MetadataRegistry, { skipSelf: true })
      const localRegistry = inject(MetadataRegistry)
      return () => {
        const localMetadata = localRegistry.getAll()
        for (const metadata of localMetadata) {
          globalRegistry.register(metadata)
        }
      }
    },
  },
]
