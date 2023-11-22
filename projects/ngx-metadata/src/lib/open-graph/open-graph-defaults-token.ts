import { InjectionToken } from '@angular/core'
import { OpenGraph } from './open-graph'

export const OPEN_GRAPH_DEFAULTS_TOKEN = new InjectionToken<OpenGraph>(
  'Open Graph defaults',
)
