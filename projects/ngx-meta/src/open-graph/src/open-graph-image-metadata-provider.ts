import { OpenGraph } from './open-graph'
import { _GLOBAL_IMAGE, NgxMetaMetaService } from '@davidlj95/ngx-meta/core'
import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { makeOpenGraphMetaDefinition } from './make-open-graph-meta-definition'

const NO_KEY_VALUE: OpenGraph[typeof _GLOBAL_IMAGE] = {
  url: undefined,
  alt: undefined,
  secureUrl: null,
  type: null,
  width: null,
  height: null,
}

/**
 * @internal
 */
export const __OPEN_GRAPH_IMAGE_SETTER_FACTORY =
  (metaService: NgxMetaMetaService) =>
  (value: OpenGraph[typeof _GLOBAL_IMAGE]) => {
    const imageUrl = value?.url?.toString()
    const effectiveValue: OpenGraph[typeof _GLOBAL_IMAGE] =
      imageUrl !== undefined && imageUrl !== null ? value : NO_KEY_VALUE
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
  { s: __OPEN_GRAPH_IMAGE_SETTER_FACTORY, g: _GLOBAL_IMAGE, m: true },
)
