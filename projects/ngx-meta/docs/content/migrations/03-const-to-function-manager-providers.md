# `const` to `function` manager providers

## TL;DR

Individual metadata managers `const`-based providers like `OPEN_GRAPH_DESCRIPTION_METADATA_PROVIDER` weren't tree shakeable by design . So they are replaced by `function`-based provider APIs. Like `provideOpenGraphDescription`

Update from `1.0.0-beta.34` to `1.0.0-beta.35` using `ng update` to replace old ones with new ones automatically for your project. See [migration](#migration) for more info about running automatic migrations or migrating manually.

## Summary

| Key                            | Value                                 |
| :----------------------------- | :------------------------------------ |
| Category of change             | 👎 **Deprecation**                    |
| Automatic migration schematics | [✅ Yes. Via `ng update`](#automatic) |
| Introduced in version          | `1.0.0-beta.35`                       |

## Description

### Issue

[GitHub issue]: https://github.com/davidlj95/ngx/issues/960

[**🎟️ Detailed GitHub issue**][GitHub issue]

The library allows to select individual metadata managers to use. For instance, just Open Graph title and description. This way you can use only the code you need, hence reducing your app's bundle size. Take a look at the [custom metadata providers selection guide](custom-metadata-providers-selection.md) for more information.

Until `1.0.0-beta.35`, individual metadata manager providers were `const`s that you could add to your `providers` to use them. With this naming convention:

- `OPEN_GRAPH_TITLE_METADATA_PROVIDER`
- `STANDARD_TITLE_METADATA_PROVIDER`
- `TWITTER_CARD_TITLE_METADATA_PROVIDER`

However, the way these tokens are created means they aren't tree-shakeable (see [GitHub issue] for more details about why).
Therefore, defeating its purpose of reducing the bundle size by just using the ones you need. All providers from a [built-in metadata module] would be included in the bundle size even if just one is used.

### Solution

If using [pure annotations](https://terser.org/docs/miscellaneous/#annotations) , `const`-based providers can be tree-shaken. But it's easy to forget to add them hence resulting in non-tree shakeable providers. Some tests could be added to enforce that, but it's more infra to maintain.

An alternative is to use functions instead of `const`s for individual metadata manager providers. Functions are tree-shaken by default if unused. And they provide flexibility to customize the behaviour of a metadata manager provider by adding arguments to it. So allows extensibility in the long run. The trade-off is some few extra bytes[^1].

### Changes

New function-based individual metadata manager providers use this naming convention:

- `provideOpenGraphTitle()`
- `provideStandardTitle()`
- `provideTwitterCardTitle()`

The only exception is `JSON_LD_METADATA_PROVIDER`. Instead of a new `function`-based alternative, it is replaced by [`provideNgxMetaJsonLd`](ngx-meta.providengxmetajsonld.md). The JSON-LD module provider API. Given they actually do the same (indeed the latter calls the former under the hood). So no need to maintain two functions with same purpose.

## Migration

In order to migrate from old `const`-based individual metadata manager providers into new, `function`-based individual metadata manager providers, you can:

### Automatic

Use the automatic migration [schematic](https://angular.dev/tools/cli/schematics) by upgrading to that version with `ng update` command:

```shell
ng update @davidlj95/ngx-meta@latest
```

The schematic will look for old managers and replace them by new ones. It will fix imports too. If you have already upgraded, you can also run:

```shell
ng update @davidlj95/ngx-meta \
  --from=1.0.0-beta.35 \
  --migrate-only
# or also
ng update @davidlj95/ngx-meta \
  --name=const-to-function-manager-providers
```

## Manual

Look for `const`-based individual metadata manager providers in your project and replace them with the new `function`-based providers. They are imported from the same entrypoint. They can be identified by their suffix: `_METADATA_PROVIDER`.

Some examples:

|                              Old usage | New usage                 |
| -------------------------------------: | :------------------------ |
|   `OPEN_GRAPH_TITLE_METADATA_PROVIDER` | `provideOpenGraphTitle`   |
|     `STANDARD_TITLE_METADATA_PROVIDER` | `provideStandardTitle`    |
| `TWITTER_CARD_TITLE_METADATA_PROVIDER` | `provideTwitterCardTitle` |
|            `JSON_LD_METADATA_PROVIDER` | `provideNgxMetaJsonLd`    |

The only change that doesn't follow the naming pattern is `JSON_LD_METADATA_PROVIDER` for the reasons stated in the [changes](#changes) section.

You can find a full list [in the schematics testing support file](https://github.com/davidlj95/ngx/blob/ngx-meta-v1.0.0-beta.32/projects/ngx-meta/schematics/migrations/tree-shakeable-manager-providers/testing/replacements.ts)

Finally, the [custom metadata providers selection guide](custom-metadata-providers-selection.md) has been updated with new usages. But you can check [an older version](https://github.com/davidlj95/ngx/blob/ngx-meta-v1.0.0-beta.31/projects/ngx-meta/docs/content/guides/custom-metadata-providers-selection.md) if you need to.

[^1]: See the [PR introducing changes](https://github.com/davidlj95/ngx/pull/1004) for details about the extra bundle size increase.
