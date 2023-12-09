import { ROUTES } from '../fixtures/routes'
import { testSetsAllStandardMetadata } from '../support/test-sets-all-standard-metadata'

describe('Meta set by service', () => {
  beforeEach(() => {
    cy.visit(ROUTES.metaSetByService.path)
  })

  testSetsAllStandardMetadata()
  // it('sets all general metadata', () => {
  //     cy.get('link[rel="canonical"]')
  //       .should('have.attr', 'href')
  //       .and('contain', meta.canonicalUrl)
  //     cy.get('html')
  //       .should('have.attr', 'lang')
  //       .and('eq', meta.locale)
  // })
})
