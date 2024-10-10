import { NgxMetaElementAttributes } from './ngx-meta-element-attributes'

/**
 * Creates an {@link NgxMetaElementAttributes} object specifying the `content` attribute to the
 * given `value`. Plus optional `extras`.
 *
 * Unless given `value` is `null` or `undefined`. In that case, `undefined` is returned.
 *
 * See {@link NgxMetaElementsService.set}
 *
 * @param content - Value for the `property` attribute of the `<meta>` element
 * @param extras - Extra attributes to include in the object if `content` is defined.
 *
 * @alpha
 */
export const withContentAttribute = ((
  content: string | null | undefined,
  extras?: NgxMetaElementAttributes,
) => (content ? { content, ...extras } : undefined)) as {
  (content: null | undefined, extras?: NgxMetaElementAttributes): undefined
  (content: string, extras?: NgxMetaElementAttributes): NgxMetaElementAttributes
  (
    content: string | null | undefined,
    extras?: NgxMetaElementAttributes,
  ): NgxMetaElementAttributes | undefined
}
