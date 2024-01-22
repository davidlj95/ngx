import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import { Title } from '@angular/platform-browser'
import { GLOBAL_TITLE, MetadataSetterFactory } from '@davidlj95/ngx-meta/core'

export const __STANDARD_TITLE_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof GLOBAL_TITLE]
> = (titleService: Title) => (value) => {
  if (value === undefined || value === null) {
    return
  }
  titleService.setTitle(value ?? '')
}

export const STANDARD_TITLE_METADATA_PROVIDER = makeStandardMetadataProvider(
  GLOBAL_TITLE,
  { g: GLOBAL_TITLE, s: __STANDARD_TITLE_METADATA_SETTER_FACTORY, d: [Title] },
)
