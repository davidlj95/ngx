import {
  _makeInjectionToken,
  INJECTION_TOKEN_FACTORIES,
  INJECTION_TOKENS,
} from './make-injection-token'
import { TestBed } from '@angular/core/testing'
import { InjectionToken } from '@angular/core'

describe('make injection token', () => {
  const sut = _makeInjectionToken
  const description = 'dummy'
  const factory = () => description

  afterEach(() => {
    INJECTION_TOKENS.clear()
    INJECTION_TOKEN_FACTORIES.clear()
  })

  it('should return an injection token using the provided factory', () => {
    const factoryOutput = factory()
    const injectionToken = sut(description, factory)

    expect(TestBed.inject(injectionToken)).toEqual(factoryOutput)
  })

  it('should return an injection token with given description prefixed by library name', () => {
    const injectionToken = sut(description, factory)

    expect(injectionToken.toString()).toContain(`ngx-meta ${description}`)
  })

  describe('when making an already existing token', () => {
    let injectionToken: InjectionToken<ReturnType<typeof factory>>

    beforeEach(() => {
      spyOn(console, 'warn')
      injectionToken = sut(description, factory)
    })

    const shouldNotLogAnyMessage = () =>
      it('should not log any message', () => {
        expect(console.warn).not.toHaveBeenCalled()
      })

    describe('when providing another description', () => {
      let secondInjectionToken: InjectionToken<ReturnType<typeof factory>>

      beforeEach(() => {
        secondInjectionToken = sut('another-description', factory)
      })

      it('should return another injection token', () => {
        expect(injectionToken).not.toBe(secondInjectionToken)
      })

      shouldNotLogAnyMessage()
    })

    describe('when providing same description and factory', () => {
      let secondInjectionToken: InjectionToken<ReturnType<typeof factory>>

      beforeEach(() => {
        secondInjectionToken = sut(description, factory)
      })

      it('should return the same injection token', () => {
        expect(injectionToken).toBe(secondInjectionToken)
      })

      shouldNotLogAnyMessage()
    })

    describe('when providing same description but different factory', () => {
      const anotherFactory = () => 'another'
      let secondInjectionToken: InjectionToken<
        ReturnType<typeof anotherFactory>
      >

      beforeEach(() => {
        secondInjectionToken = sut(description, anotherFactory)
      })

      it('should return the same injection token if providing same description but different factory', () => {
        expect(secondInjectionToken).toBe(injectionToken)
      })

      it('should warn about it', () => {
        expect(console.warn).toHaveBeenCalledWith(
          jasmine.stringContaining('same description but different factory'),
        )
      })
    })
  })
})
