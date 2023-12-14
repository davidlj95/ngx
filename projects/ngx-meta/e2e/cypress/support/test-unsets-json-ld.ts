import METADATA from '../fixtures/metadata.json'

export function testUnsetsJsonLd() {
  it('should unset JSON LD metadata', () => {
    cy.fixture('metadata.json').then((metadata: typeof METADATA) => {
      cy.get('script[type="application/ld+json"]').should('not.exist')
    })
  })
}
