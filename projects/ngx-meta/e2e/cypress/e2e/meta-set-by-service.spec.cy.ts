import { ROUTES } from '../fixtures/routes'
import { testSetsAllStandardMetadata } from '../support/test-sets-all-standard-metadata'
import { testSetsAllOpenGraphMetadata } from '../support/test-sets-all-open-graph-metadata'
import { testSetsAllOpenGraphProfileMetadata } from '../support/test-sets-all-open-graph-profile-metadata'
import { testSetsAllTwitterCardMetadata } from '../support/test-sets-all-twitter-card-metadata'

describe('Meta set by service', () => {
  beforeEach(() => {
    cy.visit(ROUTES.metaSetByService.path)
  })

  testSetsAllStandardMetadata()
  testSetsAllOpenGraphMetadata()
  testSetsAllOpenGraphProfileMetadata()
  testSetsAllTwitterCardMetadata()
})
