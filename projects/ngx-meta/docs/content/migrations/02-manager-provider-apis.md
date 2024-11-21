# Manager provider APIs

## TL;DR

APIs to help creating metadata managers ([`NgxMetaMetadataManager`](ngx-meta.ngxmetametadatamanager.md)) changed to improve development experience. The horribly long-named [`makeMetadataManagerProviderFromSetterFactory`](ngx-meta.makemetadatamanagerproviderfromsetterfactory.md) and related APIs are deprecated in favour of [`provideNgxMetaManager`](ngx-meta.providengxmetamanager.md) and related APIs.

See [migration](#migration) for more info about how to migrate.

## Summary

| Key                            | Value              |
| :----------------------------- | :----------------- |
| Category of change             | 👎 **Deprecation** |
| Automatic migration schematics | No                 |
| Introduced in version          | `1.0.0-beta.25`    |

## Description

### Issue

[GitHub PR]: https://github.com/davidlj95/ngx/pull/926

[**🎟️ GitHub PR with details**][GitHub PR]

Metadata values on the page are handled by small pieces of code. Specifically, implementations of the [`NgxMetaMetadataManager`](ngx-meta.ngxmetametadatamanager.md) interface.

In order to create implementations of that interface in a lightweight and handier way, the[`makeMetadataManagerProviderFromSetterFactory`](ngx-meta.makemetadatamanagerproviderfromsetterfactory.md) API was introduced. However, it has several issues:

- **Horribly long name**: the most obvious one. 44 chars to be exact. Very Java-like 😅

- **Options are one letter long**: for instance `d` for `deps`, `jP` for JSON Path, ... The intention was to save some bytes around. But at the expense of the development experience.

- **JSON Path is an option**: the JSON path this metadata manager will handle is something that currently must always be specified. Unless new use cases appear. However, it's part of the options object. Which forces to provide an options object for all current use cases.

- **Naming doesn't use the `provide` prefix convention**. Usually functions creating providers are called `provide` by convention. This one doesn't. Which makes it even more difficult to recall if the name wasn't scarily long enough.

### Solution

Provide a new API that solves existing issues by:

- **Shortening its name**

- **Options with helper functions**. This way they can be short. But given using functions to refer to them, the user can use long names when specifying them. Like Angular's [`provideRouter` API with features provided by calling `withX` prefixed functions](https://angular.dev/api/router/provideRouter?tab=usage-notes).

  - Providing an object with long option names was discarded to reduce uncompressed bundle size. Though maybe with compression those long option names are not an issue anyway. However, by adding functions it's also easier to refactor the internal implementation without any API changes.

- **JSON Path as first argument**: as it's used for all current use cases. Plus using a `string` instead of an array as it's more handy to write. A utility is provided to turn arrays into those `strings` ([`withJsonPath`](ngx-meta.withjsonpath.md))

- **Follow `provide` prefix convention**

### Changes

Following set of APIs are deprecated[^1]:

- [`makeMetadataManagerProviderFromSetterFactory`](ngx-meta.makemetadatamanagerproviderfromsetterfactory.md)
  - [`MakeMetadataManagerProviderFromSetterFactoryOptions`](ngx-meta.makemetadatamanagerproviderfromsetterfactoryoptions.md)

And the following set of APIs are introduced:

- [`provideNgxMetaManager`](ngx-meta.providengxmetamanager.md)
  - [`withManagerJsonPath`](ngx-meta.withmanagerjsonpath.md)
  - [`withManagerDeps`](ngx-meta.withmanagerdeps.md)
  - [`withManagerGlobal`](ngx-meta.withmanagerglobal.md)
  - [`withManagerObjectMerging`](ngx-meta.withmanagerobjectmerging.md)
- [`withOptions`](ngx-meta.withoptions.md)

See [GitHub PR] were they were introduced more details. Keep reading for how to migrate from old ones to newer ones.

## Migration

### Automatic

No automatic migration via schematics are available for this change. Manual migration is required

### Manual

Here you have an examples of how the same provider can be created using old and new APIs.

For instance let's create a minimal one to manage the Open Graph image metadata. Or in an example, to manage the metadata values of the following JSON:

```json
{
  "image": {
    "url": "https://example.com/image.jpg"
  },
  "openGraph": {
    "image": {
      "width": 300
    }
  }
}
```

It will therefore manage the `image` global and the value inside the `openGraph.image` JSON Path if no global is found.

Object merging will be enabled so that global and specific objects are merged.

<!-- prettier-ignore-start -->

<div class="grid" markdown>

```typescript title="Before"
type MaybeImageObject = { url: string, width?: string } | undefined
const provider = makeMetadataManagerProviderFromSetterFactory<MaybeImageObject>(
  (metaElementsService: NgxMetaElementsService) => (value) => {
    metaElementsService.set(
      withNameAttribute('og:image'),
      withContentAttribute(value?.url)
    )
    metaElementsService.set(
      withNameAttribute('og:image:width'),
      withContentAttribute(value?.width)
    )
  },
  {
    jP: ['openGraph', 'image'],
    d: [NgxMetaElementsService],
    g: 'image',
    m: true, 
  }
)
```

```typescript title="After"
type MaybeImageObject = { url: string, width?: string } | undefined
const provider = provideNgxMetaManager<MaybeImageObject>(
  'openGraph.image', // or `withManagerJsonPath(['openGraph', 'image`])
  (metaElementsService: NgxMetaElementsService) => (value) => {
    metaElementsService.set(
      withNameAttribute('og:image'),
      withContentAttribute(value?.url)
    )
    metaElementsService.set(
      withNameAttribute('og:image:width'),
      withContentAttribute(value?.width)
    )
  },
  withOptions(
    withManagerDeps(NgxMetaElementsService),
    withManagerGlobal('image'),
    withManagerObjectMerging(),
  )
)
```

</div>

For a detailed explanation of new APIs, visit the [custom metadata guide](manage-your-custom-metadata.md)

<!-- prettier-ignore-end -->

[^1]: For more details, check the [GitHub PR](https://github.com/davidlj95/ngx/pull/956) introducing the deprecations
