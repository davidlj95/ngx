import { TwitterCard } from '../twitter-card'
import { _ROUTING_KEY } from 'ngx-metadata/routing'
import { KEY } from './default-twitter-card-route-strategy'

export interface DefaultTwitterCardRouteData {
  [_ROUTING_KEY]: {
    [KEY]: TwitterCard
  }
}
