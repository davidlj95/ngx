import METADATA_JSON from '../fixtures/metadata.json'

export function testSetsJsonLd() {
  it('should set JSON LD metadata', () => {
    cy.fixture('metadata.json').then((metadata: typeof METADATA_JSON) => {
      cy.get('script[type="application/ld+json"]').should(
        'have.text',
        JSON.stringify(metadata.jsonLd),
      )
    })
  })
}
