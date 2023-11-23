import { OpenGraphProfile } from '../open-graph-profile'
import { ROUTING_KEY } from './default-open-graph-profile-route-strategy'
import { _ROUTING_KEY } from '@davidlj95/ngx-meta/routing'
import { _OPEN_GRAPH_ROUTING_KEY } from '@davidlj95/ngx-meta/open-graph'

export interface DefaultOpenGraphProfileRouteData {
  [_ROUTING_KEY]: {
    [_OPEN_GRAPH_ROUTING_KEY]: {
      [ROUTING_KEY]: OpenGraphProfile
    }
  }
}
