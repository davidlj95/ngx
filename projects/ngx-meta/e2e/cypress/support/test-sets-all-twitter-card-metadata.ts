import ALL_METADATA_JSON from '../fixtures/all-metadata.json'

export function testSetsAllTwitterCardMetadata(
  twitterCardOverrides: object = {},
) {
  it('should set all Twitter card metadata', () => {
    cy.fixture('all-metadata.json').then(
      (jsonMetadata: typeof ALL_METADATA_JSON) => {
        const metadata = {
          ...jsonMetadata,
          twitterCard: {
            ...jsonMetadata.twitterCard,
            ...twitterCardOverrides,
          },
        }
        cy.getMeta('twitter:card')
          .shouldHaveContent()
          .and('eq', metadata.twitterCard.card)
        cy.getMeta('twitter:site')
          .shouldHaveContent()
          .and('eq', metadata.twitterCard.site.username)
        cy.getMeta('twitter:site:id')
          .shouldHaveContent()
          .and('eq', metadata.twitterCard.site.id)
        cy.getMeta('twitter:creator')
          .shouldHaveContent()
          .and('eq', metadata.twitterCard.creator.username)
        cy.getMeta('twitter:creator:id')
          .shouldHaveContent()
          .and('eq', metadata.twitterCard.creator.id)
        cy.getMeta('twitter:description')
          .shouldHaveContent()
          .and('eq', metadata.description)
        cy.getMeta('twitter:title')
          .shouldHaveContent()
          .and('eq', metadata.title)
        cy.getMeta('twitter:image')
          .shouldHaveContent()
          .and('eq', metadata.image.url)
        cy.getMeta('twitter:image:alt')
          .shouldHaveContent()
          .and('eq', metadata.image.alt)
      },
    )
  })
}
