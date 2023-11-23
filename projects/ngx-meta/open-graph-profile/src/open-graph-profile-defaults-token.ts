import { InjectionToken } from '@angular/core'
import { OpenGraphProfile } from './open-graph-profile'

export const OPEN_GRAPH_PROFILE_DEFAULTS_TOKEN =
  new InjectionToken<OpenGraphProfile>('Open Graph Profile defaults')
