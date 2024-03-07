import { ROUTES } from '../fixtures/routes'
import {
  spyOnConsole,
  testNoConsoleLogsAreEmitted,
} from '../support/no-console-logs-are-emitted'
import ONE_METADATA_JSON from '../fixtures/one-metadata.json'
import { openGraphTitleShouldEqual } from '../support/test-sets-all-open-graph-metadata'
import {
  standardDescriptionShouldEqual,
  standardTitleShouldEqual,
} from '../support/test-sets-all-standard-metadata'
import { twitterCardTitleShouldEqual } from '../support/test-sets-all-twitter-card-metadata'
import { openGraphDescriptionShouldNotExist } from '../support/test-unsets-all-open-graph-metadata'
import { twitterCardDescriptionShouldNotExist } from '../support/test-unsets-all-twitter-card-metadata'

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
        standardTitleShouldEqual(expectedTitle)
        openGraphTitleShouldEqual(expectedTitle)
        twitterCardTitleShouldEqual(expectedTitle)
      },
    )
  })

  it('should set specific description standard element', () => {
    cy.fixture('one-metadata.json').then(
      (metadata: typeof ONE_METADATA_JSON) => {
        const expectedDescription = metadata.jsonPath.value
        standardDescriptionShouldEqual(expectedDescription)
        openGraphDescriptionShouldNotExist()
        twitterCardDescriptionShouldNotExist()
      },
    )
  })
})
