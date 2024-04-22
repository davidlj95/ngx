import { ROUTES } from '../fixtures/routes'
import { testSetsAllStandardMetadata } from '../support/test-sets-all-standard-metadata'
import { testSetsAllOpenGraphMetadata } from '../support/test-sets-all-open-graph-metadata'
import { testSetsAllOpenGraphProfileMetadata } from '../support/test-sets-all-open-graph-profile-metadata'
import { testSetsAllTwitterCardMetadata } from '../support/test-sets-all-twitter-card-metadata'
import { testSetsJsonLd } from '../support/test-sets-json-ld'

import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'
import {
  spyOnConsole,
  testNoLibLogsAndNoWarnsOrErrors,
} from '../support/test-no-lib-logs-and-no-warns-or-errors'

describe('All meta set by service', () => {
  testWithSsrAndCsr(
    {
      url: ROUTES.allMetaSetByService.path,
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
    },
  )
})
