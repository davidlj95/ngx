import { Metadata } from '../metadata'
import { makeMetadataDefinition } from './make-metadata-definition'

export function makeMetadata<T>(
  opts: Parameters<typeof makeMetadataDefinition>[0] & {
    spyName?: string
  } = {},
) {
  const metadata: Metadata<T> = {
    definition: makeMetadataDefinition(opts),
    set: jasmine.createSpy(opts.spyName ?? opts.name),
  }
  return metadata
}
