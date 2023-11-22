import { TestBed } from '@angular/core/testing'

import { OpenGraphApplierService } from './open-graph-applier.service'
import { MockProvider } from 'ng-mocks'
import { OpenGraphAppliersService } from './open-graph-appliers.service'
import { OpenGraph } from './open-graph'
import { OpenGraphType } from './open-graph-type'
import { enableAutoSpy } from '../__tests__/enable-auto-spy'

describe('OpenGraphApplierService', () => {
  enableAutoSpy()

  describe('apply', () => {
    let sut: OpenGraphApplierService
    let appliersService: OpenGraphAppliersService
    const metadata: OpenGraph = {
      title: 'Foo',
      type: OpenGraphType.Website,
      image: {
        url: new URL('https://example.com/foo.png'),
        alt: 'Foo image alternative text',
      },
      url: new URL('https://example.com'),
      description: 'Lorem ipsum lorem',
      locale: 'es',
      siteName: 'Foo site',
    }

    beforeEach(() => {
      sut = makeSut()
      appliersService = TestBed.inject(OpenGraphAppliersService)
    })

    it('should run title applier', () => {
      sut.apply(metadata)

      expect(appliersService.title).toHaveBeenCalledOnceWith(metadata.title)
    })

    it('should run type applier', () => {
      sut.apply(metadata)

      expect(appliersService.type).toHaveBeenCalledOnceWith(metadata.type)
    })

    it('should run image applier', () => {
      sut.apply(metadata)

      expect(appliersService.image).toHaveBeenCalledOnceWith(metadata.image)
    })

    it('should run URL applier', () => {
      sut.apply(metadata)

      expect(appliersService.url).toHaveBeenCalledOnceWith(metadata.url)
    })

    it('should run description applier', () => {
      sut.apply(metadata)

      expect(appliersService.description).toHaveBeenCalledOnceWith(
        metadata.description,
      )
    })

    it('should run locale applier', () => {
      sut.apply(metadata)

      expect(appliersService.locale).toHaveBeenCalledOnceWith(metadata.locale)
    })

    it('should run site name applier', () => {
      sut.apply(metadata)

      expect(appliersService.siteName).toHaveBeenCalledOnceWith(
        metadata.siteName,
      )
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      OpenGraphApplierService,
      MockProvider(OpenGraphAppliersService),
    ],
  })
  return TestBed.inject(OpenGraphApplierService)
}
