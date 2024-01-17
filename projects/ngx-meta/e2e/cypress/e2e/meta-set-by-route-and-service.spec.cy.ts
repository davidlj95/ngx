import { ROUTES } from '../fixtures/routes'
import { testSetsAllStandardMetadata } from '../support/test-sets-all-standard-metadata'
import { testSetsAllOpenGraphMetadata } from '../support/test-sets-all-open-graph-metadata'
import { testSetsAllOpenGraphProfileMetadata } from '../support/test-sets-all-open-graph-profile-metadata'
import { testSetsAllTwitterCardMetadata } from '../support/test-sets-all-twitter-card-metadata'
import { testSetsJsonLd } from '../support/test-sets-json-ld'
import {
  spyOnConsole,
  testNoConsoleLogsAreEmitted,
} from '../support/no-console-logs-are-emitted'
import { testUnsetsAllStandardMetadata } from '../support/test-unsets-all-standard-metadata'
import { testUnsetsAllOpenGraphMetadata } from '../support/test-unsets-all-open-graph-metadata'
import { testUnsetsAllOpenGraphProfileMetadata } from '../support/test-unsets-all-open-graph-profile-metadata'
import { testUnsetsAllTwitterCardMetadata } from '../support/test-unsets-all-twitter-card-metadata'
import { testUnsetsJsonLd } from '../support/test-unsets-json-ld'

describe('Meta set by route and service', () => {
  beforeEach(() => {
    cy.visit(ROUTES.metaSetByRouteAndService.path, {
      onBeforeLoad(win: Cypress.AUTWindow) {
        spyOnConsole(win)
      },
    })
  })

  testNoConsoleLogsAreEmitted()
  testSetsAllStandardMetadata()
  testSetsAllOpenGraphMetadata({ type: 'book' })
  testSetsAllOpenGraphProfileMetadata({ gender: 'female' })
  testSetsAllTwitterCardMetadata({ card: 'summary_large_image' })
  testSetsJsonLd()

  // noinspection DuplicatedCode
  describe('when going to another route', () => {
    beforeEach(() => {
      const selector = `#${ROUTES.root.linkId}`
      cy.get(selector).click()
      cy.location('pathname').should('eq', ROUTES.root.path)
    })

    testUnsetsAllStandardMetadata()
    testUnsetsAllOpenGraphMetadata()
    testUnsetsAllOpenGraphProfileMetadata()
    testUnsetsAllTwitterCardMetadata()
    testUnsetsJsonLd()
    testNoConsoleLogsAreEmitted()
  })
})
