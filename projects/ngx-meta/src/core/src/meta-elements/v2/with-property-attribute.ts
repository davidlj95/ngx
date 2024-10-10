/**
 * Creates an attribute name/value identifying a `<meta property="{value}">` element kind.
 *
 * See {@link NgxMetaElementsService.set}.
 *
 * @param value - Value for the `property` attribute of the `<meta>` element
 *
 * @public
 */
export const withPropertyAttribute = (value: string) =>
  ['property', value] as const
