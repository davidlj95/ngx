# Tree shakeable manager providers

## TL;DR

Managers providers weren't tree shakeable. So they were removed.

Update from `1.0.0-beta.31` to `1.0.0-beta.32` using `ng update` to replace old ones with new ones automatically for your project. See [changes](#changes) for more info about running automatic migrations or migrating manually.

## Summary

| Key                            | Value                                 |
| :----------------------------- | :------------------------------------ |
| Category of change             | ⛓️‍💥 **Breaking change**                |
| Automatic migration schematics | [✅ Yes. Via `ng update`](#automatic) |
| Introduced in version          | `1.0.0-beta.32`                       |

## Description

The library allows to select the metadata managers to use. This way you can use only the code you need, hence reducing your app's bundle size. Take a look at the [custom metadata providers selection guide](custom-metadata-providers-selection.md) for more information.

Until `1.0.0-beta.31`, manager providers were `const`s that you could add to your `providers` to use them. With this naming convention:

- `OPEN_GRAPH_TITLE_METADATA_PROVIDER`
- `STANDARD_TITLE_METADATA_PROVIDER`
- `TWITTER_CARD_TITLE_METADATA_PROVIDER`

However, the way those tokens were created meant they weren't tree-shakeable. Therefore, defeating its purpose of reducing the bundle size by just using the ones you need. All providers from a [built-in metadata module] were included even if just one was used. Checkout [issue #960](https://github.com/davidlj95/ngx/issues/960) for more info about why.

To solve that, new function-based metadata manager providers have been introduced. Old ones have been removed as they are not tree-shakeable and were always included if the entrypoint they were included in was used.

New metadata manager providers use this naming convention:

- `provideOpenGraphTitle()`
- `provideStandardTitle()`
- `provideTwitterCardTitle()`

Additionally, `JSON_LD_METADATA_PROVIDER` has no replacement, given the JSON-LD module just does one thing. So no need for two providers for the same purpose. So its replacement is the module's API [`provideNgxMetaJsonLd`](ngx-meta.providengxmetajsonld.md)

## Changes

In order to migrate from old, non tree-shakeable metadata managers defined as `const`s into new, function-based tree-shakeable providers, you can:

### Automatic

Use the automatic migration [schematic](https://angular.dev/tools/cli/schematics) by upgrading to that version with `ng update` command:

```shell
ng update @davidlj95/ngx-meta@latest
```

The schematic will look for old managers and replace them by new ones. It will fix imports too. If you have already upgraded, you can also run:

```shell
ng update @davidlj95/ngx-meta \
  --from=1.0.0-beta.32 \
  --migrate-only
# or also
ng update @davidlj95/ngx-meta \
  --name=tree-shakeable-manager-providers
```

## Manual

Look for old metadata providers in your project and replace them with the new providers. They are imported from the same entrypoint as old providers. They can be identified by their suffix: `_METADATA_PROVIDER`.

Some examples:

|                              Old usage | New usage                 |
| -------------------------------------: | :------------------------ |
|   `OPEN_GRAPH_TITLE_METADATA_PROVIDER` | `provideOpenGraphTitle`   |
|     `STANDARD_TITLE_METADATA_PROVIDER` | `provideStandardTitle`    |
| `TWITTER_CARD_TITLE_METADATA_PROVIDER` | `provideTwitterCardTitle` |
|            `JSON_LD_METADATA_PROVIDER` | `provideNgxMetaJsonLd`    |

The only change that doesn't follow the naming pattern is `JSON_LD_METADATA_PROVIDER` for the reasons stated in the [description](#description) section.

You can find a full list [in the schematics testing support file](https://github.com/davidlj95/ngx/blob/ngx-meta-v1.0.0-beta.32/projects/ngx-meta/schematics/migrations/tree-shakeable-manager-providers/testing/replacements.ts)

Finally, the [custom metadata providers selection guide](custom-metadata-providers-selection.md) has been updated with new usages. But you can check [an older version](https://github.com/davidlj95/ngx/blob/ngx-meta-v1.0.0-beta.31/projects/ngx-meta/docs/content/guides/custom-metadata-providers-selection.md) if you need to.
