# `@davidlj95/ngx-meta` E2E tests

Within this directory, there are several sample Angular applications containing main use cases of `@davidlj95/ngx-meta` library. [Cypress] is used to ensure the metadata elements are inserted into / removed from the page as expected.

[Cypress]: https://www.cypress.io/

## Example apps

They're located inside the directories prefixed by `a`, followed by the major version number.

- [Angular v15](./a15)
- [Angular v16](./a16)
- [Angular v17](./a17)

## Tasks

### Sample apps

#### Setup

First, build the library (see [main `README.md`](../../../README.md) for more information). Apps fetch the library from the build directory, so you can change code and test it in the sample app as quickly as possible.

Install dependencies of the sample app. Go to the app's directory and run

```sh
pnpm install
```

> [!NOTE]
> You just need to install once. Or if dependencies are updated. There's no need to install again when changing the library's code. Just build the library and that's it.

> [!TIP]
> If you change library's code and the app does not show changes, try clearing up the apps' build cache. Go to the app directory and run
>
> ```sh
> ng cache clean
> ```

#### Serve

To serve the app, run

```sh
pnpm start
```

#### Build

To build it, use

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

Use the `ngx-meta/e2e/a*: build & serve` run configurations to build the library, clean the app cache and serve it.

#### E2E tests

Use the `ngx-meta/e2e:` run configurations to run E2E tests without having to open the Cypress UI. Tests will appear integrated inside WebStorm. Remember to serve a sample app first.

## Quirks

### Typescript errors

Do restart the Typescript language service when updating library's code if the sample app reports errors. Sometimes it gets lost as doesn't detect that library code changed.

In WebStorm, you can [search for an action](https://www.jetbrains.com/help/webstorm/searching-everywhere.html#ws_search_actions) named `Restart Typescript service`

In Visual Studio Code, with a Typescript file opened, [open the command palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) and look for `Typescript: Restart TS Server`
