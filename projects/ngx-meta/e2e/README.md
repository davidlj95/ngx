# `@davidlj95/ngx-meta` E2E tests

Within this directory, there are scripts to generate several sample Angular applications containing main use cases of `@davidlj95/ngx-meta` library. [Cypress] is used to ensure the metadata elements are inserted into / removed from the page as expected.

[Cypress]: https://www.cypress.io/

## Sample apps

First, generate them using [E2E infra scripts](./scripts/README.md).

Once generated, they're located inside the `apps` directory. Each app directory is prefixed by `a`, followed by the major version number.

### Library usages

The code using the library that sample apps use can be found in templates directory:

- [Standalone apps](./templates/standalone/src/app)
- [Module-based apps](./templates/module/src/app)

## Tasks

### Sample apps

#### Setup

[E2E scripts](./scripts/README.md) will generate and set up the app for you. Check in [their docs](./scripts/README.md) how to generate sample apps. Once generated...

#### Serve

To serve the app, change to its directory and run

```sh
pnpm start
```

#### Build

To build it, change to its directory and use

```sh
pnpm run build
```

In order to analyze the app's bundle with `source-map-explorer`, run it with

```
pnpm run build --source-map
```

### E2E tests

#### Setup

Install dependencies (mainly [Cypress])

```sh
pnpm install
```

#### Run tests

First, run a sample app. Ensure it serves contents in port 4200.

Then, open Cypress by running inside this directory:

```sh
pnpm run cypress:open
```

Choose E2E testing. Then, choose a browser (Chrome is used in CI/CD). Use Cypress' UI to run tests.

## Tips

### WebStorm run configurations

There are many run configurations in WebStorm to help you operate sample apps and E2E tests

#### Sample apps

Use the `ngx-meta/e2e/a*: build & serve` WebStorm run configurations to build the library, clean the app cache and serve it. Only the latest major version of Angular will be there for maintenance reasons. Feel free to create your own local ones.

#### E2E tests

Use the `ngx-meta/e2e:` run configurations to run E2E tests without having to open the Cypress UI. Tests will appear integrated inside WebStorm. Remember to serve a sample app first.

## Quirks

### Typescript errors

Do restart the Typescript language service when updating library's code if the sample app reports errors. Sometimes it gets lost as doesn't detect that library code changed.

In WebStorm, you can [search for an action](https://www.jetbrains.com/help/webstorm/searching-everywhere.html#ws_search_actions) named `Restart Typescript service`

In Visual Studio Code, with a Typescript file opened, [open the command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) and look for `Typescript: Restart TS Server`
