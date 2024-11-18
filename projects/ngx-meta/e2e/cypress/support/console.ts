type ConsoleMethod = keyof Console
const CONSOLE_INFO_OR_BELOW_METHODS = [
  'debug',
  'log',
  'info',
] satisfies readonly ConsoleMethod[]
const CONSOLE_WARN_OR_ABOVE_METHODS = [
  'warn',
  'error',
] satisfies readonly ConsoleMethod[]
const CONSOLE_METHODS_TO_SPY = [
  ...CONSOLE_INFO_OR_BELOW_METHODS,
  ...CONSOLE_WARN_OR_ABOVE_METHODS,
] satisfies readonly ConsoleMethod[]
const consoleAliasFor = (method: ConsoleMethod) => `console.${method}`
const consoleAliasAccessorFor = (method: ConsoleMethod) =>
  `@${consoleAliasFor(method)}`

export function spyOnConsole(autWindow: Cypress.AUTWindow) {
  for (const consoleMethod of CONSOLE_METHODS_TO_SPY) {
    // Recommended way to spy on console
    // https://docs.cypress.io/faq/questions/using-cypress-faq#How-do-I-spy-on-consolelog
    // https://docs.cypress.io/examples/recipes#Stubbing-and-spying
    // https://github.com/cypress-io/cypress-example-recipes/blob/decceecf8ff3a60e2b2f2dfa2461b4c3672949ff/examples/stubbing-spying__window/cypress/e2e/spy-before-load.cy.js
    cy.spy(autWindow.console as Console, consoleMethod).as(
      consoleAliasFor(consoleMethod),
    )
  }
}

const NGX_META_LOG_MSG_MATCHER = 'NgxMeta'

export const shouldNotEmitUnwantedConsoleLogs = () =>
  describe('should not emit unwanted console logs', () => {
    it('like library related logs with info level or below', () => {
      for (const consoleMethod of CONSOLE_INFO_OR_BELOW_METHODS) {
        cy.get(consoleAliasAccessorFor(consoleMethod)).should(
          'not.have.been.calledWithMatch',
          NGX_META_LOG_MSG_MATCHER,
        )
      }
    })
    it('like any logs with warning level or above', () => {
      for (const consoleMethod of CONSOLE_WARN_OR_ABOVE_METHODS) {
        cy.get(consoleAliasAccessorFor(consoleMethod)).should(
          'not.have.been.called',
        )
      }
    })
  })
