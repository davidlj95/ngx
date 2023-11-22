import { OpenGraph } from '../open-graph'
import { _MAIN_KEY } from 'ngx-metadata/routing'
import { ROUTING_KEY } from './default-open-graph-route-strategy'

export interface DefaultOpenGraphRouteData {
  [_MAIN_KEY]: {
    [ROUTING_KEY]: OpenGraph
  }
}
