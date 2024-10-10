import { makeOpenGraphMetadataProvider } from '../../utils/make-open-graph-metadata-provider'
import {
  _GLOBAL_DESCRIPTION,
  _maybeTooLongDevMessage,
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph } from '../../types'
import { MODULE_NAME } from '../../module-name'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'

/**
 * Manages the {@link OpenGraph.description} metadata
 * @public
 */
export const OPEN_GRAPH_DESCRIPTION_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider(_GLOBAL_DESCRIPTION, {
    g: _GLOBAL_DESCRIPTION,
    s:
      (metaElementsService: NgxMetaElementsService) =>
      (description: OpenGraph['description']) => {
        /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
        if (ngDevMode) {
          _maybeTooLongDevMessage(description, 300, {
            module: MODULE_NAME,
            property: _GLOBAL_DESCRIPTION,
            value: description,
            link: 'https://stackoverflow.com/q/8914476/3263250',
          })
        }
        metaElementsService.set(
          withOpenGraphPropertyAttribute(_GLOBAL_DESCRIPTION),
          withContentAttribute(description),
        )
      },
  })
