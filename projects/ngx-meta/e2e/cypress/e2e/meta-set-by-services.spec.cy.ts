import generalMetadata from '../fixtures/general-metadata.json'
import { META_SET_BY_SERVICES } from '../fixtures/routes'

describe('Meta set by services', () => {
  before(() => {
    cy.visit(META_SET_BY_SERVICES)
  })

  it('sets all general metadata', () => {
    cy.fixture('general-metadata.json').then((meta: typeof generalMetadata) => {
      cy.title().should('eq', meta.title)
      cy.get('meta[name="description"]')
        .should('have.attr', 'content')
        .and('eq', meta.description)
      cy.get('meta[name="author"]')
        .should('have.attr', 'content')
        .and('eq', meta.author)
      cy.get('meta[name="keywords"]')
        .should('have.attr', 'content')
        .and('eq', meta.keywords.join(','))
      cy.get('meta[name="generator"]')
        .should('have.attr', 'content')
        .and('contain', 'Angular v')
      cy.get('meta[name="application-name"]')
        .should('have.attr', 'content')
        .and('contain', meta.applicationName)
      cy.get('link[rel="canonical"]')
        .should('have.attr', 'href')
        .and('contain', meta.canonicalUrl)
      cy.get('html')
        .should('have.attr', 'lang')
        .and('eq', generalMetadata.locale)
    })
  })
})
