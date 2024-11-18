import { OpenGraph } from '../../types'
import {
  _GLOBAL_IMAGE,
  _isDefined,
  _maybeNonHttpUrlDevMessage,
  _withModuleManagerSameGlobalKey,
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
  withManagerObjectMerging,
} from '@davidlj95/ngx-meta/core'
import { MODULE_NAME } from '../../module-name'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'
import { provideOpenGraphManager } from '../../utils/provide-open-graph-manager'

const NO_KEY_VALUE: OpenGraph[typeof _GLOBAL_IMAGE] = {
  url: undefined,
  alt: undefined,
  secureUrl: null,
  type: null,
  width: null,
  height: null,
}

/**
 * Manages the {@link OpenGraph.image} metadata
 * @public
 */
export const OPEN_GRAPH_IMAGE_METADATA_PROVIDER = provideOpenGraphManager(
  _GLOBAL_IMAGE,
  _withModuleManagerSameGlobalKey(),
  withManagerObjectMerging(),
  _withModuleManagerSetterFactory(
    (metaElementsService: NgxMetaElementsService) => (value) => {
      const imageUrl = value?.url?.toString()
      const effectiveValue: OpenGraph[typeof _GLOBAL_IMAGE] = _isDefined(
        imageUrl,
      )
        ? value
        : NO_KEY_VALUE
      // Checkout https://github.com/davidlj95/ngx/pull/731
      if (ngDevMode) {
        _maybeNonHttpUrlDevMessage(imageUrl, {
          module: MODULE_NAME,
          property: _GLOBAL_IMAGE,
          value: imageUrl,
          link: 'https://stackoverflow.com/a/9858694/3263250',
        })
      }
      metaElementsService.set(
        withOpenGraphPropertyAttribute(_GLOBAL_IMAGE),
        withContentAttribute(imageUrl),
      )
      metaElementsService.set(
        withOpenGraphPropertyAttribute(_GLOBAL_IMAGE, 'alt'),
        withContentAttribute(effectiveValue?.alt),
      )
      metaElementsService.set(
        withOpenGraphPropertyAttribute(_GLOBAL_IMAGE, 'secure_url'),
        withContentAttribute(effectiveValue?.secureUrl?.toString()),
      )
      metaElementsService.set(
        withOpenGraphPropertyAttribute(_GLOBAL_IMAGE, 'type'),
        withContentAttribute(effectiveValue?.type),
      )
      metaElementsService.set(
        withOpenGraphPropertyAttribute(_GLOBAL_IMAGE, 'width'),
        withContentAttribute(effectiveValue?.width?.toString()),
      )
      metaElementsService.set(
        withOpenGraphPropertyAttribute(_GLOBAL_IMAGE, 'height'),
        withContentAttribute(effectiveValue?.height?.toString()),
      )
    },
  ),
)
