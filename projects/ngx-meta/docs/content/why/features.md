# Features

Here's what library has to offer. Hope it checks all your needs ✅

### 🌐 Supports server side rendering ([SSR]), [hydration] and prerendering / static side generation ([SSG])

Supports server side rendering with new and former packages for SSR in Angular

- [Angular's SSR](https://npmjs.com/package/@angular/ssr) introduced in Angular v17
- [Angular Universal](https://www.npmjs.com/package/@nguniversal/express-engine) for Angular prior to v17

Metadata is set using Angular's built-in services to manipulate DOM. So (server/pre) rendered pages will include meta tags. Also supports [hydration].

Actually, a series of E2E tests are in place to ensure support for SSR and hydration for all Angular versions the library claims to be compatible with.

[hydration]: https://angular.dev/guide/hydration

### 🤝 Compatibility with [Angular actively supported versions]

Right now being Angular v17, v18 and v19. Update from an Angular version to another when you're ready: this library won't be an issue! Latest version will be compatible with all [Angular actively supported versions]. [There are some E2E tests to ensure that indeed][E2E tests]

!!! info "Older versions may be supported"

    Latest version of the library may support older Angular versions other than the currently [actively supported ones][Angular actively supported versions]. But it's not guaranteed to do so. Checkout the library's [`package.json` `peerDependencies` field for exact versions compatibility claims](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/src/package.json). It may even work for older versions than the ones specified in there, but those haven't been tested.

[E2E tests]: https://github.com/davidlj95/ngx/blob/main/.github/workflows/reusable-e2e.yml

### 👥 Supports most of widely used metadata

Like [`<title>`][title-element], many [standard `<meta>`s][standard meta tags], [Open Graph], [Twitter Cards] and JSON LD [structured data]. You can see an exhaustive list in [comparison page](comparison.md#by-specific-metadata-elements). But if you want more...

[title-element]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title

### 🛣️ Integrates with Angular's `Router`

So you can set the metadata of a route in the [route's `data`][route data] and the library will set those metadata values in the page for you.

[route data]: https://angular.dev/api/router/Route#data

### 📜 Types & documentation

Typescript types are provided, so you can discover what metadata can you set and what type of data each metadata accepts. Plus extensive documentation so you can leverage as much as possible of the library's power.

### 🧩 Fine-grained metadata management

Thanks to the pluggable module based architecture, you can manage popular metadata using built-in library modules, but you can also provide our own. Learn more about that at [manage your custom metadata guide](manage-your-custom-metadata.md). Indeed, you can decide which specific metadata elements you want to use. Learn more in the [custom metadata providers selection guide](custom-metadata-providers-selection.md). That will actually help you reduce the already...

### 📦 Small bundle size

Right now it will take **~6-7KiB of your bundle size when using all features** of the library[^1]. Furthermore, bundle size is tracked in every change made to the library. See [bundle size](bundle-size.md) page for more details. Anyway, the library is...

### 🌳 Tree shakeable

Whole library is designed to be [_tree shakeable_][tree shaking]. So metadata modules you're not interested in, or features you're not interested in won't end up in your app's bundle size if you don't use them.

### 🐨 Lazy loading support

To reduce main bundle size, you can also lazy load some metadata. This way, you don't load metadata management code for some metadata elements until you don't need them. For more information, check the [late loading modules guide](late-loading-modules.md)

### ✨ URL resolution

For metadata values where an absolute URL is required, a base URL can be provided so that you only need to specify relative URLs around and don't repeat the app URL over and over around. Or use the Angular's route path if that one is appropriate. Check out [URL resolution guide](url-resolution.md) for more information.

### 💅 Title formatting

You may want all your page titles to be consistent and include your brand or site name. Maybe separated by a hyphen or a vertical bar. Don't worry, no need to call some formatting function over and over, provide one to the library. The formatter function will be called automatically before setting page titles. Go to the [title formatting guide](title-formatting.md) for more information.

### 0️⃣ Zero dependencies[^2]

So less pain with dependency management

### ❤️ Crafted & maintained

Library tries to use Angular & software engineering best practices. Like using Angular's dependency injection (providers in standalone apps or modules otherwise), CI/CD pipelines, linters, formatters, unit & E2E tests... [Renovate] helps keeping dependencies to build. TL;DR: made by an Angular dev for an Angular dev

[Renovate]: https://renovatebot.com

[^1]: After [taking some time optimizing bundle size](https://github.com/davidlj95/ngx/issues/112#issuecomment-1901325536)

[^2]: Well, actually, just one: `tslib`. But it's because [Angular Package Format recommends it](https://angular.dev/tools/libraries/angular-package-format#tslib)
