import { MetadataProvider } from '../metadata-provider'

export function makeMetadataProviderSpy(
  opts: {
    id?: string
    spyName?: string
  } = {},
): MetadataProvider<unknown> {
  return {
    id: opts.id ?? 'dummy',
    resolverOptions: { jsonPath: ['dummy'] },
    set: jasmine.createSpy(opts.spyName ?? opts.id ?? 'dummy'),
  }
}
