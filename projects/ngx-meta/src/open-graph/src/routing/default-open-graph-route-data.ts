import { OpenGraph } from '../open-graph'
import { ROUTING_KEY } from './default-open-graph-route-strategy'
import { _ROUTING_KEY } from '@davidlj95/ngx-meta/routing'

export interface DefaultOpenGraphRouteData {
  [_ROUTING_KEY]: {
    [ROUTING_KEY]: OpenGraph
  }
}
