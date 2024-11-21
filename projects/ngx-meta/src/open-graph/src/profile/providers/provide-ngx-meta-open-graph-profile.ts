import { Provider } from '@angular/core'
import {
  provideOpenGraphProfileFirstName,
  provideOpenGraphProfileGender,
  provideOpenGraphProfileLastName,
  provideOpenGraphProfileUsername,
} from '../managers'

/**
 * Provides {@link https://ngx-meta.dev/built-in-modules/open-graph/ | Open Graph module}
 * profile metadata managers
 *
 * @remarks
 *
 * This is the standalone, recommended API. Using this API is preferred.
 * However, you may also use {@link NgxMetaOpenGraphProfileModule} as the Angular module-based equivalent API.
 *
 * @public
 */
export const provideNgxMetaOpenGraphProfile = (): Provider => [
  provideOpenGraphProfileFirstName(),
  provideOpenGraphProfileLastName(),
  provideOpenGraphProfileUsername(),
  provideOpenGraphProfileGender(),
]
