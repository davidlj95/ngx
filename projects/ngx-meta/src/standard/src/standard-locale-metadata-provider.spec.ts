import { TestBed } from '@angular/core/testing'

import { DOCUMENT } from '@angular/common'
import { HtmlLangAttributeHarness } from './__tests__/html-lang-attribute-harness'
import { MetadataSetter } from '@davidlj95/ngx-meta/core'
import { Standard } from './standard'
import { __STANDARD_LOCALE_METADATA_SETTER_FACTORY } from './standard-locale-metadata-provider'

describe('Standard locale metadata', () => {
  let sut: MetadataSetter<Standard['locale']>
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

  describe('when locale is not provided', () => {
    const locale = undefined

    it('should remove HTML element lang attribute', () => {
      htmlLangAttributeHarness.set('es')
      expect(htmlLangAttributeHarness.get()).toBeTruthy()

      sut(locale)

      expect(htmlLangAttributeHarness.get()).toBeNull()
    })
  })

  describe('when locale is provided', () => {
    const locale = 'es-ES'

    it('should update HTML element lang attribute', () => {
      sut(locale)

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

      sut(locale)

      expect(htmlLangAttributeHarness.get()).toBeNull()
    })
  })
})

function makeSut(): MetadataSetter<Standard['locale']> {
  TestBed.configureTestingModule({})
  return __STANDARD_LOCALE_METADATA_SETTER_FACTORY(TestBed.inject(DOCUMENT))
}
