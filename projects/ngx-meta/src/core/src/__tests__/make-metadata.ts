import { Metadata } from '../metadata'
import { makeGlobalMetadataDefinition } from './make-global-metadata-definition'

export function makeMetadata<T, Id extends string>(
  opts: {
    id?: Id
    spyName?: string
  } = {},
) {
  const id = opts.id ?? 'dummy'
  const metadata: Metadata<T> = {
    definition: makeGlobalMetadataDefinition(id),
    set: jasmine.createSpy(opts.spyName ?? id),
  }
  return metadata
}
