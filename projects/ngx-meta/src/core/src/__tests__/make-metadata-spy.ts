import { Metadata } from '../metadata'

export function makeMetadataSpy(
  opts: {
    id?: string
  } = {},
): Metadata {
  return {
    id: opts.id ?? 'dummy',
    resolverOptions: { jsonPath: ['dummy'] },
    set: jasmine.createSpy(opts.id ?? 'dummy'),
  }
}
