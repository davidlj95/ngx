import { TestBed } from '@angular/core/testing'

import { RouteMetadataValues } from './route-metadata-values'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MockProviders } from 'ng-mocks'
import { Router } from '@angular/router'

describe('RouteMetadataValues', () => {
  enableAutoSpy()
  let sut: RouteMetadataValues
  let router: jasmine.SpyObj<Router>
  const dummyValues = { foo: 'bar' }
  const url = '/set-url'

  beforeEach(() => {
    sut = makeSut()
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>
  })

  describe('when url is unset', () => {
    it('should return empty object', () => {
      expect(sut.get()).toEqual({})
    })
  })

  describe('when url is set', () => {
    let urlSpy: jasmine.Spy

    beforeEach(() => {
      urlSpy = spyOnProperty(router, 'url', 'get').and.returnValue(url)
      sut.set(dummyValues)

      expect(urlSpy).toHaveBeenCalledOnceWith()
      urlSpy.calls.reset()
    })

    describe('when current url matches url', () => {
      it('should return stored values', () => {
        expect(sut.get()).toEqual(dummyValues)
      })
    })

    describe('when current url does not match url', () => {
      const currentUrl = '/another-url'

      beforeEach(() => {
        urlSpy.and.returnValue(currentUrl)
      })

      it('should return empty object', () => {
        expect(sut.get()).toEqual({})
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [RouteMetadataValues, MockProviders(Router)],
  })
  return TestBed.inject(RouteMetadataValues)
}
