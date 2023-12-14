import { MetadataRouteData } from '@davidlj95/ngx-meta/routing'

export interface StandardMetadataRouteData extends MetadataRouteData {
  meta: {
    standard: StandardMetadataRouteData
  }
}
