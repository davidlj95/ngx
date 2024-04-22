import { ROUTES } from '../fixtures/routes'
import { testSetsAllStandardMetadata } from '../support/test-sets-all-standard-metadata'
import { testSetsAllOpenGraphMetadata } from '../support/test-sets-all-open-graph-metadata'
import { testSetsAllOpenGraphProfileMetadata } from '../support/test-sets-all-open-graph-profile-metadata'
import { testSetsAllTwitterCardMetadata } from '../support/test-sets-all-twitter-card-metadata'
import { testSetsJsonLd } from '../support/test-sets-json-ld'
import {
  spyOnConsole,
  testNoLibLogsAndNoWarnsOrErrors,
} from '../support/test-no-lib-logs-and-no-warns-or-errors'
import { testUnsetsAllStandardMetadata } from '../support/test-unsets-all-standard-metadata'
import { testUnsetsAllOpenGraphMetadata } from '../support/test-unsets-all-open-graph-metadata'
import { testUnsetsAllOpenGraphProfileMetadata } from '../support/test-unsets-all-open-graph-profile-metadata'
import { testUnsetsAllTwitterCardMetadata } from '../support/test-unsets-all-twitter-card-metadata'
import { testUnsetsJsonLd } from '../support/test-unsets-json-ld'
import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'

describe('Meta set by route and service', () => {
  testWithSsrAndCsr(
    {
      url: ROUTES.metaSetByRouteAndService.path,
      onBeforeLoad: spyOnConsole,
    },
    {
      ssrAndCsr: () => {
        testNoLibLogsAndNoWarnsOrErrors()
        testSetsAllStandardMetadata()
        testSetsAllOpenGraphMetadata({ type: 'book' })
        testSetsAllOpenGraphProfileMetadata({ gender: 'female' })
        testSetsAllTwitterCardMetadata({ card: 'summary_large_image' })
        testSetsJsonLd()
      },
      csrOnly: () => {
        describe('when going to another route', () => {
          beforeEach(() => {
            cy.goToRootPage()
          })

          testUnsetsAllStandardMetadata()
          testUnsetsAllOpenGraphMetadata()
          testUnsetsAllOpenGraphProfileMetadata()
          testUnsetsAllTwitterCardMetadata()
          testUnsetsJsonLd()
          testNoLibLogsAndNoWarnsOrErrors()
        })
      },
    },
  )
})
