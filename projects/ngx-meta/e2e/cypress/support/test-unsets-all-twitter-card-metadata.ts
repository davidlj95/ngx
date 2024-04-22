export const testUnsetsAllTwitterCardMetadata = () =>
  it('should unset all Twitter card metadata', () => {
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
