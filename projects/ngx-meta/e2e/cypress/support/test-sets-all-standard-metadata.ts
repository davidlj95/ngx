import ALL_METADATA_JSON from '../fixtures/all-metadata.json'

export function testSetsAllStandardMetadata() {
  it('should set all standard metadata', () => {
    cy.fixture('all-metadata.json').then(
      (metadata: typeof ALL_METADATA_JSON) => {
        cy.title().should('eq', metadata.title)
        cy.getMeta('description')
          .shouldHaveContent()
          .and('eq', metadata.description)
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
        cy.get('link[rel="canonical"]')
          .should('have.attr', 'href')
          .and('eq', metadata.canonicalUrl)
        cy.get('html').should('have.attr', 'lang').and('eq', metadata.locale)
      },
    )
  })
}
