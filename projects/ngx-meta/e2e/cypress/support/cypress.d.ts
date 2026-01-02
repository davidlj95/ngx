import { RouteMatcher } from 'cypress/types/net-stubbing'

declare global {
  namespace Cypress {
    //👇 Oh yeah, of course it is used around (the `Chainable` class)
    // noinspection JSUnusedGlobalSymbols
    interface Chainable {
      goToRootPage(): Chainable<void>
      getMeta(name: string): Chainable<HTMLMetaElement>
      getMetas(name: string): Chainable<JQuery<HTMLMetaElement>>
      getMetaWithProperty(property: string): Chainable<HTMLMetaElement>
      shouldHaveContent(): Chainable<string | undefined>
      simulateSSRForRequest(url: RouteMatcher): Chainable<void>
      shouldNotContainAppScripts(): Chainable<void>
    }
  }
}
