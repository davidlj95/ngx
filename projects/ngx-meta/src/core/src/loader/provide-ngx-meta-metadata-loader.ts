import { ENVIRONMENT_INITIALIZER, inject, Provider } from '@angular/core'
import { MetadataRegistry } from '../managers/metadata-registry'

/**
 * Allows to load metadata managers after library has been initialized.
 *
 * @remarks
 *
 * This is the standalone, recommended API. Using this API is preferred.
 * However, you may also use {@link NgxMetaMetadataLoaderModule} as the Angular module-based equivalent API.
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
