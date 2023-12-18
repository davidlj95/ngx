// Recommended way to spy on console
// https://docs.cypress.io/faq/questions/using-cypress-faq#How-do-I-spy-on-consolelog
// https://docs.cypress.io/examples/recipes#Stubbing-and-spying
// https://github.com/cypress-io/cypress-example-recipes/blob/decceecf8ff3a60e2b2f2dfa2461b4c3672949ff/examples/stubbing-spying__window/cypress/e2e/spy-before-load.cy.js
export function spyOnConsole(window: Cypress.AUTWindow) {
  cy.spy(window.console as Console, 'log').as('console.log')
  cy.spy(window.console as Console, 'warn').as('console.warn')
  cy.spy(window.console as Console, 'info').as('console.info')
  cy.spy(window.console as Console, 'error').as('console.error')
}

const NGX_META_LOG_MSG_MATCHER = 'NgxMeta'

export function testNoConsoleLogsAreEmitted() {
  it('should not emit any console logs', () => {
    // noinspection CYUnresolvedAlias
    cy.get('@console.log').should(
      'not.have.been.calledWithMatch',
      NGX_META_LOG_MSG_MATCHER,
    )
    // noinspection CYUnresolvedAlias
    cy.get('@console.warn').should(
      'not.have.been.calledWithMatch',
      NGX_META_LOG_MSG_MATCHER,
    )
    // noinspection CYUnresolvedAlias
    cy.get('@console.info').should(
      'not.have.been.calledWithMatch',
      NGX_META_LOG_MSG_MATCHER,
    )
    // noinspection CYUnresolvedAlias
    cy.get('@console.error').should(
      'not.have.been.calledWithMatch',
      NGX_META_LOG_MSG_MATCHER,
    )
  })
}
