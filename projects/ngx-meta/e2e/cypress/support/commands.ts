/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import Chainable = Cypress.Chainable
import { ROUTES } from '../fixtures/routes'

Cypress.Commands.add<'getMeta'>('getMeta', (name) => {
  cy.get(`meta[name="${name}"]`)
})

Cypress.Commands.add<'getMetaWithProperty'>(
  'getMetaWithProperty',
  (property) => {
    cy.get(`meta[property="${property}"]`)
  },
)

Cypress.Commands.add<'shouldHaveContent', Chainable<HTMLMetaElement>>(
  'shouldHaveContent',
  { prevSubject: true },
  (prevSubject) => {
    return cy.wrap(prevSubject).should('have.attr', 'content')
  },
)

Cypress.Commands.add<'goToRootPage'>('goToRootPage', () => {
  const selector = `#${ROUTES.root.linkId}`
  cy.get(selector).click()
  cy.location('pathname').should('eq', ROUTES.root.path)
})

// 👇 Make TypeScript happy (not in Cypress docs though)
// https://stackoverflow.com/a/59499895/3263250
export {}

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      goToRootPage(): Chainable<void>
      getMeta(name: string): Chainable<HTMLMetaElement>
      getMetaWithProperty(property: string): Chainable<HTMLMetaElement>
      shouldHaveContent(): Chainable<Subject>
    }
  }
}
