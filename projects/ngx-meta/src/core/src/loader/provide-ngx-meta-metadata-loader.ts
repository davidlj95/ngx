import { ENVIRONMENT_INITIALIZER, inject, Provider } from '@angular/core'
import {
  METADATA_REGISTRY,
  provideMetadataRegistry,
} from '../managers/metadata-registry'

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
  provideMetadataRegistry(),
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: () => {
      const globalRegistry = inject(METADATA_REGISTRY, { skipSelf: true })
      const localRegistry = inject(METADATA_REGISTRY)
      return () => {
        const localMetadata = localRegistry.getAll()
        for (const metadata of localMetadata) {
          globalRegistry.register(metadata)
        }
      }
    },
  },
]