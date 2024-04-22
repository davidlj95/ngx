import { ROUTES } from '../fixtures/routes'
import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'
import {
  shouldNotEmitUnwantedConsoleLogs,
  spyOnConsole,
} from '../support/console'
import { shouldContainAllMetadata } from '../support/metadata/all'

describe('All meta set by service', () => {
  testWithSsrAndCsr(
    {
      url: ROUTES.allMetaSetByService.path,
      onBeforeLoad: spyOnConsole,
    },
    {
      ssrAndCsr: () => {
        shouldNotEmitUnwantedConsoleLogs()
        shouldContainAllMetadata()
      },
    },
  )
})
