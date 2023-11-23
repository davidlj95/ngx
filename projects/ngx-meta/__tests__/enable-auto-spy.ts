import { ngMocks } from 'ng-mocks'

export function enableAutoSpy() {
  beforeAll(() => {
    ngMocks.autoSpy('jasmine')
  })
  afterAll(() => {
    ngMocks.autoSpy('reset')
  })
}
