import { OpenGraphProfile } from '../open-graph-profile'
import { _MAIN_KEY } from 'ngx-metadata/routing'
import { _OPEN_GRAPH_ROUTE_KEY } from 'ngx-metadata/open-graph'
import { KEY } from './default-open-graph-profile-route-strategy'

export interface DefaultOpenGraphProfileRouteData {
  [_MAIN_KEY]: {
    [_OPEN_GRAPH_ROUTE_KEY]: {
      [KEY]: OpenGraphProfile
    }
  }
}
