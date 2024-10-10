/**
 * Creates an attribute name/value identifying a `<meta name="{value}">` element kind.
 *
 * See {@link NgxMetaElementsService.set}.
 *
 * @param value - Value for the `name` attribute of the `<meta>` element
 *
 * @alpha
 */
export const withNameAttribute = (value: string) => ['name', value] as const
