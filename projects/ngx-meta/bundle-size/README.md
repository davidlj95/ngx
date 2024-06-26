# `@davidlj95/ngx-meta` bundle size analysis infra

Within this directory, there's the tooling to analyze the library size when embedded inside an Angular app.

Angular apps are created by the example apps infra. Checkout [example apps infra for more information][example-apps-infra]

[example-apps-infra]: ../example-apps

## Setup

Install deps first

```shell
pnpm install
```

## CI/CD

The reusable bundle size workflow analyses how much size does the library take when bundled inside an Angular app.

The pull request completed workflow reports the size for each of the existing apps in a comment in the PR.

## Tasks

### Analyze main bundle

First, build one of the example apps. Checkout [example apps infra][example-apps-infra] for more information. Remember to build with source maps in order to allow the tool to work

Then, run the following command

```shell
pnpm run v17:analyze-main-bundle
```

Replace `v17` for any other example app dir. The report will open in your browser. You'll find there how much bytes the lib size inside that app.

## JSON report

First, build one of the example apps. Checkout [example apps infra][example-apps-infra] for more information. Remember to build with source maps in order to allow the tool to work

To generate a JSON report containing the `source-map-explorer` analysis of an example app, run

```shell
pnpm run v17:sme-json
```

Replace `v17` for any other example app dir. The report will be located inside bundle size project's `v17` subdirectory

## Markdown report

To generate a Markdown report containing a bundle size analysis summary of an example app, run

```shell
pnpm run v17:report
```

Replace `v17` for any other example app dir. The report will be located inside bundle size project's `v17` subdirectory
