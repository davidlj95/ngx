import {
  _GLOBAL_APPLICATION_NAME,
  _withModuleManagerNameAttribute,
  withManagerGlobal,
} from '@davidlj95/ngx-meta/core'
import { provideOpenGraphManager } from '../../utils/provide-open-graph-manager'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'

/**
 * Manages the {@link OpenGraph.siteName} metadata
 * @public
 */
export const provideOpenGraphSiteName = () =>
  provideOpenGraphManager(
    'siteName',
    withManagerGlobal(_GLOBAL_APPLICATION_NAME),
    _withModuleManagerNameAttribute(
      withOpenGraphPropertyAttribute('site_name'),
    ),
  )