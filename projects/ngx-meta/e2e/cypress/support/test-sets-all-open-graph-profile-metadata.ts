import METADATA from '../fixtures/metadata.json'

export function testSetsAllOpenGraphProfileMetadata() {
  it('should set all Open Graph profile metadata', () => {
    cy.fixture('metadata.json').then((metadata: typeof METADATA) => {
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
