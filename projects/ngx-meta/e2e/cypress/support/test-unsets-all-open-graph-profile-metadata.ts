export function testUnsetsAllOpenGraphProfileMetadata() {
  it('should unset all Open Graph profile metadata', () => {
    cy.getMetaWithProperty('og:profile:first_name').should('not.exist')
  })
}
