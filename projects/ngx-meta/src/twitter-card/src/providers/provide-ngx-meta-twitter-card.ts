import { Provider } from '@angular/core'
import {
  provideTwitterCardCard,
  provideTwitterCardCreator,
  provideTwitterCardDescription,
  provideTwitterCardImage,
  provideTwitterCardSite,
  provideTwitterCardTitle,
} from '../managers'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/twitter-cards/ | Twitter Cards module}
 * metadata managers.
 *
 * @remarks
 *
 * This is the standalone, recommended API. Using this API is preferred.
 * However, you may also use {@link NgxMetaTwitterCardModule} as the Angular module-based equivalent API.
 *
 * @public
 */
export const provideNgxMetaTwitterCard = (): Provider => [
  provideTwitterCardCard(),
  provideTwitterCardSite(),
  provideTwitterCardCreator(),
  provideTwitterCardDescription(),
  provideTwitterCardTitle(),
  provideTwitterCardImage(),
]
