import { Provider } from '@angular/core'
import { JSON_LD_METADATA_PROVIDER } from './json-ld-metadata-provider'

export function provideJsonLd(): Provider[] {
  return [JSON_LD_METADATA_PROVIDER]
}
