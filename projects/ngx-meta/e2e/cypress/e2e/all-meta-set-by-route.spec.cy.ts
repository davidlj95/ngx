import { ROUTES } from '../fixtures/routes'
import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'
import {
  spyOnConsole,
  testNoLibLogsAndNoWarnsOrErrors,
} from '../support/console'
import {
  shouldContainAllMetadata,
  shouldNotContainAnyMetadata,
} from '../support/metadata/all'

describe('All meta set by route', () => {
  testWithSsrAndCsr(
    {
      url: ROUTES.allMetaSetByRoute.path,
      onBeforeLoad: spyOnConsole,
    },
    {
      ssrAndCsr: () => {
        testNoLibLogsAndNoWarnsOrErrors()
        shouldContainAllMetadata()
      },
      csrOnly: () => {
        describe('when going to another route', () => {
          beforeEach(() => {
            cy.goToRootPage()
          })
          testNoLibLogsAndNoWarnsOrErrors()
          shouldNotContainAnyMetadata()
        })
      },
    },
  )
})
