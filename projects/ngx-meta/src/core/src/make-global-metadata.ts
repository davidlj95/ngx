import { Metadata } from './metadata'
import { makeMetadata } from './make-metadata'

export const makeGlobalMetadata = <Global extends string = string>(
  global: Global,
): Metadata => makeMetadata([global])
