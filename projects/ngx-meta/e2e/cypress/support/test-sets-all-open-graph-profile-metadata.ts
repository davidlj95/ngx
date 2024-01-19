import METADATA_JSON from '../fixtures/metadata.json'

export function testSetsAllOpenGraphProfileMetadata(
  openGraphProfileOverrides: object = {},
) {
  it('should set all Open Graph profile metadata', () => {
    cy.fixture('metadata.json').then((jsonMetadata: typeof METADATA_JSON) => {
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
    })
  })
}
