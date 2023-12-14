export function testUnsetsAllOpenGraphMetadata() {
  it('should unset all Open Graph metadata', () => {
    cy.getMetaWithProperty('og:title').should('not.exist')
    cy.getMetaWithProperty('og:type').should('not.exist')
    cy.getMetaWithProperty('og:image').should('not.exist')
    cy.getMetaWithProperty('og:image:alt').should('not.exist')
    cy.getMetaWithProperty('og:image:secure_url').should('not.exist')
    cy.getMetaWithProperty('og:image:type').should('not.exist')
    cy.getMetaWithProperty('og:image:width').should('not.exist')
    cy.getMetaWithProperty('og:image:height').should('not.exist')
    cy.getMetaWithProperty('og:url').should('not.exist')
  })
}
