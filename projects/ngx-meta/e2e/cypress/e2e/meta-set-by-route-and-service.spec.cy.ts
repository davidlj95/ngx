import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'
import { ROUTES } from '../fixtures/routes'
import {
  shouldNotEmitUnwantedConsoleLogs,
  spyOnConsole,
} from '../support/console'
import { shouldContainAllStandardMetadata } from '../support/metadata/standard'
import { shouldContainAllOpenGraphMetadata } from '../support/metadata/open-graph'
import ROUTE_SERVICE_OVERRIDES_JSON from '../fixtures/route-service-overrides.json'
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
        shouldNotEmitUnwantedConsoleLogs()
        shouldContainAllStandardMetadata()
        shouldContainAllOpenGraphMetadata(
          ROUTE_SERVICE_OVERRIDES_JSON.openGraph,
        )
        shouldContainAllOpenGraphProfileMetadata(
          ROUTE_SERVICE_OVERRIDES_JSON.openGraph.profile,
        )
        shouldContainAllTwitterCardMetadata(
          ROUTE_SERVICE_OVERRIDES_JSON.twitterCard,
        )
        shouldContainJsonLdMetadata()
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
