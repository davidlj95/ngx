import { ROUTES } from '../fixtures/routes'
import {
  spyOnConsole,
  testNoConsoleLogsAreEmitted,
} from '../support/no-console-logs-are-emitted'
import DEFAULTS from '../fixtures/defaults.json'

describe('Defaults', () => {
  beforeEach(() => {
    cy.visit(ROUTES.root.path, {
      onBeforeLoad(win: Cypress.AUTWindow) {
        spyOnConsole(win)
      },
    })
  })

  it('should set default author', () => {
    cy.fixture('defaults.json').then((defaults: typeof DEFAULTS) => {
      cy.getMeta('author')
        .shouldHaveContent()
        .and('eq', defaults.standard.author)
    })
  })

  testNoConsoleLogsAreEmitted()
})
