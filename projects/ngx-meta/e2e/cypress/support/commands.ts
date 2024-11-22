/// <reference types="cypress" />
import { ROUTES } from '../fixtures/routes'
import { JSON_LD_MIME } from './json-ld'
import { CyHttpMessages } from 'cypress/types/net-stubbing'

Cypress.Commands.add('getMeta', (name) => {
  cy.get(`meta[name="${name}"]`)
})

Cypress.Commands.add('getMetas', (name) => {
  cy.get(`meta[name="${name}"]`)
})

Cypress.Commands.add('getMetaWithProperty', (property) => {
  cy.get(`meta[property="${property}"]`)
})

Cypress.Commands.add(
  'shouldHaveContent',
  { prevSubject: true },
  (prevSubject) => {
    cy.wrap(prevSubject).should('have.attr', 'content')
  },
)

Cypress.Commands.add('goToRootPage', () => {
  const selector = `#${ROUTES.root.linkId}`
  cy.get(selector).click()
  cy.location('pathname').should('eq', ROUTES.root.path)
})

const HTML_SCRIPTS_REGEXP = /<script\b[^>]*>([\s\S]*?)<\/script>/gi
const JSON_LD_SCRIPT_REGEXP = new RegExp(
  `<script\\s+type="${JSON_LD_MIME.replace('+', '\\+')}">(.*?)</script>`,
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
 * Inspired from {@link https://blog.simonireilly.com/posts/server-side-rendering-tests-in-cypress/}
 */
Cypress.Commands.add('simulateSSRForRequest', (url) => {
  cy.intercept(url, (req) => {
    req.continue((res: CyHttpMessages.IncomingHttpResponse<string>) => {
      const scripts = res.body.matchAll(HTML_SCRIPTS_REGEXP)
      for (const matchesArray of scripts) {
        const [script] = matchesArray
        if (!script.match(JSON_LD_SCRIPT_REGEXP)) {
          res.body = res.body.replace(script, '')
        }
      }
      res.send()
    })
  })
})
Cypress.Commands.add('shouldNotContainAppScripts', () => {
  cy.get(`script`)
    .not(`[type="${JSON_LD_MIME}"]`)
    // 👇 Cypress injects always 1 <script> in page
    .filter((_, element) => !element.innerHTML.includes('window.Cypress='))
    .should('not.exist')
})
