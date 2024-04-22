export function testWithSsrAndCsr(
  options: Partial<Cypress.VisitOptions> & Pick<Cypress.VisitOptions, 'url'>,
  tests: {
    ssrAndCsr?: () => void
    ssrOnly?: () => void
    csrOnly?: () => void
  },
) {
  describe('when using SSR only (by manually removing CSR scripts)', () => {
    beforeEach(() => {
      cy.simulateSSRForRequest(options.url)
      cy.visit(options)
      cy.shouldNotContainAppScripts()
    })

    if (tests.ssrAndCsr) {
      tests.ssrAndCsr()
    }
    if (tests.ssrOnly) {
      tests.ssrOnly()
    }
  })

  describe('when using CSR', () => {
    beforeEach(() => {
      cy.visit(options)
    })

    if (tests.ssrAndCsr) {
      tests.ssrAndCsr()
    }
    if (tests.csrOnly) {
      tests.csrOnly()
    }
  })
}
