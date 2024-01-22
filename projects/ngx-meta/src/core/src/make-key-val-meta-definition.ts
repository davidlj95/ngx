import { NgxMetaMetaDefinition } from './ngx-meta-meta.service'

export const makeKeyValMetaDefinition = (opts: {
  keyAttr?: string
  keyName: string
  valAttr?: string
}): NgxMetaMetaDefinition => {
  const keyAttr = opts.keyAttr ?? _KEY_ATTRIBUTE_NAME
  const valAttr = opts.valAttr ?? _VAL_ATTRIBUTE_CONTENT
  return {
    withContent: (value) => ({ [keyAttr]: opts.keyName, [valAttr]: value }),
    selector: `${keyAttr}='${opts.keyName}'`,
  }
}
export const _KEY_ATTRIBUTE_NAME = 'name'
export const _KEY_ATTRIBUTE_PROPERTY = 'property'
export const _VAL_ATTRIBUTE_CONTENT = 'content'
