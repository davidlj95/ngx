# `@davidlj95/ngx-meta`

[![Angular](https://img.shields.io/badge/Works_with-Angular-red?logo=angular&logoColor=white&link=https%3A%2F%2Fangular.dev%2F)](https://angular.dev/)
[![Compatible with Angular SSR/Universal](https://custom-icon-badges.demolab.com/badge/Compatible_with-Angular_SSR%2FUniversal-blue.svg?logo=angular-universal&link=https%3A%2F%2Fangular.dev%2Fguide%2Fssr)](https://angular.dev/guide/ssr)
[![NPM Version](https://img.shields.io/npm/v/%40davidlj95%2Fngx-meta?logo=npm&label=Latest%20version&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40davidlj95%2Fngx-meta)](https://www.npmjs.com/package/@davidlj95/ngx-meta)
[![NPM Downloads](https://img.shields.io/npm/dt/%40davidlj95%2Fngx-meta?logo=npm&label=NPM%20downloads&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40davidlj95%2Fngx-meta)](https://www.npmjs.com/package/@davidlj95/ngx-meta)
[![NPM License](https://img.shields.io/npm/l/%40davidlj95%2Fngx-meta?logo=npm&label=License&link=https%3A%2F%2Fgithub.com%2Fdavidlj95%2Fngx%2Fblob%2Fmain%2Fprojects%2Fngx-meta%2Fsrc%2FLICENSE)](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/src/LICENSE)
[![Main CI/CD workflow](https://github.com/davidlj95/ngx/actions/workflows/main.yml/badge.svg)](https://github.com/davidlj95/ngx/actions/workflows/main.yml)
[![GitHub last commit (branch)](https://img.shields.io/github/last-commit/davidlj95/ngx/main?logo=github&label=Last%20commit&link=https%3A%2F%2Fgithub.com%2Fdavidlj95%2Fngx%2Fcommits%2Fmain%2F)](https://github.com/davidlj95/ngx/commits/main/)
[![Unit tests with Jasmine](https://img.shields.io/badge/Unit_tests_with-Jasmine-8A4182?logo=Jasmine&logoColor=white&link=https%3A%2F%2Fjasmine.github.io)](https://jasmine.github.io)
[![Unit tests with Karma](https://custom-icon-badges.demolab.com/badge/Unit_tests_with-Karma-42beae.svg?logo=karma-runner&link=https%3A%2F%2Fkarma-runner.github.io)](https://karma-runner.github.io)
[![Tested with Cypress](https://img.shields.io/badge/E2E_tests_with-Cypress-green?logo=cypress&link=https%3A%2F%2Fwww.cypress.io)](https://www.cypress.io)
[![Coded in Typescript](https://img.shields.io/badge/Coded_in-TypeScript-007ACC?logo=typescript&logoColor=white&link=https%3A%2F%2Fwww.typescriptlang.org)](https://www.typescriptlang.org)
[![Linted with ESLint](https://img.shields.io/badge/Linted_with-eslint-3A33D1?logo=eslint&logoColor=white&link=https%3A%2F%2Feslint.org)](https://eslint.org)
[![Formatted with Prettier](https://img.shields.io/badge/Formatted_with-prettier-1A2C34?logo=prettier&logoColor=F7BA3E&link=https%3A%2F%2Fprettier.io)](https://prettier.io)
[![Commits follow Conventional Commits convention](https://img.shields.io/badge/Commits_convention-Conventional_Commits-%23FE5196?logo=conventionalcommits&logoColor=white&link=https%3A%2F%2Fconventionalcommits.org)](https://conventionalcommits.org)
[![Commit hooks with Husky](https://img.shields.io/badge/Commit_hooks_with-Husky%F0%9F%90%B6-1a1a1e?link=https%3A%2F%2Ftypicode.github.io%2Fhusky%2F)](https://typicode.github.io/husky/)
[![Released with Semantic Release](https://img.shields.io/badge/Released_with-Semantic_Release-e10079?logo=semantic-release&link=https%3A%2F%2Fgithub.com%2Fsemantic-release%2Fsemantic-release)](https://github.com/semantic-release/semantic-release)
[![Dependencies updated with Renovate](https://img.shields.io/badge/Dependencies_updated_with-Renovate-1a1f6c?logo=renovatebot&link=https%3A%2F%2Frenovatebot.com)](https://renovatebot.com)
[![Package manager: pnpm](https://img.shields.io/badge/Package_manager-pnpm-f69220?logo=pnpm&link=https%3A%2F%2Fpnpm.io%2F)](https://pnpm.io/)

Set your Angular site's metadata: [`<title>`][title-element], [`<meta>`s][meta-element], [Open Graph][og], [Twitter cards][twitter-cards], JSON LD [structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) and/or your custom ones. Use our service or specify it in each route's data. Compatible with Angular Server Side Rendering (SSR) / Angular Universal. Sounds good? Keep reading & set it up in a flash 🚀

[title-element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
[meta-element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
[og]: https://ogp.me/
[twitter-cards]: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
[structured-data]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

> [!IMPORTANT]
> Current version is still an alpha, so APIs may change at any time
> When it's finally stable, 1.0.0 version will be published

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-meta` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-meta`.

> Note: Don't forget to add `--project ngx-meta` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build ngx-meta` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-meta`, go to the dist folder `cd ../dist/ngx-meta` and run `npm publish`.

## Running unit tests

Run `ng test ngx-meta` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
