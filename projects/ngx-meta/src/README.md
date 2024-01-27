![<ngx-meta/> for Angular](../assets/logo.png)

[![Angular](https://img.shields.io/badge/Works_with-Angular-red?logo=angular&logoColor=white&link=https%3A%2F%2Fangular.dev%2F)](https://angular.dev/)
[![Compatible with Angular SSR/Universal](https://custom-icon-badges.demolab.com/badge/Compatible_with-Angular_SSR%2FUniversal-blue.svg?logo=angular-universal&link=https%3A%2F%2Fangular.dev%2Fguide%2Fssr)][angular-ssr]
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

Set your Angular site's metadata: [`<title>`][title-element], [`<meta>`s][meta-element], [Open Graph], [Twitter cards], JSON LD [structured data] and/or your custom ones. Use the service or specify it in each route's data. Compatible with [Angular Server Side Rendering (SSR) / Angular Universal][angular-ssr]. Sounds cool? 😎 Keep reading & set it up in a flash 🚀

[title-element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
[meta-element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
[Open Graph]: https://ogp.me/
[Twitter cards]: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
[structured data]: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
[angular-ssr]: https://angular.dev/guide/ssr

> [!IMPORTANT]
> Current version is still an alpha, so APIs may change at any time
> When it's finally stable, 1.0.0 version will be published

# Features

Why should you use this library and not another? Or set the meta tags yourself?

- **🤝 Compatible with [Angular Server Side Rendering SSR / Angular Universal][angular-ssr]**. Metadata is set using Angular's built-in services to manipulate DOM. So (server/pre) rendered pages will include meta tags.
- **☺️ Straightforward compatibility with [Angular actively supported versions]**. Right now being Angular v15, v16 and v17. Update from an Angular version to another when you're ready. But this library won't be an issue, as latest version will be compatible with all [Angular actively supported versions]. [There are some E2E tests to ensure that indeed][E2E tests]
- **👥 Supports most of widely used metadata**. Like [`<title>`] [title-element], many [standard `<meta>`s][meta-element], [Open Graph], [Twitter cards] and JSON LD [structured data]. But if you want more...
- **🛣️ Integrates with Angular's `Router`**. So you can set the metadata of a route in the [route's `data`][route data] and the library will set those metadata values in the page for you.
- **📜 Types & documentation**. Useful Typescript types are provided so you can discover what metadata can you set and what type of data each metadata accepts. Plus documentation so you can leverage as much as possible of the library's power.
- **🧩 Manage your metadata**. Thanks to the module based architecture, you can manage popular metadata using built-in library modules or provide our own. Indeed, you can decide which metadata is managed (including the library modules) to reduce the already...
- **📦 Small bundle size**. Right now it will take **~6-7KiB if using all features** (after [taking some time optimizing][bundle size reduction]). But if you don't use them all, the whole library is designed to be [tree-shakeable][tree shaking] so that's the maximum size this library will take of your app's bundle. To ensure it doesn't grow over time, there's a bot that comments each PR with a [bundle size PR comment] to ensure bundle size doesn't grow unexpectedly.
- **0️⃣ Zero dependencies**\*. So less pain with dependency management
- **❤️ Crafted & maintained**. Library tries to use Angular & software engineering best practices. Like using Angular's dependency injection (providers in standalone apps or modules otherwise), CI/CD pipelines, linters, formatters, unit & E2E tests... [Renovate] helps keeping dependencies to build. TL;DR: made by an Angular dev for an Angular dev

> \*Well, actually, just one: `tslib`. But it's because [Angular Package Format recommends it](https://angular.dev/tools/libraries/angular-package-format#tslib)

Hope to have convinced you

[Angular actively supported versions]: https://angular.io/guide/releases#actively-supported-versions
[E2E tests]: https://github.com/davidlj95/ngx/blob/main/.github/workflows/reusable-e2e.yml
[route data]: https://angular.dev/api/router/Route#:~:text=Additional%20developer%2Ddefined%20data
[tree shaking]: https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking
[bundle size PR comment]: https://github.com/davidlj95/ngx/pull/243#issuecomment-1912895697
[bundle size reduction]: https://github.com/davidlj95/ngx/issues/112#issuecomment-1901325536
[Renovate]: https://renovatebot.com

## Getting started

Glad you're here 🥰 Let's set it up in 3 steps ⚡️

### 1. Install it

```
ng add @davidlj95/ngx-meta
```

Or just use your package manager's `install` command 🤷

### 2. Add it to your app

#### For non-standalone, module-based Angular apps

> This is the default for apps generated with Angular CLI versions older than v17

Open your `app.module.ts` file and add at least the core module to the `imports` section. If you want to set metadata in each route's `data` using Angular's `Router`, add the routing module too. In order to set some standard `<meta>`s, let's add the standard module.

```typescript
@NgModule({
  // ...
  imports: [
    // ...
    NgxMetaCoreModule.forRoot(),
    NgxMetaRoutingModule.forRoot(),
    NgxMetaStandardModule,
  ],
  // ...
})
export class AppModule {}
```

Check out the [Angular v16 app `app.module.ts` file](../e2e/a16/src/app/app.module.ts) for a working example

#### For standalone, module-free Angular apps

> This is the default for apps generated with Angular CLI version 17 and above

Open your `app.config.ts` file and add at least the core provider to the `providers` section. If you want to set metadata in each route's `data` using Angular's `Router`, add the routing provider too. In order to set some standard `<meta>`s, let's add the standard provider.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    // ...
    provideNgxMetaCore(),
    provideNgxMetaRouting(),
    provideNgxMetaStandard(),
    // ...
  ],
}
```

Check out the [Angular v17 app `app.config.ts` file](../e2e/a17/src/app/app.config.ts) for a working example

### 3. Set some metadata

#### Using the service

Open a component file that is rendering a page / route. Inject the service. And call it to set the metadata. For instance, in `ngOnInit`:

```typescript
import { NgxMetaService, GlobalMetadata } from '@davidlj95/ngx-meta/core'
import { StandardMetadata } from '@davidlj95/ngx-meta/standard'
// ...

@Component({
  // ...
})
export class CoolPageComponent implements OnInit {
  constructor(private readonly ngxMetaService: NgxMetaService) {}

  ngOnInit(): void {
    this.ngxMetaService.set({
      title: 'Cool page',
      description: '⚠️ Contains awesomeness',
    } satisfies GlobalMetadata & StandardMetadata)
  }
}
```

That's it, you should see the `<title>` and `<meta name='description'>` set in that page with the values you provided ✨

The `satisfies` will help you write the proper JSON of metadata values to set. Later it's explained what's that `GlobalMetadata` type

Check out the [Angular v17 app `meta-set-by-service.component.ts` file](../e2e/a17/src/app/meta-set-by-service/meta-set-by-service.component.ts) for a working example

> [!IMPORTANT]
>
> Those elements will stay when the route changes if the routing module / provider hasn't been added (see previous step). If you want those metadata values to get removed when changing route without adding the routing module / provider, you can add a call to the service on the `ngOnDestroy` hook:
>
> ```typescript
> @Component({
>   // ...
> })
> export class CoolPageComponent implements OnInit, OnDestroy {
>   constructor(private readonly ngxMetaService: NgxMetaService) {}
>
>   // ...
>   ngOnDestroy(): void {
>     //👇 Clear metadata when changing page
>     //   If you have enabled the routing module / provider, this is not needed
>     this.ngxMetaService.clear()
>   }
> }
> ```

#### Using the route's `data`

If you added the routing module, you can set the metadata for a page using a [Route's `data`][route data]. For instance:

```typescript
import { NgxMetaRouteData } from '@davidlj95/ngx-meta/routing'
import { GlobalMetadata } from '@davidlj95/ngx-meta/core'
import { StandardMetadata } from '@davidlj95/ngx-meta/standard'

export const routes: Routes = [
  // ...
  {
    path: 'cool-page',
    component: CoolPageComponent,
    data: {
      meta: {
        title: 'Cool page',
        description: '⚠️ Contains awesomeness',
      } satisfies NgxMetaRouteData<GlobalMetadata & StandardMetadata>,
    },
  },
]
```

That's it, you should see the `<title>` and `<meta name='description'>` set in the `cool-page` page with the values you provided ✨

As with the service case, the `satisfies` will help you write the proper JSON of metadata values to set. Later it will be explained what's that `GlobalMetadata` type

Check out the [Angular v17 app `app.routes.ts` file](../e2e/a17/src/app/app.routes.ts) for a working example

### 4. Explore [all metadata you can set](https://www.youtube.com/watch?v=1kzb6uf0U0k)

A forth step? You lied to me 😢 Well you had some metadata in your app at end of step 3 😜

Now, do you wonder what metadata can you set? Typescript types can help you. Following the example, inspect `GlobalMetadata` and `StandardMetadata` types to see all values you can set.

#### Global metadata

`GlobalMetadata` defines metadata values that will be used by several modules. For instance, the `title` will be used by standard module to set the page's `<title>`. But it will also be used by Open Graph module (if added) to set the `<meta property='og:title'>` element.

#### Module metadata

`StandardMetadata` defines metadata values that will be used only by the standard module. That's why it's all under the `standard` key. You can inspect what metadata can be set using that module. And which of those can be set as global ones so they're also shared with other modules. If you specify a module value and a global value, specific will take preference.

For instance if setting those values (either using service or route data):

```typescript
const metadataValues: GlobalMetadata & StandardMetadata = {
  title: 'Global title',
  standard: {
    title: 'Standard title',
  },
}
```

The `<title>` element will contain `Standard title`. But other modules will use `Global title`.

By convention, each metadata module provides at least (where `X` is name of module):

- An `NgxMetaXModule` or `provideNgxMetaX` module or provider. To add it to the app (see step 2)
- An `XMetadata` type with all metadata it can set.

#### Available modules

Currently, the library provides the following modules to help you set the page metadata:

- **Standard**: sets the standard metadata of a site. This means: [`<title>` element][title-element] and many [standard `<meta>`s defined in the HTML spec][meta-element]
- **Open Graph**: to set [Open Graph] properties. Useful to generate [social cards]. They were initially for link previews inside Facebook, but many other platforms parse that metadata too. Like WhatsApp, Telegram, Twitter/X, ...
- **Twitter Card**: to set [Twitter cards] properties. Useful to generate [social cards] in Twitter / X. Though, if you use Open Graph, [Twitter will read Open Graph properties][twitter-card-markup]. So maybe you just need Open Graph metadata after all. Unless you want some specific properties that can't be defined with Open Graph.
- **JSON LD**: in order to add [structured data], sets a `<script type='application/ld+json'>` in the `<head>` of the HTML page with the JSON object you provide.

[social cards]: https://web.dev/articles/social-discovery
[twitter-card-markup]: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup

## TODO

More docs:

- Add your own metadata
- Contribute
- Philosophy / principles
- Why this library was born:
  - What I missed in existing libs
  - Comparison amongst existing libraries
- API reference
- Docs site
