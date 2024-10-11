import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'
import { OPEN_GRAPH_PROFILE_KEY } from './open-graph-profile-key'

export const withOpenGraphProfilePropertyAttribute = (
  ...propertyParts: ReadonlyArray<string>
) => withOpenGraphPropertyAttribute(OPEN_GRAPH_PROFILE_KEY, ...propertyParts)
