import { ROUTES } from '../fixtures/routes'
import {
  spyOnConsole,
  testNoLibLogsAndNoWarnsOrErrors,
} from '../support/test-no-lib-logs-and-no-warns-or-errors'
import DEFAULTS_JSON from '../fixtures/defaults.json'
import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'

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
