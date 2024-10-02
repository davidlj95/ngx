import ALL_METADATA_JSON from '../../fixtures/all-metadata.json'

export const shouldContainAllStandardMetadata = () =>
  it('should contain all standard metadata', () => {
    cy.fixture('all-metadata.json').then(
      (metadata: typeof ALL_METADATA_JSON) => {
        standardTitleShouldEqual(metadata.title)
        standardDescriptionShouldEqual(metadata.description)
        cy.getMeta('author')
          .shouldHaveContent()
          .and('eq', metadata.standard.author)
        cy.getMeta('keywords')
          .shouldHaveContent()
          .and('eq', metadata.standard.keywords.join(','))
        cy.getMeta('generator')
          .shouldHaveContent()
          .and('match', /^Angular v/)
        //👆 v1 cause we E2E test v15+
        cy.getMeta('application-name')
          .shouldHaveContent()
          .and('eq', metadata.applicationName)
        standardCanonicalUrlShouldEqual(metadata.canonicalUrl)
        cy.get('html').should('have.attr', 'lang').and('eq', metadata.locale)
        cy.getMeta('theme-color')
          .shouldHaveContent()
          .and('eq', metadata.standard.themeColor)
      },
    )
  })

export function standardTitleShouldEqual(title: string) {
  cy.title().should('eq', title)
}

export function standardDescriptionShouldEqual(description: string) {
  cy.getMeta('description').shouldHaveContent().and('eq', description)
}

export function standardCanonicalUrlShouldEqual(canonicalUrl: string) {
  cy.get('link[rel="canonical"]')
    .should('have.attr', 'href')
    .and('eq', canonicalUrl)
}

export const shouldNotContainAnyStandardMetadata = () =>
  it('should not contain any standard metadata', () => {
    cy.getMeta('description').should('not.exist')
    // It's actually set because of the default
    // cy.getMeta('author').should('not.exist')
    cy.getMeta('keywords').should('not.exist')
    cy.getMeta('generator').should('not.exist')
    cy.getMeta('application-name').should('not.exist')
    cy.get('link[rel="canonical"]').should('not.exist')
    cy.get('html').should('not.have.attr', 'lang')
    cy.getMeta('theme-color').should('not.exist')
  })
