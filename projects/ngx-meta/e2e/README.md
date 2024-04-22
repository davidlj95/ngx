# `@davidlj95/ngx-meta` E2E testing infra

Infra in this directory allows to test main library features using [example apps infra]. [Cypress] is used to ensure the metadata elements are inserted into / removed from the page as expected.

[Cypress]: https://www.cypress.io/
[example apps infra]: ../example-apps/README.md

## Example app

First, create the example app and serve the app with SSR in order to pass the SSR tests too.
Checkout [example apps infra] for more information about example apps and how to operate them.

## Tasks

### Setup

Install dependencies (mainly [Cypress])

```sh
pnpm install
```

### Run tests

First, run an example app. Ensure it serves contents in port 4200.

Then, open Cypress by running inside this directory:

```sh
pnpm run cypress:open
```

Choose E2E testing. Then, choose a browser (Chrome is used in CI/CD). Use Cypress' UI to run tests.

## Tips

### WebStorm run configurations

There are many run configurations `ngx-meta/e2e:` in WebStorm to help you run E2E tests and see results right in the IDE

Remember to serve an example app first.

## Quirks

### SSR compatibility testing

There is no way in Cypress right now to test a feature is compatible with server side rendering (SSR). When visiting a page, the browser loads the scripts. So we're not sure if what is on the page comes from server side rendering (SSR) or client side rendering (CSR). So, to simulate SSR and ensure the library is compatible with SSR with Cypress, `<script>`s are manually removed to simulate SSR. That's what peeps in the Internet are doing and seems the only way for now. Does the trick, so going for it.

Other options considered:

- **Use plain HTTP requests instead of Cypress**. Faster and less overhead than a Cypress setup. However, we wouldn't be able to test CSR scenarios though. Like that metadata gets cleared when switching routes by navigating to a different page.

Links:

- [Testing server side rendered (SSR) React with Cypress](https://blog.simonireilly.com/posts/server-side-rendering-tests-in-cypress/)
- [End-to-end Testing for Server-Side Rendered Pages](https://glebbahmutov.com/blog/ssr-e2e/)
- [Cypress and SSR (Server Side Rendering) on Cypress' GitHub Discussions](https://github.com/cypress-io/cypress/discussions/26595)
