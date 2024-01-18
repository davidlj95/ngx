import { OpenGraphProfile } from './open-graph-profile'
import { makeOpenGraphProfileMetadataProvider } from './make-open-graph-profile-metadata-provider'

const KEY: keyof OpenGraphProfile = 'firstName'

export const OPEN_GRAPH_PROFILE_FIRST_NAME_METADATA_PROVIDER =
  makeOpenGraphProfileMetadataProvider(KEY, { p: 'first_name' })
