import METADATA from '../fixtures/metadata.json'

export function testSetsAllTwitterCardMetadata() {
  it('should set all Twitter card metadata', () => {
    cy.fixture('metadata.json').then((metadata: typeof METADATA) => {
      cy.getMetaWithProperty('twitter:card')
        .shouldHaveContent()
        .and('eq', metadata.twitterCard.card)
    })
  })
}
