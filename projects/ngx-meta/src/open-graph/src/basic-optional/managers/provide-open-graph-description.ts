import {
  _GLOBAL_DESCRIPTION,
  _maybeTooLongDevMessage,
  _withModuleManagerSameGlobalKey,
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { MODULE_NAME } from '../../module-name'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'
import { provideOpenGraphManager } from '../../utils/provide-open-graph-manager'

/**
 * Manages the {@link OpenGraph.description} metadata
 * @public
 */
export const provideOpenGraphDescription = () =>
  provideOpenGraphManager(
    _GLOBAL_DESCRIPTION,
    _withModuleManagerSameGlobalKey(),
    _withModuleManagerSetterFactory(
      (metaElementsService: NgxMetaElementsService) => (description) => {
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
    ),
  )
