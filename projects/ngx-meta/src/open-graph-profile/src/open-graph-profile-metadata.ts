import { OpenGraph } from '@davidlj95/ngx-meta/open-graph'
import { OpenGraphProfile } from './open-graph-profile'

export interface OpenGraphProfileMetadata {
  openGraph: OpenGraph & {
    profile: OpenGraphProfile
  }
}
