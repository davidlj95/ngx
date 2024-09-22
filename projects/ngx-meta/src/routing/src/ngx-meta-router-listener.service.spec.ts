import { TestBed } from '@angular/core/testing'

import { NgxMetaRouterListenerService } from './ngx-meta-router-listener.service'
import { MockProvider, MockProviders, MockService } from 'ng-mocks'
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  EventType,
  Router,
  RouterEvent,
} from '@angular/router'
import { EventEmitter, Provider } from '@angular/core'
import {
  NGX_META_ROUTE_STRATEGY,
  NgxMetaRouteStrategy,
} from './ngx-meta-route-strategy'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'
import { Subscription } from 'rxjs'
import {
  _NgxMetaRouteValuesService,
  NgxMetaService,
} from '@davidlj95/ngx-meta/core'

describe('Router listener service', () => {
  enableAutoSpy()

  describe('when not listening yet', () => {
    // Though as probably injected in root module, may never be destroyed
    it('should subscribe to router events and unsubscribe when destroyed', () => {
      const events$ = new EventEmitter()
      const sut = makeSut({ events$ })

      sut.listen()

      expect(events$.observed).toBeTrue()

      TestBed.resetTestingModule()

      expect(events$.observed).toBeFalse()
    })
  })

  describe('when already listening', () => {
    let sut: NgxMetaRouterListenerService

    beforeEach(() => {
      sut = makeSut()
      sut.listen()
    })

    describe('when listening again', () => {
      let existingSubscription: Subscription

      beforeEach(() => {
        existingSubscription = sut['sub']!
        expect(existingSubscription).toBeDefined()
        spyOn(console, 'warn').and.stub()
        sut.listen()
      })

      it('should not subscribe again', () => {
        expect(sut['sub']).toBe(existingSubscription)
      })

      it('should warn about it', () => {
        expect(console.warn).toHaveBeenCalledOnceWith(
          jasmine.stringContaining('twice'),
        )
      })
    })
  })

  describe('when a non-end navigation event is triggered', () => {
    it('should not call any metadata strategy method', () => {
      const events$ = new EventEmitter()
      const strategy = jasmine.createSpy()
      const sut = makeSut({ events$, strategy })
      const ngxMetaService = TestBed.inject(
        NgxMetaService,
      ) as unknown as jasmine.SpyObj<NgxMetaService>
      sut.listen()

      events$.emit(makeNavigationEvent(EventType.ActivationEnd))

      expect(strategy).not.toHaveBeenCalled()
      expect(ngxMetaService.set).not.toHaveBeenCalled()
    })
  })

  describe('when a navigation end event is triggered', () => {
    describe('when no strategies found', () => {
      it('should log it to console', () => {
        const consoleWarn = spyOn(console, 'warn')
        const events$ = new EventEmitter()
        const sut = makeSut({ events$ })

        sut.listen()

        events$.emit(makeNavigationEvent(EventType.NavigationEnd))

        expect(consoleWarn).toHaveBeenCalledOnceWith(
          jasmine.stringContaining('strategy'),
        )
      })
    })

    describe('when a strategy is provided', () => {
      it('should call strategy resolve, set that metadata and store it using service', () => {
        const metadata = { key: 'value' }
        const strategy = jasmine.createSpy().and.returnValue(metadata)
        const events$ = new EventEmitter()
        const activatedRoute = MockService(ActivatedRoute)
        const sut = makeSut({
          events$,
          strategy,
          activatedRoute,
        })
        const ngxMetaService = TestBed.inject(
          NgxMetaService,
        ) as unknown as jasmine.SpyObj<NgxMetaService>
        const routeMetadataValues = TestBed.inject(
          _NgxMetaRouteValuesService,
        ) as unknown as jasmine.SpyObj<_NgxMetaRouteValuesService>

        sut.listen()

        events$.emit(makeNavigationEvent(EventType.NavigationEnd))

        expect(strategy).toHaveBeenCalledOnceWith(activatedRoute.snapshot)
        expect(ngxMetaService.set).toHaveBeenCalledOnceWith(metadata)
        expect(routeMetadataValues.set).toHaveBeenCalledOnceWith(metadata)
      })
    })
  })
})

function makeSut(
  opts: {
    events$?: EventEmitter<NavigationEvent>
    strategy?: NgxMetaRouteStrategy
    activatedRoute?: ActivatedRoute
  } = {},
): NgxMetaRouterListenerService {
  const events$ = opts.events$ ?? new EventEmitter()
  const activatedRoute =
    opts.activatedRoute ??
    ({
      snapshot: 'dummySnapshot' as unknown as ActivatedRouteSnapshot,
    } as Partial<ActivatedRoute>)

  const providers: Provider[] = [
    NgxMetaRouterListenerService,
    MockProvider(Router, { events: events$ } as Partial<Router>, 'useValue'),
    MockProvider(ActivatedRoute, activatedRoute, 'useValue'),
    MockProviders(NgxMetaService, _NgxMetaRouteValuesService),
  ]

  if (opts.strategy) {
    providers.push(
      MockProvider(NGX_META_ROUTE_STRATEGY, opts.strategy, 'useValue'),
    )
  }

  TestBed.configureTestingModule({
    providers,
  })

  return TestBed.inject(NgxMetaRouterListenerService)
}

function makeNavigationEvent(type: EventType): NavigationEvent {
  return { type } as NavigationEvent
}

interface NavigationEvent extends RouterEvent {
  type: EventType
}
