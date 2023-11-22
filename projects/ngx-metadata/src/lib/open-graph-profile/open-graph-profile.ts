import { OpenGraphProfileGender } from './open-graph-profile-gender'

/**
 * Open Graph profile metadata for this page
 *
 * @see https://ogp.me/#type_profile
 */
export interface OpenGraphProfile {
  /**
   * A name normally given to an individual by a parent or self-chosen.
   *
   * @see https://ogp.me/#type_profile:~:text=profile%3Afirst_name%20%2D%20string
   */
  readonly firstName?: string | null

  /**
   * A name inherited from a family or marriage and by which the individual is commonly known.
   *
   * @see https://ogp.me/#type_profile:~:text=profile%3Alast_name%20%2D%20string
   */
  readonly lastName?: string | null

  /**
   * A short unique string to identify them.
   *
   * @see https://ogp.me/#type_profile:~:text=profile%3Ausername%20%2D%20string
   */
  readonly username?: string | null

  /**
   * Their gender.
   *
   * Allowing a string here, so you can specify another gender than the ones
   * specified by standard (male, female)
   *
   * @see https://ogp.me/#type_profile:~:text=profile%3Agender%20%2D%20enum
   */
  readonly gender?: OpenGraphProfileGender | string | null
}
