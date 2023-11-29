import generalMetadata from '../fixtures/general-metadata.json'
import openGraphSpecific from '../fixtures/open-graph-specific.json'
import { META_SET_BY_SERVICES } from '../fixtures/routes'

describe('Meta set by services', () => {
  beforeEach(() => {
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

  it('sets all Open Graph metadata', () => {
    // Set from general metadata
    cy.fixture('general-metadata.json').then((meta: typeof generalMetadata) => {
      cy.get('meta[property="og:title"]')
        .should('have.attr', 'content')
        .and('eq', meta.title)
      cy.get('meta[property="og:image"]')
        .should('have.attr', 'content')
        .and('eq', meta.image.url)
      cy.get('meta[property="og:image:alt"]')
        .should('have.attr', 'content')
        .and('eq', meta.image.alt)
      cy.get('meta[property="og:url"]')
        .should('have.attr', 'content')
        .and('eq', meta.canonicalUrl)
      cy.get('meta[property="og:description"]')
        .should('have.attr', 'content')
        .and('eq', meta.description)
      cy.get('meta[property="og:locale"]')
        .should('have.attr', 'content')
        .and('eq', meta.locale)
      cy.get('meta[property="og:site_name"]')
        .should('have.attr', 'content')
        .and('eq', meta.applicationName)
    })
    // Open Graph specifics
    cy.fixture('open-graph-specific.json').then(
      (meta: typeof openGraphSpecific) => {
        cy.get('meta[property="og:type"]')
          .should('have.attr', 'content')
          .and('eq', meta.type)
        cy.get('meta[property="og:image:secure_url"]')
          .should('have.attr', 'content')
          .and('eq', meta.image.secureUrl)
        cy.get('meta[property="og:image:type"]')
          .should('have.attr', 'content')
          .and('eq', meta.image.type)
        cy.get('meta[property="og:image:width"]')
          .should('have.attr', 'content')
          .and('eq', meta.image.width.toString())
        cy.get('meta[property="og:image:height"]')
          .should('have.attr', 'content')
          .and('eq', meta.image.height.toString())
      },
    )
  })
})
