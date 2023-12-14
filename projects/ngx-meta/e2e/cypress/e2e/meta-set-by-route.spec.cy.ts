import { ROUTES } from '../fixtures/routes'
import { testSetsAllStandardMetadata } from '../support/test-sets-all-standard-metadata'
import { testSetsAllOpenGraphMetadata } from '../support/test-sets-all-open-graph-metadata'
import { testUnsetsAllStandardMetadata } from '../support/test-unsets-all-standard-metadata'
import { testUnsetsAllOpenGraphMetadata } from '../support/test-unsets-all-open-graph-metadata'

describe('Meta set by route', () => {
  beforeEach(() => {
    cy.visit(ROUTES.metaSetByRoute.path)
  })

  testSetsAllStandardMetadata()
  testSetsAllOpenGraphMetadata()

  describe('when going to another route', () => {
    beforeEach(() => {
      const selector = `#${ROUTES.root.linkId}`
      cy.get(selector).click()
      cy.location('pathname').should('eq', ROUTES.root.path)
    })

    testUnsetsAllStandardMetadata()
    testUnsetsAllOpenGraphMetadata()
  })
})
