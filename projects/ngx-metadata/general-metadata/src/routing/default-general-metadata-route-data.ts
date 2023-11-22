import { _ROUTING_KEY } from 'ngx-metadata/routing'
import { KEY } from './default-general-metadata-route-strategy'
import { GeneralMetadata } from '../general-metadata'

export interface DefaultGeneralMetadataRouteData {
  [_ROUTING_KEY]: {
    [KEY]: GeneralMetadata
  }
}
