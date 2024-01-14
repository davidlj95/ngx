import { Metadata } from './metadata'

export const makeMetadata = <Global extends string = string>(
  jsonPath: ReadonlyArray<string>,
  global?: Global,
): Metadata => ({
  id: jsonPath.join('.'),
  jsonPath,
  global,
})
