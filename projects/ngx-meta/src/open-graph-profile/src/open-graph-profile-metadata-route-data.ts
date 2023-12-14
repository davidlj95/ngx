import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'
import {
  OpenGraphMetadata,
  OpenGraphMetadataRouteData,
} from '@davidlj95/ngx-meta/open-graph'

export interface OpenGraphProfileMetadataRouteData
  extends OpenGraphMetadataRouteData {
  openGraph: OpenGraphMetadata & {
    profile: OpenGraphProfileMetadata
  }
}
