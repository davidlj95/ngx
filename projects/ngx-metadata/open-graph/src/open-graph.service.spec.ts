import { TestBed } from '@angular/core/testing'

import { OpenGraphService } from './open-graph.service'
import { MockProvider } from 'ng-mocks'
import { _DefaultsService } from 'ngx-metadata/common'
import { OpenGraph } from './open-graph'
import { OPEN_GRAPH_DEFAULTS_TOKEN } from './open-graph-defaults-token'
import { OpenGraphApplierService } from './open-graph-applier.service'
import { Provider } from '@angular/core'
import { enableAutoSpy } from 'ngx-metadata/__tests__/enable-auto-spy'

describe('OpenGraphService', () => {
  enableAutoSpy()

  describe('apply', () => {
    const metadata: OpenGraph = { description: 'Dummy description' }

    describe('when defaults are available', () => {
      const defaults: OpenGraph = { title: 'Dummy title' }
      let sut: OpenGraphService

      beforeEach(() => {
        sut = makeSut({ defaults })
      })

      it('should merge provided metadata with defaults', () => {
        sut.apply(metadata)

        const defaultsService = TestBed.inject(_DefaultsService)
        expect(defaultsService.resolve).toHaveBeenCalledOnceWith(
          metadata,
          defaults,
        )
      })

      it('should apply metadata with defaults included', () => {
        const defaultsService = TestBed.inject(
          _DefaultsService,
        ) as jasmine.SpyObj<_DefaultsService>
        const resolvedDefaults = { ...metadata, ...defaults }
        defaultsService.resolve.and.returnValue(resolvedDefaults)

        sut.apply(metadata)

        const applierService = TestBed.inject(OpenGraphApplierService)
        expect(applierService.apply).toHaveBeenCalledOnceWith(resolvedDefaults)
      })
    })

    describe('when no defaults are available', () => {
      let sut: OpenGraphService

      beforeEach(() => {
        sut = makeSut()
      })

      it('should apply metadata with given argument', () => {
        sut.apply(metadata)

        const applierService = TestBed.inject(OpenGraphApplierService)
        expect(applierService.apply).toHaveBeenCalledOnceWith(metadata)
      })
    })
  })
})

function makeSut(opts: { defaults?: OpenGraph } = {}) {
  const providers: Provider[] = [
    OpenGraphService,
    MockProvider(_DefaultsService),
    MockProvider(OpenGraphApplierService),
  ]

  if (opts.defaults) {
    providers.push(
      MockProvider(OPEN_GRAPH_DEFAULTS_TOKEN, opts.defaults, 'useValue'),
    )
  }

  TestBed.configureTestingModule({ providers })

  return TestBed.inject(OpenGraphService)
}
