import { testWithSsrAndCsr } from '../support/test-with-ssr-and-csr'
import { ROUTES } from '../fixtures/routes'
import {
  shouldNotEmitUnwantedConsoleLogs,
  spyOnConsole,
} from '../support/console'
import CUSTOM_METADATA_JSON from '../fixtures/custom-metadata.json'

describe('Meta late loaded + custom', () => {
  testWithSsrAndCsr(
    {
      url: ROUTES.metaLateLoaded.path,
      onBeforeLoad: spyOnConsole,
    },
    {
      ssrAndCsr: () => {
        shouldNotEmitUnwantedConsoleLogs()
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

          shouldNotEmitUnwantedConsoleLogs()
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
