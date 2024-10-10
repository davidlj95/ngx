import { NgxMetaElementNameAttribute } from './ngx-meta-elements.service'

/**
 * Utility function to specify a `<meta name="{name}">` element.
 *
 * See {@link NgxMetaElementsService.set} for examples.
 *
 * @param value - Value for the `name` attribute of the `<meta>` element
 *
 * @alpha
 */
export const withNameAttribute = (value: string) =>
  ['name', value] as const satisfies NgxMetaElementNameAttribute
