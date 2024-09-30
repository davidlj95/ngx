import { OpenGraphProfileGender } from './open-graph-profile-gender'

/**
 * Open Graph profile metadata for this page.
 *
 * <b>Requires Open Graph profile metadata managers to work</b>
 *
 * @remarks
 *
 * Used in {@link OpenGraph.profile} with type {@link OpenGraphProfile}
 *
 * Provider:
 *
 * {@link provideNgxMetaOpenGraphProfile} or {@link NgxMetaOpenGraphProfileModule}
 *
 * See also:
 *
 * - {@link https://ogp.me/#type_profile | Open Graph profile specs}
 *
 * @public
 */
export interface OpenGraphProfile {
  /**
   * A name normally given to an individual by a parent or self-chosen.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link OPEN_GRAPH_PROFILE_FIRST_NAME_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://ogp.me/#type_profile:~:text=profile%3Afirst_name%20%2D%20string | Property specs}
   */
  readonly firstName?: string | null

  /**
   * A name inherited from a family or marriage and by which the individual is commonly known.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link OPEN_GRAPH_PROFILE_LAST_NAME_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://ogp.me/#type_profile:~:text=profile%3Alast_name%20%2D%20string | Property specs}
   */
  readonly lastName?: string | null

  /**
   * A short unique string to identify them.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link OPEN_GRAPH_PROFILE_USERNAME_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://ogp.me/#type_profile:~:text=profile%3Ausername%20%2D%20string | Property specs}
   */
  readonly username?: string | null

  /**
   * Their gender.
   *
   * Allowing a string here too, so you can specify another gender than the ones
   * specified by standard (male, female).
   *
   * Check out {@link OpenGraphProfileGender} type for constants you can use to
   * specify standard values for this field.
   *
   * @remarks
   *
   * Provider:
   *
   * {@link OPEN_GRAPH_PROFILE_GENDER_METADATA_PROVIDER}
   *
   * See also:
   *
   * - {@link https://ogp.me/#type_profile:~:text=profile%3Agender%20%2D%20enum | Property specs}
   */
  readonly gender?: OpenGraphProfileGender | string | null
}
