import { TestBed } from '@angular/core/testing'

import { MockProvider } from 'ng-mocks'
import { EventType, Router, RouterEvent } from '@angular/router'
import { EventEmitter } from '@angular/core'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { NgxMetaService } from '@davidlj95/ngx-meta/core'
import { ROUTER_LISTENER, RouterListener } from './router-listener'
import { Observable } from 'rxjs'

describe('Router listener', () => {
  enableAutoSpy()

  describe('when listening', () => {
    let subscribersCount: number
    let events$: Observable<NavigationEvent>
    let sut: RouterListener

    beforeEach(() => {
      subscribersCount = 0
      events$ = new Observable(() => {
        subscribersCount++
        return () => {
          subscribersCount--
        }
      })
      spyOn(console, 'warn')
      sut = makeSut({ events$ })
      sut.listen()
    })

    it('should subscribe once to router events', () => {
      expect(subscribersCount).toBe(1)
    })

    it('should not warn about anything', () => {
      expect(console.warn).not.toHaveBeenCalled()
    })

    // Though as probably injected in root module, won't ever be destroyed
    describe('after destroyed', () => {
      beforeEach(() => {
        TestBed.resetTestingModule()
      })

      it('should unsubscribe from router events', () => {
        expect(subscribersCount).toBe(0)
      })
    })

    describe('when trying to listen twice', () => {
      beforeEach(() => {
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
    let ngxMetaService: jasmine.SpyObj<NgxMetaService>

    beforeEach(() => {
      const events$ = new EventEmitter<NavigationEvent>()
      const sut = makeSut({ events$ })
      ngxMetaService = TestBed.inject(
        NgxMetaService,
      ) as unknown as jasmine.SpyObj<NgxMetaService>
      sut.listen()

      events$.emit(makeNavigationEvent(EventType.ActivationEnd))
    })

    it('should not call service', () => {
      expect(ngxMetaService.set).not.toHaveBeenCalled()
    })
  })

  describe('when a navigation end event is triggered', () => {
    let ngxMetaService: jasmine.SpyObj<NgxMetaService>

    beforeEach(() => {
      const events$ = new EventEmitter<NavigationEvent>()
      const sut = makeSut({
        events$,
      })
      ngxMetaService = TestBed.inject(
        NgxMetaService,
      ) as unknown as jasmine.SpyObj<NgxMetaService>

      sut.listen()

      events$.emit(makeNavigationEvent(EventType.NavigationEnd))
    })

    it('should call service to set metadata', () => {
      expect(ngxMetaService.set).toHaveBeenCalledOnceWith()
    })
  })
})

function makeSut(
  opts: {
    events$?: Observable<NavigationEvent>
  } = {},
): RouterListener {
  const events$ = (opts.events$ ??
    new EventEmitter<NavigationEvent>()) as Router['events']

  TestBed.configureTestingModule({
    providers: [
      MockProvider(Router, { events: events$ }),
      MockProvider(NgxMetaService),
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
