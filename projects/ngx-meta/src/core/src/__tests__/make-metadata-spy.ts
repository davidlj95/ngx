import { NgxMetaMetadata } from '../ngx-meta-metadata'

export function makeMetadataSpy(
  opts: {
    id?: string
  } = {},
): NgxMetaMetadata {
  return {
    id: opts.id ?? 'dummy',
    resolverOptions: { jsonPath: ['dummy'] },
    set: jasmine.createSpy(opts.id ?? 'dummy'),
  }
}
