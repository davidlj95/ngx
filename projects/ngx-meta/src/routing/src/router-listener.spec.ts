import { TestBed } from '@angular/core/testing'

import { MockProvider, MockProviders, MockService } from 'ng-mocks'
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  EventType,
  Router,
  RouterEvent,
} from '@angular/router'
import { EventEmitter } from '@angular/core'
import {
  ROUTE_METADATA_STRATEGY,
  RouteMetadataStrategy,
} from './route-metadata-strategy'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'
import { _RouteValuesService, NgxMetaService } from '@davidlj95/ngx-meta/core'
import { ROUTER_LISTENER, RouterListener } from './router-listener'
import { Observable } from 'rxjs'

describe('Router listener', () => {
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
    let events$: Observable<NavigationEvent>
    let subscribersCount: number
    let sut: RouterListener

    beforeEach(() => {
      subscribersCount = 0
      events$ = new Observable(() => void subscribersCount++)
      sut = makeSut({ events$ })

      sut.listen()
    })

    it('should subscribe just once', () => {
      expect(subscribersCount).toBe(1)
    })

    describe('when listening again', () => {
      beforeEach(() => {
        spyOn(console, 'warn')
        sut.listen()
      })

      it('should not subscribe again', () => {
        expect(subscribersCount).toBe(1)
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
        _RouteValuesService,
      ) as unknown as jasmine.SpyObj<_RouteValuesService>

      sut.listen()

      events$.emit(makeNavigationEvent(EventType.NavigationEnd))

      expect(strategy).toHaveBeenCalledOnceWith(activatedRoute.snapshot)
      expect(ngxMetaService.set).toHaveBeenCalledOnceWith(metadata)
      expect(routeMetadataValues.set).toHaveBeenCalledOnceWith(metadata)
    })
  })
})

function makeSut(
  opts: {
    events$?: Observable<NavigationEvent>
    strategy?: RouteMetadataStrategy
    activatedRoute?: ActivatedRoute
  } = {},
): RouterListener {
  const events$ = opts.events$ ?? new EventEmitter()
  const activatedRoute =
    opts.activatedRoute ??
    ({
      snapshot: 'dummySnapshot' as unknown as ActivatedRouteSnapshot,
    } as Partial<ActivatedRoute>)

  TestBed.configureTestingModule({
    providers: [
      MockProvider(Router, { events: events$ } as Partial<Router>, 'useValue'),
      MockProvider(ActivatedRoute, activatedRoute, 'useValue'),
      MockProviders(NgxMetaService, _RouteValuesService),
      opts.strategy
        ? MockProvider(ROUTE_METADATA_STRATEGY, opts.strategy, 'useValue')
        : [],
    ],
  })

  return TestBed.inject(ROUTER_LISTENER)
}

function makeNavigationEvent(type: EventType): NavigationEvent {
  return { type } as NavigationEvent
}

interface NavigationEvent extends RouterEvent {
  type: EventType
}
