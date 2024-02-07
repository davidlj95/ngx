import { OpenGraphProfileGender } from './open-graph-profile-gender'

/**
 * Open Graph profile metadata for this page
 *
 * See {@link OpenGraph.profile}
 *
 * @remarks
 *
 * - {@link https://ogp.me/#type_profile | Object specs}
 *
 * @public
 */
export interface OpenGraphProfile {
  /**
   * A name normally given to an individual by a parent or self-chosen.
   *
   * - {@link https://ogp.me/#type_profile:~:text=profile%3Afirst_name%20%2D%20string | Property specs}
   */
  readonly firstName?: string | null

  /**
   * A name inherited from a family or marriage and by which the individual is commonly known.
   *
   * - {@link https://ogp.me/#type_profile:~:text=profile%3Alast_name%20%2D%20string | Property specs}
   */
  readonly lastName?: string | null

  /**
   * A short unique string to identify them.
   *
   * - {@link https://ogp.me/#type_profile:~:text=profile%3Ausername%20%2D%20string | Property specs}
   */
  readonly username?: string | null

  /**
   * Their gender.
   *
   * Allowing a string here too, so you can specify another gender than the ones
   * specified by standard (male, female)
   *
   * Checkout {@link OpenGraphProfileGender} type for constants you can use to
   * specify standard values for this field
   *
   * - {@link https://ogp.me/#type_profile:~:text=profile%3Agender%20%2D%20enum | Property specs}
   */
  readonly gender?: OpenGraphProfileGender | string | null
}
