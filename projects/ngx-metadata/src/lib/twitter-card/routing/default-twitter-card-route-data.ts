import { TwitterCard } from '../twitter-card'
import { _MAIN_KEY } from 'ngx-metadata/routing'
import { KEY } from './default-twitter-card-route-strategy'

export interface DefaultTwitterCardRouteData {
  [_MAIN_KEY]: {
    [KEY]: TwitterCard
  }
}
