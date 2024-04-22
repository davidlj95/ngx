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

import { ROUTES } from '../fixtures/routes'
import { JSON_LD_MIME } from './json-ld'
import { RouteMatcher } from 'cypress/types/net-stubbing'

Cypress.Commands.add<'getMeta'>('getMeta', (name) => {
  cy.get(`meta[name="${name}"]`)
})

Cypress.Commands.add<'getMetaWithProperty'>(
  'getMetaWithProperty',
  (property) => {
    cy.get(`meta[property="${property}"]`)
  },
)

Cypress.Commands.add<'shouldHaveContent', Cypress.Chainable<HTMLMetaElement>>(
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

const HTML_SCRIPTS_BUT_JSON_LD = new RegExp(
  `<script(?!\\s*type="${JSON_LD_MIME.replace('+', '\\+')}")[^<]*</script>`,
  'gi',
)
/**
 * Intercepts URL(s) and modifies the response to remove `<script>` tags in it.
 * This way we simulate no JavaScript being rendered on the client
 *
 * Take into account just requests made by Cypress can be intercepted
 * (i.e.: click in a link generates a request in the browser that won't be
 * intercepted)
 *
 * To ensure scripts were removed properly, use {@link Cypress.Chainable.shouldNotContainAppScripts}
 *
 * Does not remove JSON-LD metadata scripts
 *
 * @see Inspired from {@link https://blog.simonireilly.com/posts/server-side-rendering-tests-in-cypress/}
 */
Cypress.Commands.add<'simulateSSRForRequest'>(
  'simulateSSRForRequest',
  (url) => {
    cy.intercept(url, (req) => {
      req.continue((res) => {
        res.body = res.body.replace(HTML_SCRIPTS_BUT_JSON_LD, '')
        res.send()
      })
    })
  },
)
Cypress.Commands.add<'shouldNotContainAppScripts'>(
  'shouldNotContainAppScripts',
  () => {
    cy.get(`script`)
      .not(`[type="${JSON_LD_MIME}"]`)
      // 👇 Cypress injects always 1 <script> in page
      .filter((_, element) => !element.innerHTML.includes('window.Cypress='))
      .should('not.exist')
  },
)

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
      simulateSSRForRequest(url: RouteMatcher): Chainable<void>
      shouldNotContainAppScripts(): Chainable<void>
    }
  }
}
