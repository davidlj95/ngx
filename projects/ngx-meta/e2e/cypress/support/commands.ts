/// <reference types="cypress" />
import { ROUTES } from '../fixtures/routes'
import { JSON_LD_MIME } from './json-ld'
import { CyHttpMessages } from 'cypress/types/net-stubbing'

Cypress.Commands.add('getMeta', (name) =>
  cy.get<HTMLMetaElement>(`meta[name="${name}"]`),
)

Cypress.Commands.add('getMetas', (name) =>
  cy.get<HTMLMetaElement>(`meta[name="${name}"]`),
)

Cypress.Commands.add('getMetaWithProperty', (property) =>
  cy.get<HTMLMetaElement>(`meta[property="${property}"]`),
)

//👇 Callback must be a `function` and not an arrow function for timeouts
//   https://github.com/cypress-io/cypress-documentation/blob/9c4c60988fa66b15202ce1190542f3a446f8e7d4/docs/api/cypress-api/custom-queries.mdx#arguments
const SHOULD_HAVE_CONTENT_CMD: keyof Cypress.Chainable = 'shouldHaveContent'
Cypress.Commands.addQuery(SHOULD_HAVE_CONTENT_CMD, function () {
  return (subject: JQuery<HTMLMetaElement>): string => {
    Cypress.ensure.isElement(subject, SHOULD_HAVE_CONTENT_CMD, cy)
    const content = subject.attr('content')
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(content).not.to.be.undefined
    return content!
  }
})

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
 * (i.e.: click on a link generates a request in the browser that won't be
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
    // 👇 Cypress injects always 1 <script> in the page
    .filter((_, element) => !element.innerHTML.includes('window.Cypress='))
    .should('not.exist')
})
