import { TestBed } from '@angular/core/testing'

import { DOCUMENT } from '@angular/common'
import { HtmlLangAttributeHarness } from './__tests__/html-lang-attribute-harness'
import { NgxMetaMetadataManager } from '@davidlj95/ngx-meta/core'
import { Standard } from '../types'
import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'
import { STANDARD_LOCALE_METADATA_PROVIDER } from './standard-locale-metadata-provider'
import { likeWhenNullOrUndefined } from '@/ngx-meta/test/like-when-null-or-undefined'

describe('Standard locale metadata', () => {
  let sut: NgxMetaMetadataManager<Standard['locale']>
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
    likeWhenNullOrUndefined((testCase) => {
      it('should remove HTML element lang attribute', () => {
        htmlLangAttributeHarness.set('es')
        expect(htmlLangAttributeHarness.get()).toBeTruthy()

        sut.set(testCase)

        expect(htmlLangAttributeHarness.get()).toBeNull()
      })
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
})

function makeSut(): NgxMetaMetadataManager<Standard['locale']> {
  TestBed.configureTestingModule({
    providers: [STANDARD_LOCALE_METADATA_PROVIDER],
  })
  return injectOneMetadataManager()
}
