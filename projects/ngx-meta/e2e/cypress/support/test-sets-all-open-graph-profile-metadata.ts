import METADATA from '../fixtures/metadata.json'

export function testSetsAllOpenGraphProfileMetadata() {
  it('should set all Open Graph profile metadata', () => {
    cy.fixture('metadata.json').then((metadata: typeof METADATA) => {
      cy.getMetaWithProperty('og:profile:first_name')
        .shouldHaveContent()
        .and('eq', metadata.openGraph.profile.firstName)
    })
  })
}
