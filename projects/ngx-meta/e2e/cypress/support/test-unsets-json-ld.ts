export function testUnsetsJsonLd() {
  it('should unset JSON LD metadata', () => {
    cy.get('script[type="application/ld+json"]').should('not.exist')
  })
}
