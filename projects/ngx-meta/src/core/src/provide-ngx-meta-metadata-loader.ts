import { Provider } from '@angular/core'
import { METADATA_LOADER_PROVIDERS } from './metadata-loader-providers'

/**
 * Allows to load metadata modules after library has been initialized
 *
 * For module-based apps, use {@link NgxMetaMetadataLoaderModule} instead
 *
 * @public
 */
export const provideNgxMetaMetadataLoader = (): Provider[] =>
  METADATA_LOADER_PROVIDERS
