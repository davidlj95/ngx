import { ROUTES } from '../fixtures/routes'
import { testSetsAllStandardMetadata } from '../support/test-sets-all-standard-metadata'

describe('Meta set by route', () => {
  beforeEach(() => {
    cy.visit(ROUTES.metaSetByRoute.path)
  })

  testSetsAllStandardMetadata()

  it('removes all metadata when going to another route', () => {
    const selector = `#${ROUTES.root.linkId}`
    cy.get(selector).click()
    cy.location('pathname').should('eq', ROUTES.root.path)
    cy.getMeta('description').should('not.exist')
    cy.getMeta('author').should('not.exist')
    cy.getMeta('keywords').should('not.exist')
    cy.getMeta('generator').should('not.exist')
  })
})
