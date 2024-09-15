import { ROUTES } from '../fixtures/routes'
import {
  shouldNotEmitUnwantedConsoleLogs,
  spyOnConsole,
} from '../support/console'
import { standardCanonicalUrlShouldEqual } from '../support/metadata/standard'
import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'
import { openGraphUrlShouldEqual } from '../support/metadata/open-graph'
import { BASE_URL } from '../fixtures/base-url'

describe('URL resolution meta', () => {
  const expectedCanonicalUrl = `${BASE_URL}/${ROUTES.urlResolutionMeta.path}`

  testWithSsrAndCsr(
    {
      url: ROUTES.urlResolutionMeta.path,
      onBeforeLoad: spyOnConsole,
    },
    {
      ssrAndCsr: () => {
        shouldNotEmitUnwantedConsoleLogs()

        it('should resolve Angular router URL to absolute URL using base URL', () => {
          standardCanonicalUrlShouldEqual(expectedCanonicalUrl)
          openGraphUrlShouldEqual(expectedCanonicalUrl)
        })
      },
    },
  )
})
