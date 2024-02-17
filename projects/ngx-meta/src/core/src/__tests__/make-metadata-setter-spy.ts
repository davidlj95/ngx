import { NgxMetaMetadataSetter } from '../ngx-meta-metadata-setter'

export function makeMetadataSetterSpy(
  opts: {
    id?: string
  } = {},
): NgxMetaMetadataSetter {
  return {
    id: opts.id ?? 'dummy',
    resolverOptions: { jsonPath: ['dummy'] },
    set: jasmine.createSpy(opts.id ?? 'dummy'),
  }
}
