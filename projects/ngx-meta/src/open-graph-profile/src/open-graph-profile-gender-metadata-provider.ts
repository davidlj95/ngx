import { OpenGraphProfile } from './open-graph-profile'
import { makeOpenGraphProfileMetadataProvider } from './make-open-graph-profile-metadata-provider'

const KEY: keyof OpenGraphProfile = 'gender'

export const OPEN_GRAPH_PROFILE_GENDER_METADATA_PROVIDER =
  makeOpenGraphProfileMetadataProvider(KEY)
