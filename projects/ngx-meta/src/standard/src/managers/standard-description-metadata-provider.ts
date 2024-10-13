import {
  _GLOBAL_DESCRIPTION,
  withManagerGlobal,
} from '@davidlj95/ngx-meta/core'
import { provideStandardManager } from '../utils/provide-standard-manager'

/**
 * Manages the {@link Standard.description} metadata
 * @public
 */
export const STANDARD_DESCRIPTION_METADATA_PROVIDER = provideStandardManager(
  _GLOBAL_DESCRIPTION,
  withManagerGlobal(_GLOBAL_DESCRIPTION),
)
