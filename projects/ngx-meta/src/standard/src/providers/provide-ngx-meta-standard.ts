import { Provider } from '@angular/core'
import {
  STANDARD_APPLICATION_NAME_METADATA_PROVIDER,
  STANDARD_AUTHOR_METADATA_PROVIDER,
  STANDARD_CANONICAL_URL_METADATA_PROVIDER,
  STANDARD_DESCRIPTION_METADATA_PROVIDER,
  STANDARD_GENERATOR_METADATA_PROVIDER,
  STANDARD_KEYWORDS_METADATA_PROVIDER,
  STANDARD_LOCALE_METADATA_PROVIDER,
  STANDARD_THEME_COLOR_METADATA_PROVIDER,
  STANDARD_TITLE_METADATA_PROVIDER,
} from '../managers'

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