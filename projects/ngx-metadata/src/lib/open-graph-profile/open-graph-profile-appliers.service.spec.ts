import { TestBed } from '@angular/core/testing'

import { MetaCommand } from '../common/meta-command/meta-command'
import { MockProvider } from 'ng-mocks'
import { MetaCommandService } from '../common/meta-command/meta-command.service'
import { enableAutoSpy } from '../__tests__/enable-auto-spy'
import { OpenGraphProfileAppliersService } from './open-graph-profile-appliers.service'
import { OpenGraphProfileProperty } from './open-graph-profile-property'
import { OpenGraphProfileGender } from './open-graph-profile-gender'

describe('OpenGraphProfileAppliersService', () => {
  enableAutoSpy()

  let sut: OpenGraphProfileAppliersService
  // noinspection DuplicatedCode
  let metaCommandService: MetaCommandService

  beforeEach(() => {
    sut = makeSut()
    metaCommandService = TestBed.inject(MetaCommandService)
  })

  describe('firstName', () => {
    const firstName = 'Foo'

    it('should apply meta command with first name property and content', () => {
      sut.firstName(firstName)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new MetaCommand(OpenGraphProfileProperty.FIRST_NAME, firstName),
      )
    })
  })

  describe('lastName', () => {
    const lastName = 'Bar'

    it('should apply meta command with last name property and content', () => {
      sut.lastName(lastName)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new MetaCommand(OpenGraphProfileProperty.LAST_NAME, lastName),
      )
    })
  })

  describe('username', () => {
    const username = 'foobar'

    it('should apply meta command with username property and content', () => {
      sut.username(username)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new MetaCommand(OpenGraphProfileProperty.USERNAME, username),
      )
    })
  })

  describe('gender', () => {
    const gender = OpenGraphProfileGender.Male

    it('should apply meta command with gender property and content', () => {
      sut.gender(gender)

      expect(metaCommandService.apply).toHaveBeenCalledOnceWith(
        new MetaCommand(OpenGraphProfileProperty.GENDER, gender),
      )
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      OpenGraphProfileAppliersService,
      MockProvider(MetaCommandService),
    ],
  })
  return TestBed.inject(OpenGraphProfileAppliersService)
}
