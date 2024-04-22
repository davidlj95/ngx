import { ROUTES } from '../fixtures/routes'
import { testSetsAllStandardMetadata } from '../support/test-sets-all-standard-metadata'
import { testSetsAllOpenGraphMetadata } from '../support/test-sets-all-open-graph-metadata'
import { testUnsetsAllStandardMetadata } from '../support/test-unsets-all-standard-metadata'
import { testUnsetsAllOpenGraphMetadata } from '../support/test-unsets-all-open-graph-metadata'
import { testSetsAllOpenGraphProfileMetadata } from '../support/test-sets-all-open-graph-profile-metadata'
import { testUnsetsAllOpenGraphProfileMetadata } from '../support/test-unsets-all-open-graph-profile-metadata'
import { testSetsAllTwitterCardMetadata } from '../support/test-sets-all-twitter-card-metadata'
import { testUnsetsAllTwitterCardMetadata } from '../support/test-unsets-all-twitter-card-metadata'
import { testSetsJsonLd } from '../support/test-sets-json-ld'
import { testUnsetsJsonLd } from '../support/test-unsets-json-ld'
import {
  spyOnConsole,
  testNoLibLogsAndNoWarnsOrErrors,
} from '../support/test-no-lib-logs-and-no-warns-or-errors'
import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'

describe('All meta set by route', () => {
  testWithSsrAndCsr(
    {
      url: ROUTES.allMetaSetByRoute.path,
      onBeforeLoad: spyOnConsole,
    },
    {
      ssrAndCsr: () => {
        testNoLibLogsAndNoWarnsOrErrors()
        testSetsAllStandardMetadata()
        testSetsAllOpenGraphMetadata()
        testSetsAllOpenGraphProfileMetadata()
        testSetsAllTwitterCardMetadata()
        testSetsJsonLd()
      },
      csrOnly: () => {
        describe('when going to another route', () => {
          beforeEach(() => {
            cy.goToRootPage()
          })
          testNoLibLogsAndNoWarnsOrErrors()
          testUnsetsAllStandardMetadata()
          testUnsetsAllOpenGraphMetadata()
          testUnsetsAllOpenGraphProfileMetadata()
          testUnsetsAllTwitterCardMetadata()
          testUnsetsJsonLd()
        })
      },
    },
  )
})
