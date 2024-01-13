import { OpenGraphProfile } from './open-graph-profile'
import { makeOpenGraphProfileMetadataProvider } from './make-open-graph-profile-metadata-provider'

const KEY: keyof OpenGraphProfile = 'lastName'

export const OPEN_GRAPH_PROFILE_LAST_NAME_METADATA_PROVIDER =
  makeOpenGraphProfileMetadataProvider(KEY, { p: 'last_name' })
