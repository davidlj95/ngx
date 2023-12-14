import { TwitterCardMetadata } from './twitter-card-metadata'
import { MetadataRouteData } from '@davidlj95/ngx-meta/routing'

export interface TwitterCardMetadataRouteData extends MetadataRouteData {
  meta: { twitterCard: TwitterCardMetadata }
}
