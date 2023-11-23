import { TestBed } from '@angular/core/testing'

import { OpenGraphProfileApplierService } from './open-graph-profile-applier.service'
import { MockProvider } from 'ng-mocks'
import { OpenGraphProfile } from './open-graph-profile'
import { OpenGraphProfileAppliersService } from './open-graph-profile-appliers.service'
import { enableAutoSpy } from '@davidlj95/ngx-meta/__tests__/enable-auto-spy'

describe('OpenGraphProfileApplierService', () => {
  enableAutoSpy()

  describe('apply', () => {
    let sut: OpenGraphProfileApplierService
    let appliersService: OpenGraphProfileAppliersService
    const metadata: OpenGraphProfile = {
      firstName: 'Foo',
      lastName: 'Bar',
      username: 'foobar',
      gender: 'non-binary',
    }

    beforeEach(() => {
      sut = makeSut()
      appliersService = TestBed.inject(OpenGraphProfileAppliersService)
    })

    it('should run first name applier', () => {
      sut.apply(metadata)

      expect(appliersService.firstName).toHaveBeenCalledOnceWith(
        metadata.firstName,
      )
    })

    it('should run last name applier', () => {
      sut.apply(metadata)

      expect(appliersService.lastName).toHaveBeenCalledOnceWith(
        metadata.lastName,
      )
    })

    it('should run username applier', () => {
      sut.apply(metadata)

      expect(appliersService.username).toHaveBeenCalledOnceWith(
        metadata.username,
      )
    })

    it('should run gender applier', () => {
      sut.apply(metadata)

      expect(appliersService.gender).toHaveBeenCalledOnceWith(metadata.gender)
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      OpenGraphProfileApplierService,
      MockProvider(OpenGraphProfileAppliersService),
    ],
  })
  return TestBed.inject(OpenGraphProfileApplierService)
}
