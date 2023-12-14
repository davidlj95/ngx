import METADATA from '../fixtures/metadata.json'

export function testSetsAllTwitterCardMetadata() {
  it('should set all Twitter card metadata', () => {
    cy.fixture('metadata.json').then((metadata: typeof METADATA) => {
      cy.getMetaWithProperty('twitter:card')
        .shouldHaveContent()
        .and('eq', metadata.twitterCard.card)
      cy.getMetaWithProperty('twitter:site')
        .shouldHaveContent()
        .and('eq', metadata.twitterCard.site.username)
      cy.getMetaWithProperty('twitter:site:id')
        .shouldHaveContent()
        .and('eq', metadata.twitterCard.site.id)
      cy.getMetaWithProperty('twitter:creator')
        .shouldHaveContent()
        .and('eq', metadata.twitterCard.creator.username)
      cy.getMetaWithProperty('twitter:creator:id')
        .shouldHaveContent()
        .and('eq', metadata.twitterCard.creator.id)
    })
  })
}
