import { TwitterCard } from '../twitter-card'
import { KEY } from './default-twitter-card-route-strategy'
import { _ROUTING_KEY } from '@davidlj95/ngx-meta/routing'

export interface DefaultTwitterCardRouteData {
  [_ROUTING_KEY]: {
    [KEY]: TwitterCard
  }
}
