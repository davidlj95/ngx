import METADATA from '../fixtures/metadata.json'

export function testSetsJsonLd() {
  it('should set JSON LD metadata', () => {
    cy.fixture('metadata.json').then((metadata: typeof METADATA) => {
      cy.get('script[type="application/ld+json"]').should(
        'have.text',
        JSON.stringify(metadata.jsonLd),
      )
    })
  })
}
