import { OpenGraphProfile } from '../open-graph-profile'
import { _ROUTING_KEY } from 'ngx-metadata/routing'
import { _OPEN_GRAPH_ROUTING_KEY } from 'ngx-metadata/open-graph'
import { ROUTING_KEY } from './default-open-graph-profile-route-strategy'

export interface DefaultOpenGraphProfileRouteData {
  [_ROUTING_KEY]: {
    [_OPEN_GRAPH_ROUTING_KEY]: {
      [ROUTING_KEY]: OpenGraphProfile
    }
  }
}
