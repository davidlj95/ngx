import { Provider } from '@angular/core'
import { METADATA_LOADER_PROVIDERS } from './metadata-loader-providers'

export const provideNgxMetaMetadataLoader = (): Provider[] =>
  METADATA_LOADER_PROVIDERS
