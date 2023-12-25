import { Provider } from '@angular/core'
import { provideMetadata } from '@davidlj95/ngx-meta/core'
import { JsonLdMetadata } from './json-ld-metadata'

export function provideJsonLd(): Provider[] {
  return [provideMetadata(JsonLdMetadata)]
}
