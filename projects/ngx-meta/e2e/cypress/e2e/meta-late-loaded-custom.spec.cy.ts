import { ROUTES } from '../fixtures/routes'
import {
  spyOnConsole,
  testNoLibLogsAndNoWarnsOrErrors,
} from '../support/test-no-lib-logs-and-no-warns-or-errors'
import CUSTOM_METADATA_JSON from '../fixtures/custom-metadata.json'
import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'

describe('Meta late loaded + custom', () => {
  testWithSsrAndCsr(
    {
      url: ROUTES.metaLateLoaded.path,
      onBeforeLoad: spyOnConsole,
    },
    {
      ssrAndCsr: () => {
        testNoLibLogsAndNoWarnsOrErrors()
        it('should set late loaded + custom metadata', () => {
          cy.fixture('custom-metadata.json').then(
            (customMetadata: typeof CUSTOM_METADATA_JSON) => {
              cy.getMeta(customMetadata.custom.keyName)
                .shouldHaveContent()
                .and('eq', customMetadata.custom.title)
            },
          )
        })
      },
      csrOnly: () => {
        describe('when going to another route', () => {
          beforeEach(() => {
            cy.goToRootPage()
          })

          testNoLibLogsAndNoWarnsOrErrors()
          it('should unset late loaded + custom metadata', () => {
            cy.fixture('custom-metadata.json').then(
              (metadata: typeof CUSTOM_METADATA_JSON) => {
                cy.getMeta(metadata.custom.keyName).should('not.exist')
              },
            )
          })
        })
      },
    },
  )
})
