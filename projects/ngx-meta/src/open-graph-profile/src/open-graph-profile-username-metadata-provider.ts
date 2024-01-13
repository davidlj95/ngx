import { OpenGraphProfile } from './open-graph-profile'
import { makeOpenGraphProfileMetadataProvider } from './make-open-graph-profile-metadata-provider'

const KEY: keyof OpenGraphProfile = 'username'

export const OPEN_GRAPH_PROFILE_USERNAME_METADATA_PROVIDER =
  makeOpenGraphProfileMetadataProvider(KEY)
