import { TestBed } from '@angular/core/testing'

import { GeneralMetadataApplierService } from './general-metadata-applier.service'
import { MockProvider } from 'ng-mocks'
import { GeneralMetadataAppliersService } from './general-metadata-appliers.service'
import { GeneralMetadata } from './general-metadata'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'

describe('GeneralMetadataApplierService', () => {
  enableAutoSpy()

  describe('apply', () => {
    let sut: GeneralMetadataApplierService
    let appliersService: GeneralMetadataAppliersService
    const metadata: GeneralMetadata = {
      title: 'Foo',
      description: 'bar',
      author: 'Mr. Foo',
      keywords: ['foo', 'bar'],
      generator: true,
      applicationName: 'FooApp',
      canonicalUrl: new URL('https://example.com/foo'),
      locale: 'es',
    }

    beforeEach(() => {
      sut = makeSut()
      appliersService = TestBed.inject(GeneralMetadataAppliersService)
    })

    it('should run title applier', () => {
      sut.apply(metadata)

      expect(appliersService.title).toHaveBeenCalledOnceWith(metadata.title)
    })

    it('should run description applier', () => {
      sut.apply(metadata)

      expect(appliersService.description).toHaveBeenCalledOnceWith(
        metadata.description,
      )
    })

    it('should run author applier', () => {
      sut.apply(metadata)

      expect(appliersService.author).toHaveBeenCalledOnceWith(metadata.author)
    })

    it('should run keywords applier', () => {
      sut.apply(metadata)

      expect(appliersService.keywords).toHaveBeenCalledOnceWith(
        metadata.keywords,
      )
    })

    it('should run generator applier', () => {
      sut.apply(metadata)

      expect(appliersService.generator).toHaveBeenCalledOnceWith(
        metadata.generator,
      )
    })

    it('should run application name applier', () => {
      sut.apply(metadata)

      expect(appliersService.applicationName).toHaveBeenCalledOnceWith(
        metadata.applicationName,
      )
    })

    it('should run canonical URL applier', () => {
      sut.apply(metadata)

      expect(appliersService.canonicalUrl).toHaveBeenCalledOnceWith(
        metadata.canonicalUrl,
      )
    })

    it('should run image applier', () => {
      sut.apply(metadata)

      expect(appliersService.image).toHaveBeenCalledOnceWith(metadata.image)
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      GeneralMetadataApplierService,
      MockProvider(GeneralMetadataAppliersService),
    ],
  })
  return TestBed.inject(GeneralMetadataApplierService)
}
