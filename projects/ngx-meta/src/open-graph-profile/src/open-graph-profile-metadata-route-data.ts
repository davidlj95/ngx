import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { MetadataRouteData } from '@davidlj95/ngx-meta/routing'
import { OpenGraph } from '@davidlj95/ngx-meta/open-graph'

export interface OpenGraphProfileMetadataRouteData extends MetadataRouteData {
  meta: {
    openGraph: OpenGraph & {
      profile: OpenGraphProfileMetadata
    }
  }
}
