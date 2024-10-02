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
    it('should not call service', () => {
      const events$ = new EventEmitter()
      const sut = makeSut({ events$ })
      const ngxMetaService = TestBed.inject(
        NgxMetaService,
      ) as unknown as jasmine.SpyObj<NgxMetaService>
      sut.listen()

      events$.emit(makeNavigationEvent(EventType.ActivationEnd))

      expect(ngxMetaService.set).not.toHaveBeenCalled()
    })
  })

  describe('when a navigation end event is triggered', () => {
    it('should call service to set metadata', () => {
      const events$ = new EventEmitter()
      const sut = makeSut({
        events$,
      })
      const ngxMetaService = TestBed.inject(
        NgxMetaService,
      ) as unknown as jasmine.SpyObj<NgxMetaService>

      sut.listen()

      events$.emit(makeNavigationEvent(EventType.NavigationEnd))

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
      MockProvider(
        NgxMetaService,
        jasmine.createSpyObj<NgxMetaService>(['set']),
      ),
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
