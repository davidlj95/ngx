import { ENVIRONMENT_INITIALIZER, Provider } from '@angular/core'
import { MetadataRegistry } from './metadata-registry'
import {
  METADATA_LOADER,
  METADATA_LOADER_PROVIDER,
  MetadataLoader,
} from './metadata-loader'

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
