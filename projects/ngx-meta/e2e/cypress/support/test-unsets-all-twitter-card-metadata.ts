export function testUnsetsAllTwitterCardMetadata() {
  it('should unset all Twitter card metadata', () => {
    cy.getMetaWithProperty('twitter:card').should('not.exist')
    cy.getMetaWithProperty('twitter:site').should('not.exist')
    cy.getMetaWithProperty('twitter:site:id').should('not.exist')
    cy.getMetaWithProperty('twitter:creator').should('not.exist')
    cy.getMetaWithProperty('twitter:creator:id').should('not.exist')
  })
}
