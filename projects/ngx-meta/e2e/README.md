# `@davidlj95/ngx-meta` E2E tests

Infra in this directory allows to test main library features using [example apps](../examples). [Cypress] is used to ensure the metadata elements are inserted into / removed from the page as expected.

[Cypress]: https://www.cypress.io/

## Example app

First, create the example app to test using [examples infra](../examples).

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
