import { RouteMatcher } from 'cypress/types/net-stubbing'

declare global {
  namespace Cypress {
    //👇 Oh yeah, of course it is used around (the `Chainable` class)
    // noinspection JSUnusedGlobalSymbols
    interface Chainable {
      goToRootPage(): Chainable<void>
      getMeta(name: string): Chainable<JQuery<HTMLMetaElement>>
      getMetas(name: string): Chainable<JQuery<HTMLMetaElement>>
      getMetaWithProperty(property: string): Chainable<JQuery<HTMLMetaElement>>
      shouldHaveContent(): Chainable<string>
      simulateSSRForRequest(url: RouteMatcher): Chainable<void>
      shouldNotContainAppScripts(): Chainable<void>
    }
  }
}
