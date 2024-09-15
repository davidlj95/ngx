import ALL_METADATA_JSON from '../../fixtures/all-metadata.json'

export const shouldContainAllOpenGraphMetadata = (
  openGraphOverrides: object = {},
) =>
  it('should contain all Open Graph metadata', () => {
    cy.fixture('all-metadata.json').then(
      (jsonMetadata: typeof ALL_METADATA_JSON) => {
        const metadata = {
          ...jsonMetadata,
          openGraph: {
            ...jsonMetadata.openGraph,
            ...openGraphOverrides,
          },
        }
        openGraphTitleShouldEqual(metadata.title)
        cy.getMetaWithProperty('og:type')
          .shouldHaveContent()
          .and('eq', metadata.openGraph.type)
        cy.getMetaWithProperty('og:image')
          .shouldHaveContent()
          .and('eq', metadata.image.url)
        cy.getMetaWithProperty('og:image:alt')
          .shouldHaveContent()
          .and('eq', metadata.image.alt)
        cy.getMetaWithProperty('og:image:secure_url')
          .shouldHaveContent()
          .and('eq', metadata.openGraph.image.secureUrl)
        cy.getMetaWithProperty('og:image:type')
          .shouldHaveContent()
          .and('eq', metadata.openGraph.image.type)
        cy.getMetaWithProperty('og:image:width')
          .shouldHaveContent()
          .and('eq', metadata.openGraph.image.width.toString())
        cy.getMetaWithProperty('og:image:height')
          .shouldHaveContent()
          .and('eq', metadata.openGraph.image.height.toString())
        openGraphUrlShouldEqual(metadata.canonicalUrl)
        cy.getMetaWithProperty('og:description')
          .shouldHaveContent()
          .and('eq', metadata.description)
        cy.getMetaWithProperty('og:locale')
          .shouldHaveContent()
          .and('eq', metadata.locale)
        cy.getMetaWithProperty('og:site_name')
          .shouldHaveContent()
          .and('eq', metadata.applicationName)
      },
    )
  })

export function openGraphTitleShouldEqual(title: string) {
  cy.getMetaWithProperty('og:title').shouldHaveContent().and('eq', title)
}

export function openGraphUrlShouldEqual(url: string) {
  cy.getMetaWithProperty('og:url').shouldHaveContent().and('eq', url)
}

export const shouldNotContainAnyOpenGraphMetadata = () =>
  it('should not contain any Open Graph metadata', () => {
    cy.getMetaWithProperty('og:title').should('not.exist')
    cy.getMetaWithProperty('og:type').should('not.exist')
    cy.getMetaWithProperty('og:image').should('not.exist')
    cy.getMetaWithProperty('og:image:alt').should('not.exist')
    cy.getMetaWithProperty('og:image:secure_url').should('not.exist')
    cy.getMetaWithProperty('og:image:type').should('not.exist')
    cy.getMetaWithProperty('og:image:width').should('not.exist')
    cy.getMetaWithProperty('og:image:height').should('not.exist')
    cy.getMetaWithProperty('og:url').should('not.exist')
    openGraphDescriptionShouldNotExist()
    cy.getMetaWithProperty('og:locale').should('not.exist')
    cy.getMetaWithProperty('og:site_name').should('not.exist')
  })

export function openGraphDescriptionShouldNotExist() {
  cy.getMetaWithProperty('og:description').should('not.exist')
}
