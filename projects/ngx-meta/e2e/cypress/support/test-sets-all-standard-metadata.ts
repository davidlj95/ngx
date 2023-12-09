import METADATA from '../fixtures/metadata.json'

export function testSetsAllStandardMetadata() {
  it('should set all standard metadata', () => {
    cy.fixture('metadata.json').then((metadata: typeof METADATA) => {
      cy.title().should('eq', metadata.title)
      cy.getMeta('description')
        .shouldHaveContent()
        .and('eq', metadata.description)
      cy.getMeta('author')
        .shouldHaveContent()
        .and('eq', metadata.standard.author)
    })
  })
}
