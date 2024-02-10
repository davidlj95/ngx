import { NgxMetaMetaDefinition } from './ngx-meta-meta.service'

/**
 * Creates a {@link NgxMetaMetaDefinition} for its use with {@link NgxMetaMetaService}
 * by understanding `<meta>` elements as key / value pair elements.
 * Read the API reference docs for more info.
 *
 * @remarks
 * One can think about some `<meta>` elements as key / value pairs.
 * For instance `<meta name='description' content='Lorem ipsum'>` would
 * actually be a key / pair meta where
 *  - `description` is the key
 *  - `Lorem ipsum` is the value
 *  - `name` is the key's HTML attribute
 *  - `content`is the value's HTML attribute
 *
 * Value is set by {@link NgxMetaMetaService.set} by providing this model and an
 * actual value
 *
 * @param opts - Specifies HTML attribute defining key, HTML attribute defining
 *               value and the key name.
 *               `keyAttr` defaults to `name`
 *               `valAttr` defaults to `content`
 */
export const makeKeyValMetaDefinition = (opts: {
  keyAttr?: string
  keyName: string
  valAttr?: string
}): NgxMetaMetaDefinition => {
  const keyAttr = opts.keyAttr ?? _KEY_ATTRIBUTE_NAME
  const valAttr = opts.valAttr ?? _VAL_ATTRIBUTE_CONTENT
  return {
    withContent: (value) => ({ [keyAttr]: opts.keyName, [valAttr]: value }),
    attrSelector: `${keyAttr}='${opts.keyName}'`,
  }
}
/**
 * @internal
 */
export const _KEY_ATTRIBUTE_NAME = 'name'
/**
 * @internal
 */
export const _KEY_ATTRIBUTE_PROPERTY = 'property'
/**
 * @internal
 */
export const _VAL_ATTRIBUTE_CONTENT = 'content'
