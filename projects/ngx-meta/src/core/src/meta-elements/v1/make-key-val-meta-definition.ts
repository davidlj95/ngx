// noinspection JSDeprecatedSymbols

import { MetaDefinition } from '@angular/platform-browser'
import { NgxMetaMetaDefinition } from './ngx-meta-meta-definition'

/**
 * Creates a {@link NgxMetaMetaDefinition} for its use with {@link NgxMetaMetaService}
 * by understanding `<meta>` elements as key / value pair elements.
 *
 * @remarks
 *
 * One can think about some `<meta>` elements as key / value pairs.
 *
 * For instance `<meta name='description' content='Lorem ipsum'>` would
 * actually be a key / value pair meta where
 *  - `description` is the key
 *  - `Lorem ipsum` is the value
 *  - `name` is the key's HTML attribute name
 *  - `content`is the value's HTML attribute name
 *
 * Value is set by {@link NgxMetaMetaService.set} by providing this model and an
 * actual value
 *
 * @deprecated Use {@link NgxMetaElementsService} APIs instead.
 *             See {@link https://ngx-meta.dev/guides/manage-your-custom-metadata/ | custom metadata guide} for more info
 *
 * @param keyName - Name of the key in the key/value meta definition
 * @param options - Specifies HTML attribute names and extras of the definition if any
 *
 * @public
 */
export const makeKeyValMetaDefinition: (
  keyName: string,
  options: MakeKeyValMetaDefinitionOptions,
) => NgxMetaMetaDefinition = (
  keyName: string,
  /* istanbul ignore next - quite simple */
  options: MakeKeyValMetaDefinitionOptions = {},
): NgxMetaMetaDefinition => {
  /* istanbul ignore next - quite simple */
  const keyAttr = options.keyAttr ?? 'name'
  /* istanbul ignore next - quite simple */
  const valAttr = options.valAttr ?? 'content'
  return {
    withContent: (value) => ({
      [keyAttr]: keyName,
      [valAttr]: value,
      ...options.extras,
    }),
    attrSelector: `${keyAttr}='${keyName}'`,
  }
}

/**
 * Options argument object for {@link makeKeyValMetaDefinition}
 *
 * @deprecated Use {@link NgxMetaElementsService} APIs instead.
 *             See {@link https://ngx-meta.dev/guides/manage-your-custom-metadata/ | custom metadata guide} for more info
 *
 * @public
 */
export interface MakeKeyValMetaDefinitionOptions {
  /**
   * Name of the `<meta>` attribute that will hold the key
   *
   * Default value is `name`
   */
  keyAttr?: string
  /**
   * Name of the `<meta>` attribute that will hold the value
   *
   * Default value is `content`
   */
  valAttr?: string
  /**
   * Extra contents for the meta definition
   *
   * Default value is `undefined`
   */
  extras?: MetaDefinition
}
