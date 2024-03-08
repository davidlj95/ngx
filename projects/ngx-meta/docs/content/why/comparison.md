# Comparison

Maybe another library fits your needs. Or setting metadata values yourself is better than adding a third party dependency (who wants to maintain yet another dependency? 😜)

So here's a comparison of some libraries found in NPM JS at moment of writing this document[^1]

## TL;DR

### Poor maintenance

One of the main motifs of creating this library was **not finding any maintained enough library**. Check the [maintenance section](#by-maintenance) for more details.

Something which frustrated me was finding peer dependencies fixed to an older version of Angular (see the versions support in [maintenance section](#by-maintenance)). That forces you to use [`npm`'s `--legacy-peer-deps`](https://docs.npmjs.com/cli/v10/using-npm/config#legacy-peer-deps) every time you `npm install` for instance. Or emits a warning in other package managers.

Also, the code was not being updated since long time ago. Meta elements are not something that change often, but at least one would expect dependencies to be updated from time to time.

### Poor extensibility

Libraries allow you to set other `#!html <meta>` tags from the support ones. But you have to clear them manually when route changes. So it's half the job IMO. Also, you can't set other things that aren't `#!html <meta>` elements. What if you want to set some `<script>` like in JSON-LD case? Or change the `lang` attribute?

### Non-standard metas

Some libraries set metadata elements that are redundant. Or even wrong (they do not exist, or it is not the appropriate form to communicate something). Checkout the notes at the end of the [by specific metadata elements](#by-specific-metadata-elements) section for more information.

### Do it yourself

It is certainly a better option than installing a poorly maintained library. But you'll lack bundle size optimizations we've cooked here. And maybe you'll miss setting the metadata in a declarative manner as [route's data]. Or the helper types to help you recall all available metadata of a standard like Open Graph or Twitter Cards.

## Candidates

|              Candidate               |    Analyzed version    |          Latest version          |     License      |
| :----------------------------------: | :--------------------: | :------------------------------: | :--------------: |
| [`@avivharuzi/ngx-seo`][npm-ngx-seo] | [v16.0.0][vr-ngx-seo]  |   [![lv-ngx-seo]][npm-ngx-seo]   |  ![lic-ngx-seo]  |
|    [`@ngaox/seo`][npm-ngaox-seo]     | [v5.0.0][vr-ngaox-seo] | [![lv-ngaox-seo]][npm-ngaox-seo] | ![lic-ngaox-seo] |
|   [`@ngx-meta/core`][npm-ngx-meta]   | [v9.0.0][vr-ngx-meta]  |  [![lv-ngx-meta]][npm-ngx-meta]  | ![lic-ngx-meta]  |

[vr-ngx-seo]: https://github.com/avivharuzi/ngx-seo/tree/16.0.0
[vr-ngaox-seo]: https://github.com/ngaox/ngaox/tree/v5.0.0
[vr-ngx-meta]: https://github.com/fulls1z3/ngx-meta/tree/v9.0.0
[lv-ngx-seo]: https://img.shields.io/npm/v/%40avivharuzi%2Fngx-seo?logo=npm&label=
[lv-ngaox-seo]: https://img.shields.io/npm/v/%40ngaox%2Fseo?logo=npm&label=
[lv-ngx-meta]: https://img.shields.io/npm/v/%40ngx-meta%2Fcore?logo=npm&label=
[lic-ngx-seo]: https://img.shields.io/npm/l/%40avivharuzi%2Fngx-seo?logo=npm&label=
[lic-ngaox-seo]: https://img.shields.io/npm/l/%40ngaox%2Fseo?logo=npm&label=
[lic-ngx-meta]: https://img.shields.io/npm/l/%40ngx-meta%2Fcore?logo=npm&label=

## By maintenance

| Maintenance                       |        🙋 `ngx-meta`        |      `@avivharuzi/ngx-seo`      |            `@ngaox/seo`             |         `@ngx-meta/core`          |
| --------------------------------- | :-------------------------: | :-----------------------------: | :---------------------------------: | :-------------------------------: |
| :simple-angular: versions support | [**v15-v17**][pkg-this][^6] |      [v13-16][pkg-ngx-seo]      |        [v15][pkg-ngaox-seo]         |        [v9][pkg-ngx-meta]         |
| Documentation                     |             ✅              |               ✅                |                 ✅                  |                ✅                 |
| Last commit                       |   [![lc-this]][repo-this]   |  [![lc-ngx-seo]][repo-ngx-seo]  |  [![lc-ngaox-seo]][repo-ngaox-seo]  |  [![lc-ngx-meta]][repo-ngx-meta]  |
| Unit tests                        |  [![ci-b-this]][ci-l-this]  | [![ci-b-ngx-seo]][ci-l-ngx-seo] | [![ci-b-ngaox-seo]][ci-l-ngaox-seo] | [![ci-b-ngx-meta]][ci-l-ngx-meta] |
| E2E tests                         |  [![ci-b-this]][ci-l-this]  |               ❌                |                 ❌                  |                ❌                 |
| [Provenance][pro-article]         |   [![pro-this]][npm-this]   |  [![pro-ngx-seo]][npm-ngx-seo]  |  [![pro-ngaox-seo]][npm-ngaox-seo]  |  [![pro-ngx-meta]][npm-ngx-meta]  |
| Collaborators                     |   [![co-this]][npm-this]    |  [![co-ngx-seo]][npm-ngx-seo]   |  [![co-ngaox-seo]][npm-ngaox-seo]   |  [![co-ngx-meta]][npm-ngx-meta]   |

[pkg-this]: https://unpkg.com/browse/@davidlj95/ngx-meta/package.json
[pkg-ngx-seo]: https://github.com/avivharuzi/ngx-seo/releases
[pkg-ngaox-seo]: https://unpkg.com/browse/@ngaox/seo@5.0.0/package.json
[pkg-ngx-meta]: https://unpkg.com/browse/@ngx-meta/core@9.0.0/package.json
[lc-this]: https://img.shields.io/github/last-commit/davidlj95/ngx/main?logo=github&label=
[lc-ngx-seo]: https://img.shields.io/github/last-commit/avivharuzi/ngx-seo/main?logo=github&label=
[lc-ngaox-seo]: https://img.shields.io/github/last-commit/ngaox/ngaox/main?logo=github&label=
[lc-ngx-meta]: https://img.shields.io/github/last-commit/fulls1z3/ngx-meta/master?logo=github&label=
[repo-this]: https://github.com/davidlj95/ngx
[repo-ngx-seo]: https://github.com/avivharuzi/ngx-seo
[repo-ngaox-seo]: https://github.com/ngaox/ngaox
[repo-ngx-meta]: https://github.com/fulls1z3/ngx-meta
[ci-b-this]: https://github.com/davidlj95/ngx/actions/workflows/main.yml/badge.svg
[ci-b-ngx-seo]: https://github.com/avivharuzi/ngx-seo/actions/workflows/pr.yml/badge.svg
[ci-b-ngaox-seo]: https://github.com/ngaox/ngaox/actions/workflows/integrate.yml/badge.svg
[ci-b-ngx-meta]: https://circleci.com/gh/fulls1z3/ngx-meta.svg?style=shield
[ci-l-this]: https://github.com/davidlj95/ngx/actions/workflows/main.yml
[ci-l-ngx-seo]: https://github.com/avivharuzi/ngx-seo/actions/workflows/pr.yml
[ci-l-ngaox-seo]: https://github.com/ngaox/ngxaox/actions/workflows/integrate.yml
[ci-l-ngx-meta]: https://circleci.com/gh/fulls1z3/ngx-meta
[pro-article]: https://github.blog/2023-04-19-introducing-npm-package-provenance/
[pro-this]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.org%2F%40davidlj95%2Fngx-meta%2Flatest&query=%24.dist.attestations.provenance.predicateType&label=%20&color=darkgreen
[pro-ngx-seo]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.org%2F%40avivharuzi%2Fngx-seo%2Flatest&query=%24.dist.attestations.provenance.predicateType&label=%20&color=darkgreen
[pro-ngaox-seo]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.org%2F%40ngaox%2Fseo%2Flatest&query=%24.dist.attestations.provenance.predicateType&label=%20&color=darkgreen
[pro-ngx-meta]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fregistry.npmjs.org%2F%40ngx-meta%2Fcore%2Flatest&query=%24.dist.attestations.provenance.predicateType&label=%20&color=darkgreen
[co-this]: https://img.shields.io/npm/collaborators/%40davidlj95%2Fngx-meta?label=%20
[co-ngx-seo]: https://img.shields.io/npm/collaborators/%40avivharuzi%2Fngx-seo?label=%20
[co-ngaox-seo]: https://img.shields.io/npm/collaborators/%40ngaox%2Fseo?label=%20
[co-ngx-meta]: https://img.shields.io/npm/collaborators/%40ngx-meta%2Fcore?label=%20
[npm-this]: https://www.npmjs.com/package/@davidlj95/ngx-meta
[npm-ngx-seo]: https://www.npmjs.com/package/@avivharuzi/ngx-seo
[npm-ngaox-seo]: https://www.npmjs.com/package/@ngaox/seo
[npm-ngx-meta]: https://www.npmjs.com/package/@ngx-meta/core

## By features

| Feature                           | 🙋 `ngx-meta` | No lib | `@avivharuzi/ngx-seo` | `@ngaox/seo`  | `@ngx-meta/core` |
| --------------------------------- | :-----------: | :----: | :-------------------: | :-----------: | :--------------: |
| Support SSR                       |      ✅       |   ⚙️   |          ✅           |      ✅       |        ✅        |
| Metadata with service             |      ✅       |   ⚙️   |          ✅           |      ✅       |        ✅        |
| Metadata in route                 |      ✅       |  ⚙️❗️  |          ✅           |      ✅       |      ✅[^8]      |
| Metadata with component           |      ❌       |  ⚙️❗️  |          ❌           |      ✅       |        ❌        |
| Default metadata values           |      ✅       |   ⚙️   |          ❌           |      ✅       |        ✅        |
| Extensible                        |      ✅       |   ✅   |    :warning:[^11]     | :warning:[^2] |  :warning:[^9]   |
| Change metadata on route change   |      ✅       |   ⚙️   |          ✅           |      ✅       |        ✅        |
| Bundle size optimizations         |      ✅       |  ⚙️❗️  |          ❌           |      ❌       |        ❌        |
| Tree-shakeable                    |      ✅       |   ⚙️   |          ❌           |      ❌       |        ❌        |
| Shared metadata[^3]               |      ✅       |   ⚙️   |          ✅           |      ✅       |        ✅        |
| Specific, non-shared metadata[^4] |      ✅       |   ⚙️   |        ⚙️[^10]        |    ⚙️[^10]    |     ⚙️[^10]      |

??? info "Legend"

    | Icon | Meaning |
    |:-:|:--|
    | ✅ | Supported |
    | :warning:  | Partially supported |
    | ⚙️ | Can be done quite straight forward |
    | ⚙️❗️| Can be done but will require some work |
    | ❌ | Not possible in analysed version |

## By common metadata groups

| Built-in setters    | 🙋 `ngx-meta` | `@avivharuzi/ngx-seo` | `@ngaox/seo` | `@ngx-meta/core` |
| ------------------- | :-----------: | :-------------------: | :----------: | :--------------: |
| Standard metas[^5]  |      ✅       |          ✅           |      ✅      |        ✅        |
| Open Graph metas    |      ✅       |          ✅           |      ✅      |        ✅        |
| Twitter Cards metas |      ✅       |       :warning:       |      ✅      |        ❌        |
| JSON LD script      |      ✅       |          ❌           |      ❌      |        ❌        |

> You can set manually in your app any `#!html <meta>` element without any library. For instance, using [Angular's `Meta` APIs](https://angular.dev/api/platform-browser/Meta) yourself (actually, that's what most libs use under the hood)

??? info "Legend"

    | Icon | Meaning |
    |:-:|:--|
    | ✅ | Provided built-in |
    | :warning: | Partially provided built-in |
    | ❌ | Not provided built-in (may be set as custom ones if library allows to) |

## By specific metadata elements

| Metadata element                                 | 🙋 `ngx-meta` | `@avivharuzi/ngx-seo` | `@ngaox/seo` | `@ngx-meta/core` |
| ------------------------------------------------ | :-----------: | :-------------------: | :----------: | :--------------: |
| `#!html <title>`                                 |      ✅       |          ✅           |      ✅      |        ✅        |
| `#!html <meta name="description">`               |      ✅       |          ✅           |      ✅      |        ✅        |
| `#!html <meta name="author">`                    |      ✅       |          ✅           |      ⚙️      |        ✅        |
| `#!html <meta name="keywords">`                  |      ✅       |          ✅           |      ✅      |        ✅        |
| `#!html <meta name="generator">`                 |      ✅       |          ⚙️           |      ⚙️      |        ⚙️        |
| `#!html <meta name="application-name">`          |      ✅       |          ⚙️           |      ⚙️      |        ⚙️        |
| `#!html <link rel="canonical">`                  |      ✅       |          ❌           |      ✅      |        ❌        |
| `#!html <html lang>`                             |      ✅       |          ❌           |      ❌      |        ❌        |
| `#!html <meta property="og:title">`              |      ✅       |          ✅           |      ✅      |        ✅        |
| `#!html <meta property="og:type">`               |      ✅       |          ✅           |      ✅      |        ⚙️        |
| `#!html <meta property="og:image">`              |      ✅       |          ✅           |      ✅      |        ⚙️        |
| `#!html <meta property="og:image:secure_url">`   |      ✅       |          ⚙️           |    ✅[^7]    |        ⚙️        |
| `#!html <meta property="og:image:alt">`          |      ✅       |          ⚙️           |      ✅      |        ⚙️        |
| `#!html <meta property="og:image:height">`       |      ✅       |          ⚙️           |      ✅      |        ⚙️        |
| `#!html <meta property="og:image:width">`        |      ✅       |          ⚙️           |      ✅      |        ⚙️        |
| `#!html <meta property="og:image:type">`         |      ✅       |          ⚙️           |      ✅      |        ⚙️        |
| `#!html <meta property="og:url">`                |      ✅       |          ✅           |      ✅      |        ✅        |
| `#!html <meta property="og:description">`        |      ✅       |          ✅           |      ✅      |        ✅        |
| `#!html <meta property="og:site_name">`          |      ✅       |          ✅           |      ✅      |        ⚙️        |
| `#!html <meta property="og:locale">`             |      ✅       |          ⚙️           |      ⚙️      |        ✅        |
| `#!html <meta property="og:profile:first_name">` |      ✅       |          ⚙️           |      ⚙️      |        ⚙️        |
| `#!html <meta property="og:profile:last_name">`  |      ✅       |          ⚙️           |      ⚙️      |        ⚙️        |
| `#!html <meta property="og:profile:username">`   |      ✅       |          ⚙️           |      ⚙️      |        ⚙️        |
| `#!html <meta property="og:profile:gender">`     |      ✅       |          ⚙️           |      ⚙️      |        ⚙️        |
| `#!html <meta name="twitter:card">`              |      ✅       |          ✅           |      ✅      |        ⚙️        |
| `#!html <meta name="twitter:title">`             |      ✅       |          ✅           |      ✅      |        ⚙️        |
| `#!html <meta name="twitter:description">`       |      ✅       |          ✅           |      ✅      |        ⚙️        |
| `#!html <meta name="twitter:site">`              |      ✅       |          ⚙️           |      ✅      |        ⚙️        |
| `#!html <meta name="twitter:site:id">`           |      ✅       |          ⚙️           |      ⚙️      |        ⚙️        |
| `#!html <meta name="twitter:creator">`           |      ✅       |          ⚙️           |      ✅      |        ⚙️        |
| `#!html <meta name="twitter:creator:id">`        |      ✅       |          ⚙️           |      ⚙️      |        ⚙️        |
| `#!html <meta name="twitter:image">`             |      ✅       |          ✅           |      ✅      |        ⚙️        |
| `#!html <meta name="twitter:image:alt">`         |      ✅       |          ⚙️           |      ✅      |        ⚙️        |
| `#!html <script type="application/ld+json">`     |      ✅       |          ❌           |      ❌      |        ❌        |
| `#!html <meta property="fb:app_id">`             |      ⚙️       |          ⚙️           |      ✅      |        ❌        |

??? info "Legend"

    | Icon | Meaning |
    |:-:|:--|
    | ✅ | Provided built-in |
    | ⚙️ | Can be set as custom meta (library allows to) |
    | ❌ | Can't be set with library |

??? note "Some elements were purposely skipped from the comparison"

    - `#!html <meta itemprop="name">`, `#!html <meta itemprop="description">` and `#!html <meta itemprop="image">` are supported by `@avivharuzi/ngx-seo`. But those are redundant. Name and description can be specified by `#!html <title>` and namesake's `#!html <meta name="description">`. The image can be set using Open Graph and most platforms will read it + also set the social cards / link previews at same time.
    - `#!html <meta name="title">` is supported by `@ngaox/seo`. But you probably don't need it, [it's a metadata element not specified in any standard](https://stackoverflow.com/questions/21076201/difference-between-meta-name-title-tag-and-title-title-tag#comment31701824_21076311)

??? warning "Some libraries set invalid metadata elements"

    - `#!html <meta name="canonical">` is set by `@avivharuzi/ngx-seo`. However, **that metadata name is not standard**. `#!html <link rel="canonical">` is the HTML spec standard way of specifying canonical URLs.
    - `#!html <meta name="twitter:url">` is set by `@avivharuzi/ngx-seo`. However, **that metadata name is not specified in Twitter Cards markup reference**
    - `#!html <meta name="twitter:image:alt">` is set by `@ngaox/seo` [**with `property` attribute instead of `name` attribute**](https://github.com/ngaox/ngaox/blob/v5.0.0/packages/seo/src/lib/seo.service.ts#L105). [A PR has been opened to fix it](https://github.com/ngaox/ngaox/pull/256)
    - `#!html <meta property="og:author">` and `#!html <meta property="og:publisher">` are supported by `@ngx-meta/core`. But those are not valid Open Graph elements. In any case, they would be `#!html <meta property="og:article:author|publisher">`

## Excluded candidates

Some libraries were excluded from analysis for following reasons

[`angular-update-meta`](https://www.npmjs.com/package/angular-update-meta)
: Not in scope. Only supports AngularJS

[^1]: Keywords used to find libraries: `angular meta`, `angular meta tags`, `ngx meta`. Tried sorting by different criteria: relevance / popularity / maintenance. Excluded libraries for AngularJS
[^2]: [Doesn't appear in docs](https://ngaox-lab.web.app/docs/seo). However, you can set [extra Angular `MetaDefinition`s](https://github.com/ngaox/ngaox/blob/v5.0.0/packages/seo/src/lib/shared/models.ts#L21), but they won't be cleared when changing route. Unless you manually do so.
[^3]: You can set a metadata value that will be used for several purposes. Like a title for `#!html <title>` and Open Graph's `#!html <meta property="og:title">`
[^4]: You can specify a specific metadata value that will be used for only one purpose, whilst the shared metadata value is used for the rest. Like a specific value for `#!html <title>` and another for Open Graph's `#!html <meta property="og:title">`
[^5]: In HTML spec. Mainly `#!html <title>` and some `#!html <meta>`s like `description`, `author`, `keywords`
[^6]: All [Angular actively supported versions]
[^7]: You can't manage it yourself. [Library sets it if URL starts with `https`](https://github.com/ngaox/ngaox/blob/v5.0.0/packages/seo/src/lib/seo.service.ts#L98)
[^8]: Requires declaring a guard (`MetaGuard`) in every route with metadata.
[^9]: You can set custom `#!html <meta>` tags programmatically using service. But [only in the shape of `#!html <meta name='{key}' content='{value}'>`](https://github.com/fulls1z3/ngx-meta/blob/v9.0.0/packages/%40ngx-meta/core/src/meta.service.ts#L192). You then have to manually clear it when changing route. Not available via the route's data.
[^10]: Could be achieved if setting them as custom `#!html <meta>`s
[^11]: You can set [extra Angular `MetaDefinition`s](https://github.com/avivharuzi/ngx-seo/blob/16.0.0/packages/ngx-seo/src/lib/ngx-seo.ts#L13), but they won't be cleared when changing route. Unless you manually do so.
