import { OpenGraph } from '../../types'
import {
  _GLOBAL_IMAGE,
  _maybeNonHttpUrlDevMessage,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { makeOpenGraphMetadataProvider } from '../../utils/make-open-graph-metadata-provider'
import { makeOpenGraphMetaDefinition } from '../../utils/make-open-graph-meta-definition'
import { _MODULE_NAME } from '../../module-name'

const NO_KEY_VALUE: OpenGraph[typeof _GLOBAL_IMAGE] = {
  url: undefined,
  alt: undefined,
  secureUrl: null,
  type: null,
  width: null,
  height: null,
}

export const OPEN_GRAPH_IMAGE_SETTER_FACTORY =
  (metaService: NgxMetaMetaService) =>
  (value: OpenGraph[typeof _GLOBAL_IMAGE]) => {
    const imageUrl = value?.url?.toString()
    const effectiveValue: OpenGraph[typeof _GLOBAL_IMAGE] =
      imageUrl !== undefined && imageUrl !== null ? value : NO_KEY_VALUE
    // Why not an `if`? Checkout https://github.com/davidlj95/ngx/pull/731
    ngDevMode &&
      _maybeNonHttpUrlDevMessage(imageUrl, {
        module: _MODULE_NAME,
        property: _GLOBAL_IMAGE,
        link: 'https://stackoverflow.com/a/9858694/3263250',
      })
    metaService.set(makeOpenGraphMetaDefinition(_GLOBAL_IMAGE), imageUrl)
    metaService.set(
      makeOpenGraphMetaDefinition(_GLOBAL_IMAGE, 'alt'),
      effectiveValue?.alt,
    )
    metaService.set(
      makeOpenGraphMetaDefinition(_GLOBAL_IMAGE, 'secure_url'),
      effectiveValue?.secureUrl?.toString(),
    )
    metaService.set(
      makeOpenGraphMetaDefinition(_GLOBAL_IMAGE, 'type'),
      effectiveValue?.type,
    )
    metaService.set(
      makeOpenGraphMetaDefinition(_GLOBAL_IMAGE, 'width'),
      effectiveValue?.width?.toString(),
    )
    metaService.set(
      makeOpenGraphMetaDefinition(_GLOBAL_IMAGE, 'height'),
      effectiveValue?.height?.toString(),
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
