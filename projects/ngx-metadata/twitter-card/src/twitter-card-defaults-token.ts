import { InjectionToken } from '@angular/core'
import { TwitterCard } from './twitter-card'

export const TWITTER_CARD_DEFAULTS_TOKEN = new InjectionToken<TwitterCard>(
  'Twitter card defaults',
)
