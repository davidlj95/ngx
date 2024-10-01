import { makeComposedKeyValMetaDefinition } from '../../../core'

export const makeOpenGraphMetaDefinition = (...names: ReadonlyArray<string>) =>
  makeComposedKeyValMetaDefinition(['og', ...names], {
    keyAttr: 'property',
  })
