import { OpenGraph } from './open-graph'
import { MetadataRouteData } from '@davidlj95/ngx-meta/routing'

export interface OpenGraphMetadata extends MetadataRouteData {
  openGraph: OpenGraph
}
