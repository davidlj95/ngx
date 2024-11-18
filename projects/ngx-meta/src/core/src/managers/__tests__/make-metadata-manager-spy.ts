import { NgxMetaMetadataManager } from '../ngx-meta-metadata-manager'

export function makeMetadataManagerSpy(
  opts: {
    id?: string
    global?: string
    jsonPath?: readonly string[]
  } = {},
): NgxMetaMetadataManager {
  return {
    id: opts.id ?? opts.jsonPath?.join('.') ?? opts.global ?? 'dummy',
    resolverOptions: {
      jsonPath: opts.jsonPath ?? ['dummy'],
      global: opts.global,
    },
    set: jasmine.createSpy(opts.id ?? 'dummy'),
  }
}
