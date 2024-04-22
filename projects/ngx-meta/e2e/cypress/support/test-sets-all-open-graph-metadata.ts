import ALL_METADATA_JSON from '../fixtures/all-metadata.json'

export const testSetsAllOpenGraphMetadata = (openGraphOverrides: object = {}) =>
  it('should set all Open Graph metadata', () => {
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
        cy.getMetaWithProperty('og:url')
          .shouldHaveContent()
          .and('eq', metadata.canonicalUrl)
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
