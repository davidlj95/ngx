import ALL_METADATA_JSON from '../../fixtures/all-metadata.json'

export const shouldContainAllTwitterCardMetadata = (
  twitterCardOverrides: object = {},
) =>
  it('should contain all Twitter Card metadata', () => {
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
        twitterCardTitleShouldEqual(metadata.title)
        cy.getMeta('twitter:image')
          .shouldHaveContent()
          .and('eq', metadata.image.url)
        cy.getMeta('twitter:image:alt')
          .shouldHaveContent()
          .and('eq', metadata.image.alt)
      },
    )
  })

export function twitterCardTitleShouldEqual(title: string) {
  cy.getMeta('twitter:title').shouldHaveContent().and('eq', title)
}

export const shouldNotContainAnyTwitterCardMetadata = () =>
  it('should not contain any Twitter Card metadata', () => {
    cy.getMeta('twitter:card').should('not.exist')
    cy.getMeta('twitter:site').should('not.exist')
    cy.getMeta('twitter:site:id').should('not.exist')
    cy.getMeta('twitter:creator').should('not.exist')
    cy.getMeta('twitter:creator:id').should('not.exist')
    twitterCardDescriptionShouldNotExist()
    cy.getMeta('twitter:title').should('not.exist')
    cy.getMeta('twitter:image').should('not.exist')
    cy.getMeta('twitter:image:alt').should('not.exist')
  })

export function twitterCardDescriptionShouldNotExist() {
  cy.getMeta('twitter:description').should('not.exist')
}
