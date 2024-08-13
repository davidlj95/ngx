import { Provider } from '@angular/core'
import { STANDARD_TITLE_METADATA_PROVIDER } from './standard-title-metadata-provider'
import { STANDARD_DESCRIPTION_METADATA_PROVIDER } from './standard-description-metadata-provider'
import { STANDARD_AUTHOR_METADATA_PROVIDER } from './standard-author-metadata-provider'
import { STANDARD_KEYWORDS_METADATA_PROVIDER } from './standard-keywords-metadata-provider'
import { STANDARD_GENERATOR_METADATA_PROVIDER } from './standard-generator-metadata-provider'
import { STANDARD_APPLICATION_NAME_METADATA_PROVIDER } from './standard-application-name-metadata-provider'
import { STANDARD_CANONICAL_URL_METADATA_PROVIDER } from './standard-canonical-url-metadata-provider'
import { STANDARD_LOCALE_METADATA_PROVIDER } from './standard-locale-metadata-provider'
import { STANDARD_THEME_COLOR_METADATA_PROVIDER } from './standard-theme-color-metadata-provider'

/**
 * Adds {@link https://ngx-meta.dev/built-in-modules/standard/ | standard module}
 * metadata managers
 *
 * For module-based apps, use {@link NgxMetaStandardModule} instead
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
