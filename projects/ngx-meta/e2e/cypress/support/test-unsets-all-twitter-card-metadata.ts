export function testUnsetsAllTwitterCardMetadata() {
  it('should unset all Twitter card metadata', () => {
    cy.getMetaWithProperty('twitter:card').should('not.exist')
  })
}
