import { MetadataProvider } from '../metadata-provider'
import { makeGlobalMetadata } from '../make-global-metadata'

export function makeMetadataProvider<T, Id extends string>(
  opts: {
    id?: Id
    spyName?: string
  } = {},
) {
  const id = opts.id ?? 'dummy'
  const metadata: MetadataProvider<T> = {
    metadata: makeGlobalMetadata(id),
    set: jasmine.createSpy(opts.spyName ?? id),
  }
  return metadata
}
