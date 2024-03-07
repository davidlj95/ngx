import ALL_METADATA_JSON from '../fixtures/all-metadata.json'

export function testSetsJsonLd() {
  it('should set JSON LD metadata', () => {
    cy.fixture('all-metadata.json').then(
      (metadata: typeof ALL_METADATA_JSON) => {
        cy.get('script[type="application/ld+json"]').should(
          'have.text',
          JSON.stringify(metadata.jsonLd),
        )
      },
    )
  })
}
