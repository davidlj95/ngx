/**
 * Creates an attribute name/value identifying a `<meta property="{value}">` element kind.
 *
 * See {@link NgxMetaElementsService.set}.
 *
 * @param value - Value for the `property` attribute of the `<meta>` element
 *
 * @alpha
 */
/* istanbul ignore next - will be used in next PRs */
export const withPropertyAttribute = (value: string) =>
  ['property', value] as const
