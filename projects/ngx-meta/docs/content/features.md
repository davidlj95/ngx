# Features

Why should you use this library and not another? Or set the meta tags yourself?

### 🔙 Supports [Angular SSR] (formerly Angular Universal)

Metadata is set using Angular's built-in services to manipulate DOM. So (server/pre) rendered pages will include meta tags.

### 🤝 Compatibility with [Angular actively supported versions]

Right now being Angular v15, v16 and v17. Update from an Angular version to another when you're ready. But this library won't be an issue, as latest version will be compatible with all [Angular actively supported versions]. [There are some E2E tests to ensure that indeed][E2E tests]

[Angular actively supported versions]: https://angular.io/guide/releases#actively-supported-versions
[E2E tests]: https://github.com/davidlj95/ngx/blob/main/.github/workflows/reusable-e2e.yml

### 👥 Supports most of widely used metadata

Like [`<title>`][title-element], many [standard `<meta>`s][standard meta tags], [Open Graph], [Twitter Cards] and JSON LD [structured data]. But if you want more...

[title-element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title

### 🛣️ Integrates with Angular's `Router`

So you can set the metadata of a route in the [route's `data`][route data] and the library will set those metadata values in the page for you.

[route data]: https://angular.dev/api/router/Route#:~:text=Additional%20developer%2Ddefined%20data

### 📜 Types & documentation

Typescript types are provided, so you can discover what metadata can you set and what type of data each metadata accepts. Plus extensive documentation so you can leverage as much as possible of the library's power.

### 🧩 Fine-grained metadata management

Thanks to the pluggable module based architecture, you can manage popular metadata using built-in library modules, but you can also provide our own. Learn more about that at [manage your custom metadata guide](manage-your-custom-metadata.md). Indeed, you can decide which metadata is managed (including the library modules) to reduce the already...

### 📦 Small bundle size

Right now it will take **~6-7KiB of your bundle size when using all features**[^1]. But if you don't use them all, the whole library is designed to be [_tree shakeable_][tree shaking] so that's the maximum size this library will take of your app's bundle. To ensure it doesn't grow over time, there's a bot that comments each PR with a [bundle size PR comment] to ensure bundle size doesn't grow unexpectedly.

[bundle size reduction]: https://github.com/davidlj95/ngx/issues/112#issuecomment-1901325536
[tree shaking]: https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking
[bundle size PR comment]: https://github.com/davidlj95/ngx/pull/243#issuecomment-1912895697

### 🐨 Lazy loading support

To reduce main bundle size, you can also lazy load some metadata. This way, you don't load metadata management code for some metadata elements until you don't need them. For more information, check the [late loading modules guide](late-loading-modules.md)

### 0️⃣ Zero dependencies[^2]

So less pain with dependency management

### ❤️ Crafted & maintained

Library tries to use Angular & software engineering best practices. Like using Angular's dependency injection (providers in standalone apps or modules otherwise), CI/CD pipelines, linters, formatters, unit & E2E tests... [Renovate] helps keeping dependencies to build. TL;DR: made by an Angular dev for an Angular dev

[Renovate]: https://renovatebot.com

[^1]: After [taking some time optimizing bundle size](https://github.com/davidlj95/ngx/issues/112#issuecomment-1901325536)
[^2]: Well, actually, just one: `tslib`. But it's because [Angular Package Format recommends it](https://angular.dev/tools/libraries/angular-package-format#tslib)
