# Comparison

Maybe another library fits your needs. Or setting metadata values yourself is better than adding a third party dependency (who wants to maintain yet another dependency? 😜)

So here's a comparison of some libraries found in NPM JS at moment of writing this document[^1]

## Legend

Following icons are used:

- ✅ Provided
- ⚙️ Can be done manually, quite straight forward
- ⚙️❗️ Can be done manually, but requires some work
- ❌ Not possible | available | provided

## Comparisons

### By features

| Feature                           | 🙋 `ngx-meta` | No lib | `@ngaox/seo` |
| --------------------------------- | :-----------: | :----: | :----------: |
| Support SSR                       |      ✅       |   ⚙️   |      ✅      |
| Metadata with service             |      ✅       |   ⚙️   |      ✅      |
| Metadata in route                 |      ✅       |  ⚙️❗️  |      ✅      |
| Metadata with component           |      ❌       |  ⚙️❗️  |      ✅      |
| Default metadata values           |      ✅       |  ⚙️❗️  |      ✅      |
| Extensible                        |      ✅       |   ✅   |   ⚙️❗️[^2]   |
| Change metadata on route change   |      ✅       |   ⚙️   |      ✅      |
| Bundle size optimizations         |      ✅       |  ⚙️❗️  |      ❌      |
| Tree-shakeable                    |      ✅       |   ⚙️   |      ❌      |
| Shared metadata[^3]               |      ✅       |   ⚙️   |      ✅      |
| Specific, non-shared metadata[^4] |      ✅       |   ⚙️   |      ❌      |

### By common set metadata groups

| Built-in setters    | 🙋 `ngx-meta` | `@ngaox/seo` |
| ------------------- | :-----------: | :----------: |
| Standard metas[^5]  |      ✅       |      ✅      |
| Open Graph metas    |      ✅       |      ✅      |
| Twitter Cards metas |      ✅       |      ✅      |
| JSON LD script      |      ✅       |      ❌      |

> You can set manually in your app any `#!html <meta>` element without any library. For instance, using [Angular's `Meta` APIs](https://angular.dev/api/platform-browser/Meta) yourself (actually, that's what most libs use under the hood)

### By maintenance

| Maintenance                       |        🙋 `ngx-meta`        |         `@ngaox/seo`          |
| --------------------------------- | :-------------------------: | :---------------------------: |
| :simple-angular: versions support | [**v15-v17**][pkg-this][^6] |       [v15][pkg-ng-seo]       |
| Last commit                       |   [![lc-this]][repo-this]   |  [![lc-ng-seo]][repo-ng-seo]  |
| Unit tests                        |  [![ci-b-this]][ci-l-this]  | [![ci-b-ng-seo]][ci-l-ng-seo] |
| E2E tests                         |  [![ci-b-this]][ci-l-this]  |              ❌               |
| Collaborators                     |   [![co-this]][npm-this]    |  [![co-ng-seo]][npm-ng-seo]   |

[pkg-this]: https://unpkg.com/browse/@davidlj95/ngx-meta/package.json
[pkg-ng-seo]: https://unpkg.com/browse/@ngaox/seo/package.json
[lc-this]: https://img.shields.io/github/last-commit/davidlj95/ngx/main?logo=github&label=
[lc-ng-seo]: https://img.shields.io/github/last-commit/ngaox/ngaox/main?logo=github&label=
[repo-this]: https://github.com/davidlj95/ngx
[repo-ng-seo]: https://github.com/ngaox/ngaox/tree/main
[ci-b-this]: https://github.com/davidlj95/ngx/actions/workflows/main.yml/badge.svg
[ci-b-ng-seo]: https://github.com/ngaox/ngaox/actions/workflows/integrate.yml/badge.svg
[ci-l-this]: https://github.com/davidlj95/ngx/actions/workflows/main.yml
[ci-l-ng-seo]: https://github.com/ngaox/ngxaox/actions/workflows/integrate.yml
[co-this]: https://img.shields.io/npm/collaborators/%40davidlj95%2Fngx-meta?label=%20
[co-ng-seo]: https://img.shields.io/npm/collaborators/%40ngaox%2Fseo?label=%20
[npm-this]: https://www.npmjs.com/package/@davidlj95/ngx-meta
[npm-ng-seo]: https://www.npmjs.com/package/@ngaox/seo

### By specific metadata elements

| Metadata element                                 | 🙋 `ngx-meta` | `@ngaox/seo` |
| ------------------------------------------------ | :-----------: | :----------: |
| `#!html <title>`                                 |      ✅       |      ✅      |
| `#!html <meta name="description">`               |      ✅       |      ✅      |
| `#!html <meta name="author">`                    |      ✅       |     ⚙️❗️     |
| `#!html <meta name="keywords">`                  |      ✅       |      ✅      |
| `#!html <meta name="generator">`                 |      ✅       |     ⚙️❗️     |
| `#!html <meta name="application-name">`          |      ✅       |     ⚙️❗️     |
| `#!html <link rel="canonical">`                  |      ✅       |      ✅      |
| `#!html <html lang>`                             |      ✅       |      ❌      |
| `#!html <meta property="og:title">`              |      ✅       |      ✅      |
| `#!html <meta property="og:type">`               |      ✅       |      ✅      |
| `#!html <meta property="og:image">`              |      ✅       |      ✅      |
| `#!html <meta property="og:image:secure_url">`   |      ✅       |    ✅[^7]    |
| `#!html <meta property="og:image:alt">`          |      ✅       |      ✅      |
| `#!html <meta property="og:image:height">`       |      ✅       |      ✅      |
| `#!html <meta property="og:image:width">`        |      ✅       |      ✅      |
| `#!html <meta property="og:image:type">`         |      ✅       |      ✅      |
| `#!html <meta property="og:url">`                |      ✅       |      ✅      |
| `#!html <meta property="og:description">`        |      ✅       |      ✅      |
| `#!html <meta property="og:site_name">`          |      ✅       |      ✅      |
| `#!html <meta property="og:locale">`             |      ✅       |     ⚙️❗️     |
| `#!html <meta property="og:profile:first_name">` |      ✅       |     ⚙️❗️     |
| `#!html <meta property="og:profile:last_name">`  |      ✅       |     ⚙️❗️     |
| `#!html <meta property="og:profile:username">`   |      ✅       |     ⚙️❗️     |
| `#!html <meta property="og:profile:gender">`     |      ✅       |     ⚙️❗️     |
| `#!html <meta property="twitter:card">`          |      ✅       |      ✅      |
| `#!html <meta property="twitter:title">`         |      ✅       |      ✅      |
| `#!html <meta property="twitter:description">`   |      ✅       |      ✅      |
| `#!html <meta property="twitter:site">`          |      ✅       |      ✅      |
| `#!html <meta property="twitter:site:id">`       |      ✅       |     ⚙️❗️     |
| `#!html <meta property="twitter:creator">`       |      ✅       |      ✅      |
| `#!html <meta property="twitter:creator:id">`    |      ✅       |     ⚙️❗️     |
| `#!html <meta property="twitter:image">`         |      ✅       |      ✅      |
| `#!html <meta property="twitter:image:alt">`     |      ✅       |      ✅      |
| `#!html <script type="application/ld+json">`     |      ✅       |     ⚙️❗️     |
| `#!html <meta property="fb:app_id">`             |      ⚙️       |      ✅      |

??? note "Some elements were purposely skipped..."

    - `#!html <meta name="title">` is supported by `@ngaox/seo`. But you probably don't need it, [it's a metadata element not specified in any standard](https://stackoverflow.com/questions/21076201/difference-between-meta-name-title-tag-and-title-title-tag#comment31701824_21076311)

## Non analyzed libraries

Some libraries were excluded from analysis for following reasons

[`angular-update-meta`](https://www.npmjs.com/package/angular-update-meta)
: Not in scope. Only supports AngularJS

[^1]: Keywords used to find libraries: `angular meta`, `angular meta tags`, `ngx meta`. Tried sorting by different criteria: relevance / popularity / maintenance. Excluded libraries for AngularJS
[^2]: [No docs available](https://ngaox-lab.web.app/docs/seo#how-to-handle-specialized-cases). You can set [extra Angular `MetaDefinition`s](https://github.com/ngaox/ngaox/blob/v5.0.0/packages/seo/src/lib/shared/models.ts#L21), but they won't disappear when changing route. Unless you manually do so.
[^3]: You can set a metadata value that will be used for several purposes. Like a title for `#!html <title>` and Open Graph's `#!html <meta property="og:title">`
[^4]: You can specify a specific metadata value that will be used for only one purpose, whilst the shared metadata value is used for the rest. Like a specific value for `#!html <title>` and another for Open Graph's `#!html <meta property="og:title">`
[^5]: In HTML spec. Mainly `#!html <title>` and some `#!html <meta>`s like `description`, `author`, `keywords`
[^6]: All [Angular actively supported versions]
[^7]: You can't manage it yourself. [Library sets it if URL starts with `https`](https://github.com/ngaox/ngaox/blob/v5.0.0/packages/seo/src/lib/seo.service.ts#L98)
