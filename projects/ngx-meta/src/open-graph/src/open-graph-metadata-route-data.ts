import { OpenGraphMetadata } from './open-graph-metadata'
import { MetadataRouteData } from '@davidlj95/ngx-meta/routing'

export interface OpenGraphMetadataRouteData extends MetadataRouteData {
  meta: {
    openGraph: OpenGraphMetadata
  }
}
