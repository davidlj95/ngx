import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'
import { ROUTES } from '../fixtures/routes'
import {
  spyOnConsole,
  testNoLibLogsAndNoWarnsOrErrors,
} from '../support/console'
import DEFAULTS_JSON from '../fixtures/defaults.json'

describe('Defaults', () => {
  testWithSsrAndCsr(
    {
      url: ROUTES.root.path,
      onBeforeLoad: spyOnConsole,
    },
    {
      ssrAndCsr: () => {
        it('should set default author', () => {
          cy.fixture('defaults.json').then((defaults: typeof DEFAULTS_JSON) => {
            cy.getMeta('author')
              .shouldHaveContent()
              .and('eq', defaults.standard.author)
          })
        })

        testNoLibLogsAndNoWarnsOrErrors()
      },
    },
  )
})
