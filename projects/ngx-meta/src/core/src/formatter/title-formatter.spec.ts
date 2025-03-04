import { Provider } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { _titleFormatter, TitleFormatter } from './title-formatter'
import { withNgxMetaTitleFormatter } from './with-ngx-meta-title-formatter'

describe('Title formatter', () => {
  const title = 'title'

  it('should perform no formatting by default', () => {
    const sut = makeSut()

    expect(sut(title)).toBe(title)
  })

  it('should use the formatter when provided', () => {
    const formattedTitle = 'formatted title'
    const titleFormatter = jasmine
      .createSpy<TitleFormatter>()
      .and.returnValue(formattedTitle)
    const sut = makeSut({
      providers: withNgxMetaTitleFormatter(titleFormatter)._providers,
    })

    expect(sut(title)).toBe(formattedTitle)
    expect(titleFormatter).toHaveBeenCalledWith(title)
  })
})
const makeSut = ({
  providers,
}: {
  providers?: Provider[]
} = {}) => {
  TestBed.configureTestingModule({ providers })
  return TestBed.inject(_titleFormatter())
}
