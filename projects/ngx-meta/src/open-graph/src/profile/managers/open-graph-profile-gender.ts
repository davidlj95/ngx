/**
 * See {@link OpenGraphProfileGender}
 * @public
 */
export const OPEN_GRAPH_PROFILE_GENDER_FEMALE = 'female'

/**
 * See {@link OpenGraphProfileGender}
 * @public
 */
export const OPEN_GRAPH_PROFILE_GENDER_MALE = 'male'

/**
 * Genders for {@link OpenGraphProfile.gender} property
 *
 * @remarks
 *
 * Use one of the referenced constants to avoid typing them yourself :)
 *
 * @public
 */
export type OpenGraphProfileGender =
  | typeof OPEN_GRAPH_PROFILE_GENDER_FEMALE
  | typeof OPEN_GRAPH_PROFILE_GENDER_MALE
