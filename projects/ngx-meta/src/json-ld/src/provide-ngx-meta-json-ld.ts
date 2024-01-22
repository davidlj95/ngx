import { Provider } from '@angular/core'
import { JSON_LD_METADATA_PROVIDER } from './json-ld-metadata-provider'

export const provideNgxMetaJsonLd = (): Provider[] => [
  JSON_LD_METADATA_PROVIDER,
]
