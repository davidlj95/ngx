import { JSON_LD_MIME } from './json-ld'

export const testUnsetsJsonLd = () =>
  it('should unset JSON LD metadata', () => {
    cy.get(`script[type="${JSON_LD_MIME}"]`).should('not.exist')
  })
