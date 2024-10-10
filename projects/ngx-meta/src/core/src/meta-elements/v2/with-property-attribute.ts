import { NgxMetaElementNameAttribute } from './ngx-meta-elements.service'

/**
 * Utility function to specify a `<meta property="{property}">` element.
 *
 * See {@link NgxMetaElementsService.set} for examples.
 *
 * @param value - Value for the `property` attribute of the `<meta>` element
 *
 * @alpha
 */
export const withPropertyAttribute = (value: string) =>
  ['property', value] as const satisfies NgxMetaElementNameAttribute
