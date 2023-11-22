import { OpenGraphProfile } from '../open-graph-profile'
import { MAIN_KEY } from '../../routing/current-route-data-key-path-metadata-strategy'
import { KEY as OPEN_GRAPH_KEY } from '../../open-graph/routing/default-open-graph-route-strategy'
import { KEY } from './default-open-graph-profile-route-strategy'

export interface DefaultOpenGraphProfileRouteData {
  [MAIN_KEY]: {
    [OPEN_GRAPH_KEY]: {
      [KEY]: OpenGraphProfile
    }
  }
}
