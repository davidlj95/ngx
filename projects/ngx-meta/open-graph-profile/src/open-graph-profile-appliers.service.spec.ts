import { TestBed } from '@angular/core/testing'

import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { OpenGraphProfileAppliersService } from './open-graph-profile-appliers.service'
import { OpenGraphProfileProperty } from './open-graph-profile-property'
import { OpenGraphProfileGender } from './open-graph-profile-gender'
import { _MetaService } from '@davidlj95/ngx-meta/common'

describe('OpenGraphProfileAppliersService', () => {
  enableAutoSpy()

  let sut: OpenGraphProfileAppliersService
  // noinspection DuplicatedCode
  let metaService: _MetaService

  beforeEach(() => {
    sut = makeSut()
    metaService = TestBed.inject(_MetaService)
  })

  describe('firstName', () => {
    const firstName = 'Foo'

    it('should apply meta command with first name property and content', () => {
      sut.firstName(firstName)

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        OpenGraphProfileProperty.FIRST_NAME,
        firstName,
      )
    })
  })

  describe('lastName', () => {
    const lastName = 'Bar'

    it('should apply meta command with last name property and content', () => {
      sut.lastName(lastName)

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        OpenGraphProfileProperty.LAST_NAME,
        lastName,
      )
    })
  })

  describe('username', () => {
    const username = 'foobar'

    it('should apply meta command with username property and content', () => {
      sut.username(username)

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        OpenGraphProfileProperty.USERNAME,
        username,
      )
    })
  })

  describe('gender', () => {
    const gender = OpenGraphProfileGender.Male

    it('should apply meta command with gender property and content', () => {
      sut.gender(gender)

      expect(metaService.apply).toHaveBeenCalledOnceWith(
        OpenGraphProfileProperty.GENDER,
        gender,
      )
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [OpenGraphProfileAppliersService, MockProvider(_MetaService)],
  })
  return TestBed.inject(OpenGraphProfileAppliersService)
}
