import { TestBed } from '@angular/core/testing'

import { NgxMetaMetaService } from './ngx-meta-meta.service'
import { MockProvider } from 'ng-mocks'
import { Meta } from '@angular/platform-browser'
import { enableAutoSpy } from '@/ngx-meta/test/enable-auto-spy'
import { makeKeyValMetaDefinition } from './make-key-val-meta-definition'
import { likeWhenNullOrUndefined } from '@/ngx-meta/test/like-when-null-or-undefined'

describe('Meta service', () => {
  enableAutoSpy()

  let sut: NgxMetaMetaService
  let meta: Meta

  beforeEach(() => {
    sut = makeSut()
    meta = TestBed.inject(Meta)
  })

  const metaDefinition = makeKeyValMetaDefinition('dummy', {
    keyAttr: 'propertyName',
    valAttr: 'propertyContent',
  })

  describe('when content is not provided', () => {
    likeWhenNullOrUndefined((testCase) => {
      it('should remove meta element', () => {
        sut.set(metaDefinition, testCase)

        expect(meta.removeTag).toHaveBeenCalledOnceWith(
          metaDefinition.attrSelector,
        )
      })
    })
  })

  describe('when content is provided', () => {
    const content = 'Lorem ipsum lorem'

    it('should update the meta tag', () => {
      sut.set(metaDefinition, content)

      expect(meta.updateTag).toHaveBeenCalledOnceWith(
        metaDefinition.withContent(content),
      )
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [NgxMetaMetaService, MockProvider(Meta)],
  })
  return TestBed.inject(NgxMetaMetaService)
}
