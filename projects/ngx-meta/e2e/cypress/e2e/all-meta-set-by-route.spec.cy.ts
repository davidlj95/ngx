import { ROUTES } from '../fixtures/routes'
import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'
import {
  shouldNotEmitUnwantedConsoleLogs,
  spyOnConsole,
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
        shouldNotEmitUnwantedConsoleLogs()
        shouldContainAllMetadata()
      },
      csrOnly: () => {
        describe('when going to another route', () => {
          beforeEach(() => {
            cy.goToRootPage()
          })
          shouldNotEmitUnwantedConsoleLogs()
          shouldNotContainAnyMetadata()
        })
      },
    },
  )
})
