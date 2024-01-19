import METADATA_JSON from '../fixtures/metadata.json'

export function testSetsAllTwitterCardMetadata(
  twitterCardOverrides: object = {},
) {
  it('should set all Twitter card metadata', () => {
    cy.fixture('metadata.json').then((jsonMetadata: typeof METADATA_JSON) => {
      const metadata = {
        ...jsonMetadata,
        twitterCard: {
          ...jsonMetadata.twitterCard,
          ...twitterCardOverrides,
        },
      }
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
      cy.getMetaWithProperty('twitter:description')
        .shouldHaveContent()
        .and('eq', metadata.description)
      cy.getMetaWithProperty('twitter:title')
        .shouldHaveContent()
        .and('eq', metadata.title)
      cy.getMetaWithProperty('twitter:image')
        .shouldHaveContent()
        .and('eq', metadata.image.url)
      cy.getMetaWithProperty('twitter:image:alt')
        .shouldHaveContent()
        .and('eq', metadata.image.alt)
    })
  })
}
