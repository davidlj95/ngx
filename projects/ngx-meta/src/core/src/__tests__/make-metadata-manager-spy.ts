import { NgxMetaMetadataManager } from '../ngx-meta-metadata-manager'

export function makeMetadataManagerSpy(
  opts: {
    id?: string
  } = {},
): NgxMetaMetadataManager {
  return {
    id: opts.id ?? 'dummy',
    resolverOptions: { jsonPath: ['dummy'] },
    set: jasmine.createSpy(opts.id ?? 'dummy'),
  }
}
