import { makeOpenGraphProfileMetadataProvider } from './make-open-graph-profile-metadata-provider'

export const OPEN_GRAPH_PROFILE_LAST_NAME_METADATA_PROVIDER =
  makeOpenGraphProfileMetadataProvider('lastName', { p: 'last_name' })
