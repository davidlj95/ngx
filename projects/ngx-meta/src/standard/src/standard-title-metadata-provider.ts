import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import { Title } from '@angular/platform-browser'
import { MetadataSetterFactory } from '@davidlj95/ngx-meta/core'

const KEY: keyof Standard = 'title'

export const STANDARD_TITLE_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof KEY]
> = (titleService: Title) => (value) => {
  if (value === undefined || value === null) {
    return
  }
  titleService.setTitle(value ?? '')
}

export const STANDARD_TITLE_METADATA_PROVIDER = makeStandardMetadataProvider(
  KEY,
  { g: KEY, s: STANDARD_TITLE_METADATA_SETTER_FACTORY, d: [Title] },
)
