import { Metadata } from '../metadata'

export function makeMetadata<T>(
  opts: {
    name?: string
    scope?: string
    globalName?: string
  } = {},
) {
  const metadata: Metadata<T> = {
    definition: {
      name: opts.name ?? 'dummy',
      scope: opts.scope ?? 'dummy',
      globalName: opts.globalName,
    },
    set: jasmine.createSpy(opts.name),
  }
  return metadata
}
