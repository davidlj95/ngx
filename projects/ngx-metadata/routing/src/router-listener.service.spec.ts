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
import { enableAutoSpy } from 'ngx-metadata/__tests__/enable-auto-spy'

describe('RouterListenerService', () => {
  enableAutoSpy()

  describe('listen', () => {
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
      it('should throw error and not subscribe again', () => {
        const sut = makeSut()
        sut.listen()

        expect(() => sut.listen()).toThrowError()
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
        expect(strategy.apply).not.toHaveBeenCalled()
      })
    })

    describe('when a navigation end event is triggered', () => {
      describe('when no strategies found', () => {
        it('should log it to console', () => {
          const consoleWarn = spyOn(console, 'warn')
          const events$ = new EventEmitter()
          const sut = makeSut({
            events$,
            strategies: [],
          })

          sut.listen()

          events$.emit(makeNavigationEvent(EventType.NavigationEnd))

          expect(consoleWarn).toHaveBeenCalledOnceWith(
            jasmine.stringContaining('strategies'),
          )
        })
      })

      describe('when a single strategy is found', () => {
        it('should call strategy resolve and apply', () => {
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
          expect(strategy.apply).toHaveBeenCalledOnceWith(metadata)
        })
      })

      it('should call all strategies resolve and apply in order', () => {
        const events$ = new EventEmitter()
        const strategyOneData = { key: 'one' }
        const strategyOne = makeStrategy('one', strategyOneData)
        const strategyTwoData = { key: 'two' }
        const strategyTwo = makeStrategy('two', strategyTwoData)
        const activatedRoute = MockService(ActivatedRoute)
        const sut = makeSut({
          events$,
          strategies: [strategyOne, strategyTwo],
          activatedRoute,
        })
        sut.listen()

        events$.emit(makeNavigationEvent(EventType.NavigationEnd))

        expect(strategyOne.resolve).toHaveBeenCalledOnceWith(
          activatedRoute.snapshot,
        )
        expect(strategyOne.apply).toHaveBeenCalledOnceWith(strategyOneData)
        expect(strategyTwo.resolve).toHaveBeenCalledOnceWith(
          activatedRoute.snapshot,
        )
        expect(strategyTwo.apply).toHaveBeenCalledOnceWith(strategyTwoData)
        expect(strategyOne.apply).toHaveBeenCalledBefore(strategyTwo.apply)
      })
    })
  })
})

function makeSut(
  opts: {
    events$?: EventEmitter<NavigationEvent>
    strategies?: ReadonlyArray<MetadataRouteStrategy<unknown>>
    strategy?: MetadataRouteStrategy<unknown>
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

  if (opts.strategies) {
    // multiple providers (or none if empty array)
    for (const strategy of opts.strategies) {
      providers.push(
        MockProvider(MetadataRouteStrategy, strategy, 'useValue', true),
      )
    }
  }
  if (opts.strategy) {
    // one provider only
    providers.push(
      MockProvider(MetadataRouteStrategy, opts.strategy, 'useValue'),
    )
  }
  if (opts.strategies === undefined && opts.strategy === undefined) {
    // default: one of many providers
    providers.push(
      MockProvider(
        MetadataRouteStrategy,
        MockService(MetadataRouteStrategy),
        'useValue',
        true,
      ),
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
): jasmine.SpyObj<MetadataRouteStrategy<unknown>> {
  return MockService(MetadataRouteStrategy, {
    resolve: jasmine.createSpy(`${name} resolve`).and.returnValue(resolvedData),
    apply: jasmine.createSpy(`${name} apply`),
  }) as jasmine.SpyObj<MetadataRouteStrategy<unknown>>
}

function makeNavigationEvent(type: EventType): NavigationEvent {
  return { type } as NavigationEvent
}

interface NavigationEvent extends RouterEvent {
  type: EventType
}
