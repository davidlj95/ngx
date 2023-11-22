import { OpenGraph } from '../open-graph'
import { MAIN_KEY } from '../../routing/current-route-data-key-path-metadata-strategy'
import { KEY } from './default-open-graph-route-strategy'

export interface DefaultOpenGraphRouteData {
  [MAIN_KEY]: {
    [KEY]: OpenGraph
  }
}
