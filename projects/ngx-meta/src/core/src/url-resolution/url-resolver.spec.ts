import { TestBed } from '@angular/core/testing'
import { _URL_RESOLVER } from './url-resolver'
import { noOpUrlResolver } from './no-op-url-resolver'
import { Provider } from '@angular/core'
import { provideDefaultUrlResolver } from './default-url-resolver'

describe('URL resolver', () => {
  it('should provide no op URL resolver by default', () => {
    const sut = makeSut()

    expect(sut).toEqual(noOpUrlResolver)
  })

  it('should override no op URL resolver when another one is specified', () => {
    const sut = makeSut({
      providers: [provideDefaultUrlResolver('https://example.com')],
    })

    expect(sut).not.toEqual(noOpUrlResolver)
  })
})

const makeSut = (
  opts: {
    providers?: Provider[]
  } = {},
) => {
  TestBed.configureTestingModule({
    providers: opts.providers ?? [],
  })
  return TestBed.inject(_URL_RESOLVER)
}
