import { RouteMatcher } from 'cypress/types/net-stubbing'

declare global {
  module Cypress {
    interface Chainable {
      goToRootPage(): Chainable<void>
      getMeta(name: string): Chainable<HTMLMetaElement>
      getMetas(name: string): Chainable<JQuery<HTMLMetaElement>>
      getMetaWithProperty(property: string): Chainable<HTMLMetaElement>
      shouldHaveContent(): Chainable<string | null>
      simulateSSRForRequest(url: RouteMatcher): Chainable<void>
      shouldNotContainAppScripts(): Chainable<void>
    }
  }
}
