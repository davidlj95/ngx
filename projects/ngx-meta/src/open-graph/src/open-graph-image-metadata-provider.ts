import { OpenGraph } from './open-graph'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'
import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'

const KEY: keyof OpenGraph = 'image'
const NO_KEY_VALUE: OpenGraph[typeof KEY] = {
  url: undefined,
  alt: undefined,
  secureUrl: null,
  type: null,
  width: null,
  height: null,
}

export const OPEN_GRAPH_IMAGE_SETTER_FACTORY =
  (metaService: MetaService) => (value: OpenGraph[typeof KEY]) => {
    const imageUrl = value?.url?.toString()
    const effectiveValue: OpenGraph[typeof KEY] =
      imageUrl !== undefined && imageUrl !== null ? value : NO_KEY_VALUE
    metaService.set(new OpenGraphMetaProperty(KEY), imageUrl)
    metaService.set(new OpenGraphMetaProperty(KEY, 'alt'), effectiveValue?.alt)
    metaService.set(
      new OpenGraphMetaProperty(KEY, 'secure_url'),
      effectiveValue?.secureUrl?.toString(),
    )
    metaService.set(
      new OpenGraphMetaProperty(KEY, 'type'),
      effectiveValue?.type,
    )
    metaService.set(
      new OpenGraphMetaProperty(KEY, 'width'),
      effectiveValue?.width?.toString(),
    )
    metaService.set(
      new OpenGraphMetaProperty(KEY, 'height'),
      effectiveValue?.height?.toString(),
    )
  }
export const OPEN_GRAPH_IMAGE_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  KEY,
  { s: OPEN_GRAPH_IMAGE_SETTER_FACTORY, g: KEY },
)
