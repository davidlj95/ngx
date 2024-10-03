import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import { Standard } from '../types'
import { Title } from '@angular/platform-browser'
import {
  _GLOBAL_TITLE,
  _isDefined,
  MetadataSetterFactory,
} from '@davidlj95/ngx-meta/core'

export const STANDARD_TITLE_METADATA_SETTER_FACTORY: MetadataSetterFactory<
  Standard[typeof _GLOBAL_TITLE]
> = (titleService: Title) => (value) => {
  if (!_isDefined(value)) {
    return
  }
  titleService.setTitle(value)
}

/**
 * Manages the {@link Standard.title} metadata
 * @public
 */
export const STANDARD_TITLE_METADATA_PROVIDER = makeStandardMetadataProvider(
  _GLOBAL_TITLE,
  { g: _GLOBAL_TITLE, s: STANDARD_TITLE_METADATA_SETTER_FACTORY, d: [Title] },
)
