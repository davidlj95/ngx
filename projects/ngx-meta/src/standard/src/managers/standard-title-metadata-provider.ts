import { makeStandardMetadataProvider } from '../utils/make-standard-metadata-provider'
import { Title } from '@angular/platform-browser'
import { _GLOBAL_TITLE, _isDefined } from '@davidlj95/ngx-meta/core'

/**
 * Manages the {@link Standard.title} metadata
 * @public
 */
export const STANDARD_TITLE_METADATA_PROVIDER = makeStandardMetadataProvider(
  _GLOBAL_TITLE,
  {
    g: _GLOBAL_TITLE,
    s: (titleService: Title) => (value) => {
      if (!_isDefined(value)) {
        return
      }
      titleService.setTitle(value)
    },
    d: [Title],
  },
)
