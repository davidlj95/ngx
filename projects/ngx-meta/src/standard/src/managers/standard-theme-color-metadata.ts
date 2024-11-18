/**
 * See {@link Standard.themeColor}
 * @public
 */
export type StandardThemeColorMetadata =
  | string
  | readonly StandardThemeColorMetadataObject[]

/**
 * See {@link Standard.themeColor}
 * @public
 */
export interface StandardThemeColorMetadataObject {
  /**
   * See {@link Standard.themeColor}
   */
  color: string
  /**
   * See {@link Standard.themeColor}
   */
  media?: string
}
