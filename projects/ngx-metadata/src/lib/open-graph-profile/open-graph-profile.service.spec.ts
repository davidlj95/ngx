import { TestBed } from '@angular/core/testing'

import { MockProvider } from 'ng-mocks'
import { DefaultsService } from '../common/defaults.service'
import { OpenGraphProfile } from './open-graph-profile'
import { OPEN_GRAPH_PROFILE_DEFAULTS_TOKEN } from './open-graph-profile-defaults-token'
import { OpenGraphProfileApplierService } from './open-graph-profile-applier.service'
import { Provider } from '@angular/core'
import { enableAutoSpy } from '../__tests__/enable-auto-spy'
import { OpenGraphProfileService } from './open-graph-profile.service'

describe('OpenGraphProfileService', () => {
  enableAutoSpy()

  describe('apply', () => {
    const metadata: OpenGraphProfile = { firstName: 'Foo' }

    describe('when defaults are available', () => {
      const defaults: OpenGraphProfile = { username: 'foobar' }
      let sut: OpenGraphProfileService

      beforeEach(() => {
        sut = makeSut({ defaults })
      })

      it('should merge provided metadata with defaults', () => {
        sut.apply(metadata)

        const defaultsService = TestBed.inject(DefaultsService)
        expect(defaultsService.resolve).toHaveBeenCalledOnceWith(
          metadata,
          defaults,
        )
      })

      it('should apply metadata with defaults included', () => {
        const defaultsService = TestBed.inject(
          DefaultsService,
        ) as jasmine.SpyObj<DefaultsService>
        const resolvedDefaults = { ...metadata, ...defaults }
        defaultsService.resolve.and.returnValue(resolvedDefaults)

        sut.apply(metadata)

        const applierService = TestBed.inject(OpenGraphProfileApplierService)
        expect(applierService.apply).toHaveBeenCalledOnceWith(resolvedDefaults)
      })
    })

    describe('when no defaults are available', () => {
      let sut: OpenGraphProfileService

      beforeEach(() => {
        sut = makeSut()
      })

      it('should apply metadata with given argument', () => {
        sut.apply(metadata)

        const applierService = TestBed.inject(OpenGraphProfileApplierService)
        expect(applierService.apply).toHaveBeenCalledOnceWith(metadata)
      })
    })
  })
})

function makeSut(opts: { defaults?: OpenGraphProfile } = {}) {
  const providers: Provider[] = [
    OpenGraphProfileService,
    MockProvider(DefaultsService),
    MockProvider(OpenGraphProfileApplierService),
  ]

  if (opts.defaults) {
    providers.push(
      MockProvider(
        OPEN_GRAPH_PROFILE_DEFAULTS_TOKEN,
        opts.defaults,
        'useValue',
      ),
    )
  }

  TestBed.configureTestingModule({ providers })

  return TestBed.inject(OpenGraphProfileService)
}
