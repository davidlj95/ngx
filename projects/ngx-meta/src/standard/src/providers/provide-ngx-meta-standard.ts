import { Provider } from '@angular/core'
import {
  provideStandardApplicationName,
  provideStandardAuthor,
  provideStandardCanonicalUrl,
  provideStandardDescription,
  provideStandardGenerator,
  provideStandardKeywords,
  provideStandardLocale,
  provideStandardThemeColor,
  provideStandardTitle,
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
export const provideNgxMetaStandard = (): Provider => [
  provideStandardTitle(),
  provideStandardDescription(),
  provideStandardAuthor(),
  provideStandardKeywords(),
  provideStandardGenerator(),
  provideStandardApplicationName(),
  provideStandardCanonicalUrl(),
  provideStandardLocale(),
  provideStandardThemeColor(),
]
