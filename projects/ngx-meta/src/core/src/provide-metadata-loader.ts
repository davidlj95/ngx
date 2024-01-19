import { ENVIRONMENT_INITIALIZER, Provider } from '@angular/core'
import {
  METADATA_LOADER,
  METADATA_LOADER_PROVIDER,
  MetadataLoader,
} from './metadata-loader'
import { MetadataRegistry } from './metadata-registry'

export const METADATA_LOADER_PROVIDERS: Provider[] = [
  MetadataRegistry,
  METADATA_LOADER_PROVIDER,
  {
    provide: ENVIRONMENT_INITIALIZER,
    multi: true,
    useFactory: (loader: MetadataLoader) => () => loader(),
    deps: [METADATA_LOADER],
  },
]

export const provideMetadataLoader = (): Provider[] => METADATA_LOADER_PROVIDERS
