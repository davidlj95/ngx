import { ROUTES } from '../fixtures/routes'
import {
  spyOnConsole,
  testNoConsoleLogsAreEmitted,
} from '../support/no-console-logs-are-emitted'
import CUSTOM_METADATA_JSON from '../fixtures/custom-metadata.json'

describe('Meta late loaded + custom', () => {
  beforeEach(() => {
    cy.visit(ROUTES.metaLateLoaded.path, {
      onBeforeLoad(win: Cypress.AUTWindow) {
        spyOnConsole(win)
      },
    })
  })

  testNoConsoleLogsAreEmitted()
  it('should set late loaded + custom metadata', () => {
    cy.fixture('custom-all-metadata.json').then(
      (customMetadata: typeof CUSTOM_METADATA_JSON) => {
        cy.getMeta(customMetadata.custom.keyName)
          .shouldHaveContent()
          .and('eq', customMetadata.custom.title)
      },
    )
  })

  describe('when going to another route', () => {
    beforeEach(() => {
      cy.goToRootPage()
    })

    testNoConsoleLogsAreEmitted()
    it('should unset late loaded + custom metadata', () => {
      cy.fixture('custom-all-metadata.json').then(
        (metadata: typeof CUSTOM_METADATA_JSON) => {
          cy.getMeta(metadata.custom.keyName).should('not.exist')
        },
      )
    })
  })
})
