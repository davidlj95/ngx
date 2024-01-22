import { NgxMetaMetaDefinition } from './ngx-meta-meta.service'

export const makeKeyValMetaDefinition = (opts: {
  keyAttr?: string
  keyName: string
  valAttr?: string
}): NgxMetaMetaDefinition => {
  const keyAttr = opts.keyAttr ?? KEY_ATTRIBUTE_NAME
  const valAttr = opts.valAttr ?? VAL_ATTRIBUTE_CONTENT
  return {
    withContent: (value) => ({ [keyAttr]: opts.keyName, [valAttr]: value }),
    selector: `${keyAttr}='${opts.keyName}'`,
  }
}
export const KEY_ATTRIBUTE_NAME = 'name'
export const KEY_ATTRIBUTE_PROPERTY = 'property'
export const VAL_ATTRIBUTE_CONTENT = 'content'
