import { OpenGraph } from '../../types'
import {
  _GLOBAL_IMAGE,
  _isDefined,
  _maybeNonHttpUrlDevMessage,
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { makeOpenGraphMetadataProvider } from '../../utils/make-open-graph-metadata-provider'
import { MODULE_NAME } from '../../module-name'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'

const NO_KEY_VALUE: OpenGraph[typeof _GLOBAL_IMAGE] = {
  url: undefined,
  alt: undefined,
  secureUrl: null,
  type: null,
  width: null,
  height: null,
}

export const OPEN_GRAPH_IMAGE_SETTER_FACTORY =
  (metaElementsService: NgxMetaElementsService) =>
  (value: OpenGraph[typeof _GLOBAL_IMAGE]) => {
    const imageUrl = value?.url?.toString()
    const effectiveValue: OpenGraph[typeof _GLOBAL_IMAGE] = _isDefined(imageUrl)
      ? value
      : NO_KEY_VALUE
    // Why not an `if`? Checkout https://github.com/davidlj95/ngx/pull/731
    ngDevMode &&
      _maybeNonHttpUrlDevMessage(imageUrl, {
        module: MODULE_NAME,
        property: _GLOBAL_IMAGE,
        value: imageUrl,
        link: 'https://stackoverflow.com/a/9858694/3263250',
      })
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
  }

/**
 * Manages the {@link OpenGraph.image} metadata
 * @public
 */
export const OPEN_GRAPH_IMAGE_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  _GLOBAL_IMAGE,
  { s: OPEN_GRAPH_IMAGE_SETTER_FACTORY, g: _GLOBAL_IMAGE, m: true },
)