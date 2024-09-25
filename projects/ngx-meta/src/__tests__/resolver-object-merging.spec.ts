import { TestBed } from '@angular/core/testing'
import { METADATA_RESOLVER } from '../core/src/metadata-resolver'
import { MetadataResolverOptions, MetadataValues } from '../core'
import { Provider } from '@angular/core'
import { MockProvider } from 'ng-mocks'
import { DEFAULTS } from '../core/src/defaults'

// Relates to https://github.com/davidlj95/ngx/issues/426
// TBH, this is needed cause both Metadata JSON resolver and Metadata resolver
// may merge objs
// We could extract merging into a common place and test that there
describe('Metadata value resolver object merging', () => {
  type Values = { obj: object; specific?: { obj: object } }
  const baseResolverOptions: MetadataResolverOptions = {
    jsonPath: [
      'specific' satisfies keyof Values,
      'obj' satisfies keyof Exclude<Values['specific'], undefined>,
    ],
    global: 'obj' satisfies keyof Values,
  }

  describe('when object merging resolver option is disabled (default)', () => {
    const resolverOptions = baseResolverOptions

    it('should not merge global and specific values', () => {
      const GLOBAL_DUMMY_OBJ = new URL('https://example.org/global-dummy')
      const SPECIFIC_DUMMY_OBJ = new URL('https://example.org/specific-dummy')
      const sut = makeSut()

      const values = {
        obj: GLOBAL_DUMMY_OBJ,
        specific: { obj: SPECIFIC_DUMMY_OBJ },
      } satisfies Values
      const resolved = sut(values, resolverOptions)

      expect(resolved).toEqual(SPECIFIC_DUMMY_OBJ)
    })

    it('should not merge default value and value from arg values', () => {
      const VALUES_DUMMY_OBJ = new URL('https://example.org/values-dummy')
      const DEFAULT_DUMMY_OBJ = new URL('https://example.org/default-dummy')

      const sut = makeSut({
        defaults: { obj: DEFAULT_DUMMY_OBJ } satisfies Values,
      })

      const values = { obj: VALUES_DUMMY_OBJ } satisfies Values
      const resolved = sut(values, resolverOptions)

      expect(resolved).toEqual(VALUES_DUMMY_OBJ)
    })
  })
  describe('when object merging resolver option is enabled', () => {
    const resolverOptions: MetadataResolverOptions = {
      ...baseResolverOptions,
      objectMerge: true,
    }

    it('should merge global and specific values', () => {
      const GLOBAL_OBJ = { shared: 'shared', global: 'global' }
      const SPECIFIC_OBJ = { shared: 'overridden-shared', specific: 'specific' }

      const sut = makeSut()

      const values = {
        obj: GLOBAL_OBJ,
        specific: { obj: SPECIFIC_OBJ },
      }
      const resolved = sut(values, resolverOptions)

      expect(resolved).toEqual({ ...GLOBAL_OBJ, ...SPECIFIC_OBJ })
    })

    it('should merge default value and value from arg values', () => {
      const DEFAULTS_OBJ = { shared: 'shared', default: 'default' }
      const VALUES_OBJ = { shared: 'overridden-shared', specific: 'specific' }

      const sut = makeSut({
        defaults: { obj: DEFAULTS_OBJ } satisfies Values,
      })

      const values = { obj: VALUES_OBJ } satisfies Values
      const resolved = sut(values, resolverOptions)

      expect(resolved).toEqual({ ...DEFAULTS_OBJ, ...VALUES_OBJ })
    })
  })
})

function makeSut(opts: { defaults?: MetadataValues } = {}) {
  const DEFAULTS_PROVIDER: Provider[] = opts.defaults
    ? [MockProvider(DEFAULTS, opts.defaults)]
    : []
  TestBed.configureTestingModule({
    providers: [...DEFAULTS_PROVIDER],
  })
  return TestBed.inject(METADATA_RESOLVER)
}
