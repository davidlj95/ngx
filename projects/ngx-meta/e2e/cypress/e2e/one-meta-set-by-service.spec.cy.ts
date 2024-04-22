import { ROUTES } from '../fixtures/routes'
import {
  spyOnConsole,
  testNoLibLogsAndNoWarnsOrErrors,
} from '../support/console'
import ONE_METADATA_JSON from '../fixtures/one-metadata.json'
import {
  standardDescriptionShouldEqual,
  standardTitleShouldEqual,
} from '../support/metadata/standard'
import {
  twitterCardDescriptionShouldNotExist,
  twitterCardTitleShouldEqual,
} from '../support/metadata/twitter-card'
import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'
import {
  openGraphDescriptionShouldNotExist,
  openGraphTitleShouldEqual,
} from '../support/metadata/open-graph'

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
