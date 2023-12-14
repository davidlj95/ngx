import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import { OpenGraphMetadataRouteData } from '@davidlj95/ngx-meta/open-graph'

export interface OpenGraphProfileMetadataRouteData
  extends OpenGraphMetadataRouteData {
  meta: {
    openGraph: OpenGraphMetadataRouteData['meta']['openGraph'] & {
      profile: OpenGraphProfileMetadata
    }
  }
}
