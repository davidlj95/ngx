import { ROUTES } from '../fixtures/routes'
import {
  spyOnConsole,
  testNoLibLogsAndNoWarnsOrErrors,
} from '../support/test-no-lib-logs-and-no-warns-or-errors'
import ONE_METADATA_JSON from '../fixtures/one-metadata.json'
import { openGraphTitleShouldEqual } from '../support/test-sets-all-open-graph-metadata'
import {
  standardDescriptionShouldEqual,
  standardTitleShouldEqual,
} from '../support/test-sets-all-standard-metadata'
import { twitterCardTitleShouldEqual } from '../support/test-sets-all-twitter-card-metadata'
import { openGraphDescriptionShouldNotExist } from '../support/test-unsets-all-open-graph-metadata'
import { twitterCardDescriptionShouldNotExist } from '../support/test-unsets-all-twitter-card-metadata'
import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'

describe('One meta set by service', () => {
  testWithSsrAndCsr(
    {
      url: ROUTES.oneMetaSetByService.path,
      onBeforeLoad: spyOnConsole,
    },
    {
      ssrAndCsr: () => {
        testNoLibLogsAndNoWarnsOrErrors()

        it('should set all title metadata elements', () => {
          cy.fixture('one-metadata.json').then(
            (metadata: typeof ONE_METADATA_JSON) => {
              const expectedTitle = metadata.global.value
              standardTitleShouldEqual(expectedTitle)
              openGraphTitleShouldEqual(expectedTitle)
              twitterCardTitleShouldEqual(expectedTitle)
            },
          )
        })

        it('should set specific description standard element', () => {
          cy.fixture('one-metadata.json').then(
            (metadata: typeof ONE_METADATA_JSON) => {
              const expectedDescription = metadata.jsonPath.value
              standardDescriptionShouldEqual(expectedDescription)
              openGraphDescriptionShouldNotExist()
              twitterCardDescriptionShouldNotExist()
            },
          )
        })
      },
    },
  )
})
