import { NgxMetaElementAttributes } from './ngx-meta-element-attributes'

/**
 * Creates an {@link NgxMetaElementAttributes} object specifying the `content` attribute to the
 * given `value`.
 *
 * Unless given `value` is `null` or `undefined`. In that case, `undefined` is returned.
 *
 * See {@link NgxMetaElementsService.set} for examples.
 *
 * @param content - Value for the `property` attribute of the `<meta>` element
 *
 * @alpha
 */
export const withContentAttribute = ((content: string | null | undefined) =>
  content ? { content } : undefined) as {
  (content: null | undefined): undefined
  (content: string): NgxMetaElementAttributes
}
