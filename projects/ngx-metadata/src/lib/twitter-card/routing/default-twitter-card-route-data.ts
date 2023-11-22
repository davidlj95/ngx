import { TwitterCard } from '../twitter-card'
import { MAIN_KEY } from '../../routing/current-route-data-key-path-metadata-strategy'
import { KEY } from './default-twitter-card-route-strategy'

export interface DefaultTwitterCardRouteData {
  [MAIN_KEY]: {
    [KEY]: TwitterCard
  }
}
