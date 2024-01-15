import { OpenGraph } from './open-graph'
import { GLOBAL_IMAGE, MetaService } from '@davidlj95/ngx-meta/core'
import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import { makeOpenGraphMetaProperty } from './make-open-graph-meta-property'

const NO_KEY_VALUE: OpenGraph[typeof GLOBAL_IMAGE] = {
  url: undefined,
  alt: undefined,
  secureUrl: null,
  type: null,
  width: null,
  height: null,
}

export const OPEN_GRAPH_IMAGE_SETTER_FACTORY =
  (metaService: MetaService) => (value: OpenGraph[typeof GLOBAL_IMAGE]) => {
    const imageUrl = value?.url?.toString()
    const effectiveValue: OpenGraph[typeof GLOBAL_IMAGE] =
      imageUrl !== undefined && imageUrl !== null ? value : NO_KEY_VALUE
    metaService.set(makeOpenGraphMetaProperty(GLOBAL_IMAGE), imageUrl)
    metaService.set(
      makeOpenGraphMetaProperty(GLOBAL_IMAGE, 'alt'),
      effectiveValue?.alt,
    )
    metaService.set(
      makeOpenGraphMetaProperty(GLOBAL_IMAGE, 'secure_url'),
      effectiveValue?.secureUrl?.toString(),
    )
    metaService.set(
      makeOpenGraphMetaProperty(GLOBAL_IMAGE, 'type'),
      effectiveValue?.type,
    )
    metaService.set(
      makeOpenGraphMetaProperty(GLOBAL_IMAGE, 'width'),
      effectiveValue?.width?.toString(),
    )
    metaService.set(
      makeOpenGraphMetaProperty(GLOBAL_IMAGE, 'height'),
      effectiveValue?.height?.toString(),
    )
  }
export const OPEN_GRAPH_IMAGE_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  GLOBAL_IMAGE,
  { s: OPEN_GRAPH_IMAGE_SETTER_FACTORY, g: GLOBAL_IMAGE },
)
