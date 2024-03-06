import { ROUTES } from '../fixtures/routes'
import {
  spyOnConsole,
  testNoConsoleLogsAreEmitted,
} from '../support/no-console-logs-are-emitted'
import ONE_METADATA_JSON from '../fixtures/one-metadata.json'

describe('One meta set by service', () => {
  beforeEach(() => {
    cy.visit(ROUTES.oneMetaSetByService.path, {
      onBeforeLoad(win: Cypress.AUTWindow) {
        spyOnConsole(win)
      },
    })
  })

  testNoConsoleLogsAreEmitted()

  it('should set all title metadata elements', () => {
    cy.fixture('one-metadata.json').then(
      (metadata: typeof ONE_METADATA_JSON) => {
        const expectedTitle = metadata.global.value
        cy.title().should('eq', expectedTitle)
        cy.getMetaWithProperty('og:title')
          .shouldHaveContent()
          .and('eq', expectedTitle)
        cy.getMeta('twitter:title').shouldHaveContent().and('eq', expectedTitle)
      },
    )
  })

  it('should set specific description standard element', () => {
    cy.fixture('one-metadata.json').then(
      (metadata: typeof ONE_METADATA_JSON) => {
        const expectedDescription = metadata.jsonPath.value
        cy.getMeta('description')
          .shouldHaveContent()
          .and('eq', expectedDescription)
        cy.getMetaWithProperty('og:description').should('not.exist')
        cy.getMeta('twitter:description').should('not.exist')
      },
    )
  })
})
