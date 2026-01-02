import { inject, provideEnvironmentInitializer, Provider } from '@angular/core'
import {
  metadataRegistry,
  provideMetadataRegistry,
} from '../managers/metadata-registry'

/**
 * Allows loading metadata managers after global initialization.
 *
 * @remarks
 *
 * This is the standalone, recommended API. Using this API is preferred.
 * However, you may also use {@link NgxMetaMetadataLoaderModule} as the Angular module-based equivalent API.
 *
 * @public
 */
export const provideNgxMetaMetadataLoader = (): Provider => [
  provideMetadataRegistry(),
  provideEnvironmentInitializer(() => {
    const globalRegistry = inject(metadataRegistry(), { skipSelf: true })
    const localMetadata = inject(metadataRegistry()).getAll()
    for (const metadata of localMetadata) {
      globalRegistry.register(metadata)
    }
  }),
]
