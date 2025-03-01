import { ROUTES } from '../fixtures/routes'
import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'
import {
  shouldNotEmitUnwantedConsoleLogs,
  spyOnConsole,
} from '../support/console'
import { standardTitleShouldEqual } from '../support/metadata/standard'
import { openGraphTitleShouldEqual } from '../support/metadata/open-graph'
import ALL_METADATA_JSON from '../fixtures/all-metadata.json'
import TITLE_FORMAT_JSON from '../fixtures/title-format.json'
import { twitterCardTitleShouldEqual } from '../support/metadata/twitter-card'

describe('Title formatter', () => {
  testWithSsrAndCsr(
    {
      url: ROUTES.titleFormatter.path,
      onBeforeLoad: spyOnConsole,
    },
    {
      ssrAndCsr: () => {
        shouldNotEmitUnwantedConsoleLogs()
        it('should format all titles using the title formatter', () => {
          const title = `${ALL_METADATA_JSON.title}${TITLE_FORMAT_JSON.separator}${TITLE_FORMAT_JSON.suffix}`
          standardTitleShouldEqual(title)
          openGraphTitleShouldEqual(title)
          twitterCardTitleShouldEqual(title)
        })
      },
    },
  )
})
