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

#### With coverage

[Cypress can be configured to perform code coverage reporting](https://docs.cypress.io/guides/tooling/code-coverage#What-youll-learn). Essentially two steps are needed: instrument the JS code to track lines being hit and later report the results.

Run the `ngx-meta:instrument-for-coverage` script in root repo to instrument the `ngx-meta` library for coverage reporting before running Cypress tests. Now, create an example app and serve it (as usual to run E2E tests). Cypress is configured via the [`@cypress/code-coverage` plugin](https://github.com/cypress-io/code-coverage) to report results. A report will be generated in JSON, `lcov` and HTML formats.

Take look into [`package.json`](package.json)'s `postcypress:run` script for the name of the JSON report generated inside the report directory.

See more details on coverage in [contributing guide](../../../CONTRIBUTING.md#coverage)

### Run tests

First, run an example app. Ensure it serves contents in port 4200.

You can then run inside this directory:

```sh
pnpm run cypress:run
```

Or if you want to use Cypress UI, open Cypress by running

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

### `tslib` error

When adding code coverage to E2E tests via the `@cypress/code-coverage` import in `cypress.config.ts`, a ~wild~ error appeared in CI logs (worked fine locally):

```text
Error: Cannot find module 'tslib'
```

So added `tslib` to make Cypress happy and it worked 🤷 Was not needed until that point

<details>
<summary>Stack trace</summary>
<pre>
Opening Cypress...

DevTools listening on ws://127.0.0.1:35039/devtools/browser/614fb154-3ca4-4c24-aa4f-87508a1617d2
Missing baseUrl in compilerOptions. tsconfig-paths will be skipped
Your configFile is invalid: /home/runner/work/ngx/ngx/projects/ngx-meta/e2e/cypress.config.ts

It threw an error when required, check the stack trace below:

Error: Cannot find module 'tslib'
Require stack:

- /home/runner/work/ngx/ngx/projects/ngx-meta/e2e/cypress.config.ts
- /home/runner/.cache/Cypress/13.13.0/Cypress/resources/app/node_modules/@packages/server/lib/plugins/child/run_require_async_child.js
- /home/runner/.cache/Cypress/13.13.0/Cypress/resources/app/node_modules/@packages/server/lib/plugins/child/require_async_child.js
at Function.Module.\_resolveFilename (node:internal/modules/cjs/loader:1145:15)
at Function.Module.\_resolveFilename.sharedData.moduleResolveFilenameHook.installedValue [as _resolveFilename] (/home/runner/.cache/Cypress/13.13.0/Cypress/resources/app/node_modules/@cspotcode/source-map-support/source-map-support.js:811:30)
at Function.Module.\_load (node:internal/modules/cjs/loader:986:27)
at Module.require (node:internal/modules/cjs/loader:1233:19)
at require (node:internal/modules/helpers:179:18)
at Object.<anonymous> (/home/runner/work/ngx/ngx/projects/ngx-meta/e2e/cypress.config.ts:3:17)
at Module.\_compile (node:internal/modules/cjs/loader:1358:14)
at Module.m.\_compile (/home/runner/.cache/Cypress/13.13.0/Cypress/resources/app/node_modules/ts-node/dist/index.js:857:29)
at Module.\_extensions..js (node:internal/modules/cjs/loader:1416:10)
at Object.require.extensions.<computed> [as .ts] (/home/runner/.cache/Cypress/13.13.0/Cypress/resources/app/node_modules/ts-node/dist/index.js:859:16)
at Module.load (node:internal/modules/cjs/loader:1208:32)
at Function.Module.\_load (node:internal/modules/cjs/loader:1024:12)
at Module.require (node:internal/modules/cjs/loader:1233:19)
at require (node:internal/modules/helpers:179:18)
at loadFile (/home/runner/.cache/Cypress/13.13.0/Cypress/resources/app/node_modules/@packages/server/lib/plugins/child/run_require_async_child.js:89:14)
at EventEmitter.<anonymous> (/home/runner/.cache/Cypress/13.13.0/Cypress/resources/app/node_modules/@packages/server/lib/plugins/child/run_require_async_child.js:116:38)
Test run failed, code 1
More information might be available above
Cypress module has returned the following error message:
Could not find Cypress test run results
Error: Could not find Cypress test run results
</pre>
</details>
