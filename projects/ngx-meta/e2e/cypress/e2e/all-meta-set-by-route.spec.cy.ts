import { ROUTES } from '../fixtures/routes'
import { testSetsAllStandardMetadata } from '../support/test-sets-all-standard-metadata'
import { testSetsAllOpenGraphMetadata } from '../support/test-sets-all-open-graph-metadata'
import { testUnsetsAllStandardMetadata } from '../support/test-unsets-all-standard-metadata'
import { testUnsetsAllOpenGraphMetadata } from '../support/test-unsets-all-open-graph-metadata'
import { testSetsAllOpenGraphProfileMetadata } from '../support/test-sets-all-open-graph-profile-metadata'
import { testUnsetsAllOpenGraphProfileMetadata } from '../support/test-unsets-all-open-graph-profile-metadata'
import { testSetsAllTwitterCardMetadata } from '../support/test-sets-all-twitter-card-metadata'
import { testUnsetsAllTwitterCardMetadata } from '../support/test-unsets-all-twitter-card-metadata'
import { testSetsJsonLd } from '../support/test-sets-json-ld'
import { testUnsetsJsonLd } from '../support/test-unsets-json-ld'
import {
  spyOnConsole,
  testNoConsoleLogsAreEmitted,
} from '../support/no-console-logs-are-emitted'

describe('All meta set by route', () => {
  beforeEach(() => {
    cy.visit(ROUTES.allMetaSetByRoute.path, {
      onBeforeLoad(win: Cypress.AUTWindow) {
        spyOnConsole(win)
      },
    })
  })

  testSetsAllStandardMetadata()
  testSetsAllOpenGraphMetadata()
  testSetsAllOpenGraphProfileMetadata()
  testSetsAllTwitterCardMetadata()
  testSetsJsonLd()
  testNoConsoleLogsAreEmitted()

  describe('when going to another route', () => {
    beforeEach(() => {
      cy.goToRootPage()
    })

    testUnsetsAllStandardMetadata()
    testUnsetsAllOpenGraphMetadata()
    testUnsetsAllOpenGraphProfileMetadata()
    testUnsetsAllTwitterCardMetadata()
    testUnsetsJsonLd()
    testNoConsoleLogsAreEmitted()
  })
})
