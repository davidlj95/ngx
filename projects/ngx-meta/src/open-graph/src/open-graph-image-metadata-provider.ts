import { OpenGraph } from './open-graph'
import { GLOBAL_IMAGE, NgxMetaMetaService } from '@davidlj95/ngx-meta/core'
import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { makeOpenGraphMetaDefinition } from './make-open-graph-meta-definition'

const NO_KEY_VALUE: OpenGraph[typeof GLOBAL_IMAGE] = {
  url: undefined,
  alt: undefined,
  secureUrl: null,
  type: null,
  width: null,
  height: null,
}

export const __OPEN_GRAPH_IMAGE_SETTER_FACTORY =
  (metaService: NgxMetaMetaService) =>
  (value: OpenGraph[typeof GLOBAL_IMAGE]) => {
    const imageUrl = value?.url?.toString()
    const effectiveValue: OpenGraph[typeof GLOBAL_IMAGE] =
      imageUrl !== undefined && imageUrl !== null ? value : NO_KEY_VALUE
    metaService.set(makeOpenGraphMetaDefinition(GLOBAL_IMAGE), imageUrl)
    metaService.set(
      makeOpenGraphMetaDefinition(GLOBAL_IMAGE, 'alt'),
      effectiveValue?.alt,
    )
    metaService.set(
      makeOpenGraphMetaDefinition(GLOBAL_IMAGE, 'secure_url'),
      effectiveValue?.secureUrl?.toString(),
    )
    metaService.set(
      makeOpenGraphMetaDefinition(GLOBAL_IMAGE, 'type'),
      effectiveValue?.type,
    )
    metaService.set(
      makeOpenGraphMetaDefinition(GLOBAL_IMAGE, 'width'),
      effectiveValue?.width?.toString(),
    )
    metaService.set(
      makeOpenGraphMetaDefinition(GLOBAL_IMAGE, 'height'),
      effectiveValue?.height?.toString(),
    )
  }
export const OPEN_GRAPH_IMAGE_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  GLOBAL_IMAGE,
  { s: __OPEN_GRAPH_IMAGE_SETTER_FACTORY, g: GLOBAL_IMAGE },
)
