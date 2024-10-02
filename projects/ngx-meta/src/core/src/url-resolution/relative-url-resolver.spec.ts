import { TestBed } from '@angular/core/testing'
import { RELATIVE_URL_RESOLVER } from './relative-url-resolver'
import { noOpRelativeUrlResolver } from './no-op-relative-url-resolver'
import { Provider } from '@angular/core'
import { provideDefaultRelativeUrlResolver } from './default-relative-url-resolver'

describe('Relative URL resolver', () => {
  it('should provide no op relative URL resolver by default', () => {
    const sut = makeSut()

    expect(sut).toEqual(noOpRelativeUrlResolver)
  })

  it('should override no op relative URL resolver when another is specified', () => {
    const sut = makeSut({
      providers: [provideDefaultRelativeUrlResolver('https://example.com')],
    })

    expect(sut).not.toEqual(noOpRelativeUrlResolver)
  })
})

const makeSut = (opts: { providers?: Provider[] } = {}) => {
  TestBed.configureTestingModule({ providers: opts.providers ?? [] })
  return TestBed.inject(RELATIVE_URL_RESOLVER)
}
