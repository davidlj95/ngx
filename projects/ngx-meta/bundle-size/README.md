# `@davidlj95/ngx-meta` bundle size analysis

Within this directory, there's the tooling to analyze the library size when embedded inside an Angular app.

Angular apps are created by the `e2e` infra. See [`e2e` infra README for more information][e2e-README]

[e2e-README]: ../e2e/README.md

## Setup

Install deps first with

```shell
pnpm install
```

## CI/CD

The reusable bundle size workflow analyses how much size does the library take when bundled inside an Angular app.

The pull request completed workflow reports the size for each of the existing apps in a comment in the PR.

## Tasks

### Analyze main bundle

First, build one of the `e2e` sample apps. Checkout [`e2e` infra README][e2e-README] for more information. Remember to build with source maps in order to allow the tool to work

Then, run the following command

```shell
pnpm run a17:analyze-main-bundle
```

Replace `a17` for any other E2E app dir. The report will open in your browser. You'll find there how much bytes the lib size inside that app.

## JSON report

First, build one of the `e2e` sample apps. Checkout [`e2e` infra README][e2e-README] for more information. Remember to build with source maps in order to allow the tool to work

To generate a JSON report containing the `source-map-explorer` analysis of an E2E app, run

```shell
pnpm run a17:sme-json
```

Replace `a17` for any other E2E app dir. The report will be located inside bundle size project's `a17` subdirectory

## Markdown report

To generate a Markdown report containing a bundle size analysis summary of an E2E app, run

```shell
pnpm run a17:report
```

Replace `a17` for any other E2E app dir. The report will be located inside bundle size project's `a17` subdirectory
