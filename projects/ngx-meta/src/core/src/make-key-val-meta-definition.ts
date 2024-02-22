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
 * @param keyName - Name of the key in the key/value meta definition
 * @param options - Specifies HTML attribute defining key, HTML attribute defining
 *               value.
 *               `keyAttr` defaults to `name`
 *               `valAttr` defaults to `content`
 *
 * @public
 */
export const makeKeyValMetaDefinition = (
  keyName: string,
  options: {
    keyAttr?: string
    valAttr?: string
  } = {},
): NgxMetaMetaDefinition => {
  const keyAttr = options.keyAttr ?? _KEY_ATTRIBUTE_NAME
  const valAttr = options.valAttr ?? _VAL_ATTRIBUTE_CONTENT
  return {
    withContent: (value) => ({ [keyAttr]: keyName, [valAttr]: value }),
    attrSelector: `${keyAttr}='${keyName}'`,
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
