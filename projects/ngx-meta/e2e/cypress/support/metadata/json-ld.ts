import ALL_METADATA_JSON from '../../fixtures/all-metadata.json'
import { JSON_LD_MIME } from '../json-ld'

export const shouldContainJsonLdMetadata = () =>
  it('should contain JSON-LD metadata', () => {
    cy.fixture('all-metadata.json').then(
      (metadata: typeof ALL_METADATA_JSON) => {
        cy.get(`script[type="${JSON_LD_MIME}"]`).should(
          'have.text',
          JSON.stringify(metadata.jsonLd),
        )
      },
    )
  })
export const shouldNotContainJsonLdMetadata = () =>
  it('should not contain JSON-LD metadata', () => {
    cy.get(`script[type="${JSON_LD_MIME}"]`).should('not.exist')
  })
