import { MAIN_KEY } from '../../routing/current-route-data-key-path-metadata-strategy'
import { KEY } from './default-general-metadata-route-strategy'
import { GeneralMetadata } from '../general-metadata'

export interface DefaultGeneralMetadataRouteData {
  [MAIN_KEY]: {
    [KEY]: GeneralMetadata
  }
}
