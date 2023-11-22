import { OpenGraphProfile } from '../open-graph-profile'
import { _MAIN_KEY } from 'ngx-metadata/routing'
import { KEY as OPEN_GRAPH_KEY } from '../../open-graph/routing/default-open-graph-route-strategy'
import { KEY } from './default-open-graph-profile-route-strategy'

export interface DefaultOpenGraphProfileRouteData {
  [_MAIN_KEY]: {
    [OPEN_GRAPH_KEY]: {
      [KEY]: OpenGraphProfile
    }
  }
}
