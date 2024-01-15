import { TestBed } from '@angular/core/testing'

import { RouterListenerService } from './router-listener.service'
import { MockProvider, MockService } from 'ng-mocks'
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  EventType,
  Router,
  RouterEvent,
} from '@angular/router'
import { EventEmitter, Provider } from '@angular/core'
import { MetadataRouteStrategy } from './metadata-route-strategy'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'
import { Subscription } from 'rxjs'

describe('RouterListenerService', () => {
  enableAutoSpy()

  describe('when not listening yet', () => {
    // Though as probably injected in root module, may never be destroyed 🤷‍
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
    let sut: RouterListenerService

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
          jasmine.stringContaining('NgxMetaRouting'),
        )
      })
    })
  })

  describe('when a non-end navigation event is triggered', () => {
    it('should not call any metadata strategy method', () => {
      const events$ = new EventEmitter()
      const strategy = makeStrategy()
      const sut = makeSut({ events$, strategy })
      sut.listen()

      events$.emit(makeNavigationEvent(EventType.ActivationEnd))

      expect(strategy.resolve).not.toHaveBeenCalled()
      expect(strategy.set).not.toHaveBeenCalled()
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
      it('should call strategy resolve and set', () => {
        const metadata = { key: 'value' }
        const strategy = makeStrategy('single', metadata)
        const events$ = new EventEmitter()
        const activatedRoute = MockService(ActivatedRoute)
        const sut = makeSut({
          events$,
          strategy,
          activatedRoute,
        })

        sut.listen()

        events$.emit(makeNavigationEvent(EventType.NavigationEnd))

        expect(strategy.resolve).toHaveBeenCalledOnceWith(
          activatedRoute.snapshot,
        )
        expect(strategy.set).toHaveBeenCalledOnceWith(metadata)
      })
    })
  })
})

function makeSut(
  opts: {
    events$?: EventEmitter<NavigationEvent>
    strategy?: MetadataRouteStrategy
    activatedRoute?: ActivatedRoute
  } = {},
): RouterListenerService {
  const events$ = opts.events$ ?? new EventEmitter()
  const activatedRoute =
    opts.activatedRoute ??
    ({
      snapshot: 'dummySnapshot' as unknown as ActivatedRouteSnapshot,
    } as Partial<ActivatedRoute>)

  const providers: Provider[] = [
    RouterListenerService,
    MockProvider(Router, { events: events$ } as Partial<Router>, 'useValue'),
    MockProvider(ActivatedRoute, activatedRoute, 'useValue'),
  ]

  if (opts.strategy) {
    providers.push(
      MockProvider(MetadataRouteStrategy, opts.strategy, 'useValue'),
    )
  }

  TestBed.configureTestingModule({
    providers,
  })

  return TestBed.inject(RouterListenerService)
}

function makeStrategy(
  name: string = 'default',
  resolvedData: unknown = { dummy: 'metadata' },
): jasmine.SpyObj<MetadataRouteStrategy> {
  return MockService(MetadataRouteStrategy, {
    resolve: jasmine.createSpy(`${name} resolve`).and.returnValue(resolvedData),
    set: jasmine.createSpy(`${name} set`),
  }) as jasmine.SpyObj<MetadataRouteStrategy>
}

function makeNavigationEvent(type: EventType): NavigationEvent {
  return { type } as NavigationEvent
}

interface NavigationEvent extends RouterEvent {
  type: EventType
}
