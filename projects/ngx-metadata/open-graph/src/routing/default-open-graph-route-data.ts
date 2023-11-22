import { OpenGraph } from '../open-graph'
import { _ROUTING_KEY } from 'ngx-metadata/routing'
import { ROUTING_KEY } from './default-open-graph-route-strategy'

export interface DefaultOpenGraphRouteData {
  [_ROUTING_KEY]: {
    [ROUTING_KEY]: OpenGraph
  }
}
