import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import { Title } from '@angular/platform-browser'
import { _GLOBAL_TITLE, MetadataSetterFactory } from '@davidlj95/ngx-meta/core'

/**
 * @internal
 */
export const __STANDARD_TITLE_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof _GLOBAL_TITLE]
> = (titleService: Title) => (value) => {
  if (value === undefined || value === null) {
    return
  }
  titleService.setTitle(value ?? '')
}

/**
 * Manages the {@link Standard.title} metadata
 * @public
 */
export const STANDARD_TITLE_METADATA_PROVIDER = makeStandardMetadataProvider(
  _GLOBAL_TITLE,
  { g: _GLOBAL_TITLE, s: __STANDARD_TITLE_METADATA_SETTER_FACTORY, d: [Title] },
)
