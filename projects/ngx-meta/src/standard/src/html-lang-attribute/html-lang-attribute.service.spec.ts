import { TestBed } from '@angular/core/testing'

import { HtmlLangAttributeService } from './html-lang-attribute.service'
import { DOCUMENT } from '@angular/common'
import { HtmlLangAttributeHarness } from './__tests__/html-lang-attribute-harness'

describe('HtmlLangAttributeService', () => {
  let sut: HtmlLangAttributeService
  let htmlLangAttributeHarness: HtmlLangAttributeHarness

  beforeEach(() => {
    sut = makeSut()
    htmlLangAttributeHarness = new HtmlLangAttributeHarness(
      TestBed.inject(DOCUMENT),
    )
  })

  afterEach(() => {
    htmlLangAttributeHarness.remove()
  })

  it('should be created', () => {
    expect(sut).toBeTruthy()
  })

  describe('apply', () => {
    describe('when locale is not provided', () => {
      const locale = undefined

      it('should remove HTML element lang attribute', () => {
        htmlLangAttributeHarness.set('es')
        expect(htmlLangAttributeHarness.get()).toBeTruthy()

        sut.set(locale)

        expect(htmlLangAttributeHarness.get()).toBeNull()
      })
    })

    describe('when locale is provided', () => {
      const locale = 'es-ES'

      it('should update HTML element lang attribute', () => {
        sut.set(locale)

        const htmlTagLangAttribute = htmlLangAttributeHarness.get()
        expect(htmlTagLangAttribute).not.toBeNull()
        expect(htmlTagLangAttribute?.value).toEqual(locale)
      })
    })

    describe('when locale is null', () => {
      const locale = null

      it('should remove HTML element lang attribute', () => {
        htmlLangAttributeHarness.set('es')
        expect(htmlLangAttributeHarness.get()).toBeTruthy()

        sut.set(locale)

        expect(htmlLangAttributeHarness.get()).toBeNull()
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({ providers: [HtmlLangAttributeService] })
  return TestBed.inject(HtmlLangAttributeService)
}
