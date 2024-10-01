import { Provider } from '@angular/core'
import { STANDARD_TITLE_METADATA_PROVIDER } from '../managers/standard-title-metadata-provider'
import { STANDARD_DESCRIPTION_METADATA_PROVIDER } from '../managers/standard-description-metadata-provider'
import { STANDARD_AUTHOR_METADATA_PROVIDER } from '../managers/standard-author-metadata-provider'
import { STANDARD_KEYWORDS_METADATA_PROVIDER } from '../managers/standard-keywords-metadata-provider'
import { STANDARD_GENERATOR_METADATA_PROVIDER } from '../managers/standard-generator-metadata-provider'
import { STANDARD_APPLICATION_NAME_METADATA_PROVIDER } from '../managers/standard-application-name-metadata-provider'
import { STANDARD_CANONICAL_URL_METADATA_PROVIDER } from '../managers/standard-canonical-url-metadata-provider'
import { STANDARD_LOCALE_METADATA_PROVIDER } from '../managers/standard-locale-metadata-provider'
import { STANDARD_THEME_COLOR_METADATA_PROVIDER } from '../managers/standard-theme-color-metadata-provider'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/standard/ | standard module}
 * metadata managers.
 *
 * @remarks
 *
 * This is the standalone, recommended API. Using this API is preferred.
 * However, you may also use {@link NgxMetaStandardModule} as the Angular module-based equivalent API.
 *
 * @public
 */
export const provideNgxMetaStandard = (): Provider[] => [
  STANDARD_TITLE_METADATA_PROVIDER,
  STANDARD_DESCRIPTION_METADATA_PROVIDER,
  STANDARD_AUTHOR_METADATA_PROVIDER,
  STANDARD_KEYWORDS_METADATA_PROVIDER,
  STANDARD_GENERATOR_METADATA_PROVIDER,
  STANDARD_APPLICATION_NAME_METADATA_PROVIDER,
  STANDARD_CANONICAL_URL_METADATA_PROVIDER,
  STANDARD_LOCALE_METADATA_PROVIDER,
  STANDARD_THEME_COLOR_METADATA_PROVIDER,
]
