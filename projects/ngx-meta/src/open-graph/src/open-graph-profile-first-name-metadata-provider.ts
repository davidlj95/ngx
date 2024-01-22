import { makeOpenGraphProfileMetadataProvider } from './make-open-graph-profile-metadata-provider'

export const OPEN_GRAPH_PROFILE_FIRST_NAME_METADATA_PROVIDER =
  makeOpenGraphProfileMetadataProvider('firstName', { p: 'first_name' })
