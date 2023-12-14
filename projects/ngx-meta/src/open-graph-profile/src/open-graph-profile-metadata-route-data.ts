import { OpenGraphProfileMetadataValues } from './open-graph-profile-metadata-values'
import {
  OpenGraphMetadataRouteData,
  OpenGraphMetadataValues,
} from '@davidlj95/ngx-meta/open-graph'

export interface OpenGraphProfileMetadataRouteData
  extends OpenGraphMetadataRouteData {
  openGraph: OpenGraphMetadataValues & {
    profile: OpenGraphProfileMetadataValues
  }
}
