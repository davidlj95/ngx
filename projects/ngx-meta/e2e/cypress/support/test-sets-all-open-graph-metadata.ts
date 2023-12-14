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
      cy.getMetaWithProperty('og:image')
        .shouldHaveContent()
        .and('eq', metadata.image.url)
      cy.getMetaWithProperty('og:image:alt')
        .shouldHaveContent()
        .and('eq', metadata.image.alt)
      cy.getMetaWithProperty('og:image:secure_url')
        .shouldHaveContent()
        .and('eq', metadata.openGraph.image.secureUrl)
      cy.getMetaWithProperty('og:image:type')
        .shouldHaveContent()
        .and('eq', metadata.openGraph.image.type)
      cy.getMetaWithProperty('og:image:width')
        .shouldHaveContent()
        .and('eq', metadata.openGraph.image.width.toString())
      cy.getMetaWithProperty('og:image:height')
        .shouldHaveContent()
        .and('eq', metadata.openGraph.image.height.toString())
    })
  })
}
