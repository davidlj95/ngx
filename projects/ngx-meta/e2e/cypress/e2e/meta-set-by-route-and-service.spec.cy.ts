import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'
import { ROUTES } from '../fixtures/routes'
import {
  spyOnConsole,
  testNoLibLogsAndNoWarnsOrErrors,
} from '../support/console'
import { shouldContainAllStandardMetadata } from '../support/metadata/standard'
import { shouldContainAllOpenGraphMetadata } from '../support/metadata/open-graph'
import { shouldContainAllOpenGraphProfileMetadata } from '../support/metadata/open-graph-profile'
import { shouldContainAllTwitterCardMetadata } from '../support/metadata/twitter-card'
import { shouldContainJsonLdMetadata } from '../support/metadata/json-ld'
import { shouldNotContainAnyMetadata } from '../support/metadata/all'

describe('Meta set by route and service', () => {
  testWithSsrAndCsr(
    {
      url: ROUTES.metaSetByRouteAndService.path,
      onBeforeLoad: spyOnConsole,
    },
    {
      ssrAndCsr: () => {
        testNoLibLogsAndNoWarnsOrErrors()
        shouldContainAllStandardMetadata()
        shouldContainAllOpenGraphMetadata({
          type: 'book',
        })
        shouldContainAllOpenGraphProfileMetadata({
          gender: 'female',
        })
        shouldContainAllTwitterCardMetadata({
          card: 'summary_large_image',
        })
        shouldContainJsonLdMetadata()
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
