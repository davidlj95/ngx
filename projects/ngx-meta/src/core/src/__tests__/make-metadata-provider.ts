import { makeMetadata } from '../make-metadata'

export function makeMetadataProvider<Id extends string>(
  opts: {
    id?: Id
    spyName?: string
  } = {},
) {
  return {
    metadata: makeMetadata([opts.id ?? 'dummy']),
    set: jasmine.createSpy(opts.spyName ?? opts.id ?? 'dummy'),
  }
}
