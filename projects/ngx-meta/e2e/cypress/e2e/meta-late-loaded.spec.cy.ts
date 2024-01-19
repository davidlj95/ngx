import { ROUTES } from '../fixtures/routes'
import {
  spyOnConsole,
  testNoConsoleLogsAreEmitted,
} from '../support/no-console-logs-are-emitted'
import LATE_LOADED_METADATA_JSON from '../fixtures/late-loaded-metadata.json'

describe('Meta late loaded', () => {
  beforeEach(() => {
    cy.visit(ROUTES.metaLateLoaded.path, {
      onBeforeLoad(win: Cypress.AUTWindow) {
        spyOnConsole(win)
      },
    })
  })

  testNoConsoleLogsAreEmitted()
  it('should set late loaded metadata', () => {
    cy.fixture('late-loaded-metadata.json').then(
      (lateLoadedMetadata: typeof LATE_LOADED_METADATA_JSON) => {
        cy.getMeta(lateLoadedMetadata.lateLoadedMetadata.name)
          .shouldHaveContent()
          .and('eq', lateLoadedMetadata.lateLoadedMetadata.content)
      },
    )
  })

  describe('when going to another route', () => {
    beforeEach(() => {
      cy.goToRootPage()
    })

    testNoConsoleLogsAreEmitted()
    it('should unset late loaded metadata', () => {
      cy.fixture('late-loaded-metadata.json').then(
        (metadata: typeof LATE_LOADED_METADATA_JSON) => {
          cy.getMeta(metadata.lateLoadedMetadata.name).should('not.exist')
        },
      )
    })
  })
})
