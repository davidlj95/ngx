import METADATA from '../fixtures/metadata.json'

export function testSetsAllOpenGraphMetadata() {
  it('should set all Open Graph metadata', () => {
    cy.fixture('metadata.json').then((metadata: typeof METADATA) => {
      cy.getMetaWithProperty('og:title')
        .shouldHaveContent()
        .and('eq', metadata.title)
      cy.getMetaWithProperty('og:type')
        .shouldHaveContent()
        .and('eq', metadata.openGraph.type)
    })
  })
}
