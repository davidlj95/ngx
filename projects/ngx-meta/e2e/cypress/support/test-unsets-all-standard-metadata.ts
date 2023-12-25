export function testUnsetsAllStandardMetadata() {
  it('should unset all standard metadata', () => {
    cy.getMeta('description').should('not.exist')
    // It's actually set because of the default
    // cy.getMeta('author').should('not.exist')
    cy.getMeta('keywords').should('not.exist')
    cy.getMeta('generator').should('not.exist')
    cy.getMeta('application-name').should('not.exist')
    cy.get('link[rel="canonical"]').should('not.exist')
    cy.get('html').should('not.have.attr', 'lang')
  })
}
