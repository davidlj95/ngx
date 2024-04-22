import ALL_METADATA_JSON from '../../fixtures/all-metadata.json'

export const shouldContainAllOpenGraphProfileMetadata = (
  openGraphProfileOverrides: object = {},
) =>
  it('should contain all Open Graph profile metadata', () => {
    cy.fixture('all-metadata.json').then(
      (jsonMetadata: typeof ALL_METADATA_JSON) => {
        const metadata = {
          ...jsonMetadata,
          openGraph: {
            ...jsonMetadata.openGraph,
            profile: {
              ...jsonMetadata.openGraph.profile,
              ...openGraphProfileOverrides,
            },
          },
        }
        cy.getMetaWithProperty('og:profile:first_name')
          .shouldHaveContent()
          .and('eq', metadata.openGraph.profile.firstName)
        cy.getMetaWithProperty('og:profile:last_name')
          .shouldHaveContent()
          .and('eq', metadata.openGraph.profile.lastName)
        cy.getMetaWithProperty('og:profile:username')
          .shouldHaveContent()
          .and('eq', metadata.openGraph.profile.username)
        cy.getMetaWithProperty('og:profile:gender')
          .shouldHaveContent()
          .and('eq', metadata.openGraph.profile.gender)
      },
    )
  })

export const shouldNotContainAnyOpenGraphProfileMetadata = () =>
  it('should not contain any Open Graph profile metadata', () => {
    cy.getMetaWithProperty('og:profile:first_name').should('not.exist')
    cy.getMetaWithProperty('og:profile:last_name').should('not.exist')
    cy.getMetaWithProperty('og:profile:username').should('not.exist')
    cy.getMetaWithProperty('og:profile:gender').should('not.exist')
  })
