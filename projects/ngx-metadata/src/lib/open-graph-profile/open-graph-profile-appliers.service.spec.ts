import { TestBed } from '@angular/core/testing'

import { MockProvider } from 'ng-mocks'
import { enableAutoSpy } from 'ngx-metadata/__tests__/enable-auto-spy'
import { OpenGraphProfileAppliersService } from './open-graph-profile-appliers.service'
import { OpenGraphProfileProperty } from './open-graph-profile-property'
import { OpenGraphProfileGender } from './open-graph-profile-gender'
import { _MetaCommand, _MetaCommandService } from 'ngx-metadata/common'

describe('OpenGraphProfileAppliersService', () => {
  enableAutoSpy()

  let sut: OpenGraphProfileAppliersService
  // noinspection DuplicatedCode
  let metaCommandService: _MetaCommandService

  beforeEach(() => {
    sut = makeSut()
    metaCommandService = TestBed.inject(_MetaCommandService)
  })

  describe('firstName', () => {
    const firstName = 'Foo'

    it('should apply meta command with first name property and content', () => {
      sut.firstName(firstName)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(OpenGraphProfileProperty.FIRST_NAME, firstName),
      )
    })
  })

  describe('lastName', () => {
    const lastName = 'Bar'

    it('should apply meta command with last name property and content', () => {
      sut.lastName(lastName)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(OpenGraphProfileProperty.LAST_NAME, lastName),
      )
    })
  })

  describe('username', () => {
    const username = 'foobar'

    it('should apply meta command with username property and content', () => {
      sut.username(username)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(OpenGraphProfileProperty.USERNAME, username),
      )
    })
  })

  describe('gender', () => {
    const gender = OpenGraphProfileGender.Male

    it('should apply meta command with gender property and content', () => {
      sut.gender(gender)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new _MetaCommand(OpenGraphProfileProperty.GENDER, gender),
      )
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      OpenGraphProfileAppliersService,
      MockProvider(_MetaCommandService),
    ],
  })
  return TestBed.inject(OpenGraphProfileAppliersService)
}
