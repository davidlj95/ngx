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
pnpm run analyze-main-bundle <appName>
```

Where `appName` is the directory name of one of the `e2e` apps. You should see an HTML report opened containing the main bundle size analysis of that app. You'll there find how much size the library takes.
