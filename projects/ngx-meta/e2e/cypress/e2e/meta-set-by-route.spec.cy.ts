import ROUTE_METADATA from '../fixtures/route-metadata.json'
import { ROUTES } from '../fixtures/routes'

describe('Meta set by route', () => {
  beforeEach(() => {
    cy.visit(ROUTES.metaSetByRoute.path)
  })

  it('sets all standard metadata', () => {
    cy.fixture('route-metadata.json').then(
      (routeMetadata: typeof ROUTE_METADATA) => {
        const meta = routeMetadata.meta
        cy.title().should('eq', meta.title)
        cy.getMeta('description')
          .shouldHaveContent()
          .and('eq', meta.description)
        cy.getMeta('author').shouldHaveContent().and('eq', meta.standard.author)
      },
    )
  })

  it('removes all metadata when going to another route', () => {
    const selector = `#${ROUTES.root.linkId}`
    cy.get(selector).click()
    cy.location('pathname').should('eq', ROUTES.root.path)
    cy.getMeta('description').should('not.exist')
    cy.getMeta('author').should('not.exist')
  })
})
