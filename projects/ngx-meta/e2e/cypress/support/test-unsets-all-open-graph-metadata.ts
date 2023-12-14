export function testUnsetsAllOpenGraphMetadata() {
  it('should unset all Open Graph metadata', () => {
    cy.getMetaWithProperty('og:title').should('not.exist')
  })
}
