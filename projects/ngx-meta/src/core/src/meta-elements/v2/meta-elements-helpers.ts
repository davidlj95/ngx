import { NgxMetaElementAttributes } from './ngx-meta-element-attributes'

/**
 * Utility function to specify a `<meta name="{name}">` element.
 *
 * See {@link NgxMetaElementSetter} for examples.
 *
 * @param value - Value for the `name` attribute of the `<meta>` element
 *
 * @alpha
 */
export const withNameAttribute = (value: string) => ['name', value] as const
/**
 * Utility function to specify a `<meta property="{property}">` element.
 *
 * See {@link NgxMetaElementSetter} for examples.
 *
 * @param value - Value for the `property` attribute of the `<meta>` element
 *
 * @alpha
 */
export const withPropertyAttribute = (value: string) => ['property', value]

/**
 * Utility function to create an {@link NgxMetaElementAttributes} specifying the `content` attribute to the
 * given `value`. Unless given `value` is `null` or `undefined`. In that case, `undefined` is returned.
 *
 * See {@link NgxMetaElementSetter} for examples.
 *
 * @param content - Value for the `property` attribute of the `<meta>` element
 *
 * @alpha
 */
export const withContentAttribute = (
  content: string | null | undefined,
): NgxMetaElementAttributes | undefined => (content ? { content } : undefined)
