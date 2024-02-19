# Custom metadata providers selection

In previous guides, you have added metadata modules that manage a group of metadata elements. Like in [get started setup] step, where [standard module] was added in order to manage several standard (as per HTML spec) metadata elements like `#!html <meta>` elements.

But those are just groupings of metadata managers according to some subjective criteria. If you want to specify which metadata managers you will actually use, you can too! This can be very useful to remove unused code and hence reduce the bundle size.

For instance, let's say you want to just add the `#!html <title>` metadata manager from the [standard module].

## 1. Find your metadata manager provider(s)

First, you need to find your metadata manager provider.

### In the source code

If the metadata belongs to a [built-in module](../built-in-modules/index.md), you can explore the source code to find which metadata manager the group provides.

To do so, [go to the `src` directory of the library's repository](https://github.com/davidlj95/ngx/tree/main/projects/ngx-meta/src). In there, find the directory with the name of the built-in module its providers you want to find. For instance, for the [standard module], checkout the `standard` directory.

In there, enter again the `src` directory. Now, look for the provider file. For instance, for the standard module, it will be the [`provide-ngx-meta-standard.ts`](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/src/standard/src/provide-ngx-meta-standard.ts) file.

In there, you'll see which metadata manager the module provides. For instance, for the standard module, you can find something like this:

```typescript
export const provideNgxMetaStandard = (): Provider[] => [
  STANDARD_TITLE_METADATA_PROVIDER,
  STANDARD_DESCRIPTION_METADATA_PROVIDER,
  // ...
]
```

The title provider can be easily found by its name: [`STANDARD_TITLE_METADATA_PROVIDER`](ngx-meta.standard_title_metadata_provider.md). Otherwise, look for it in the [API reference](ngx-meta.md). You'll find there that [`STANDARD_TITLE_METADATA_PROVIDER`](ngx-meta.standard_title_metadata_provider.md) manages the [`Standard.title`](ngx-meta.standard.title.md) value which sets the `#!html <title>` element.

### In the API reference

You can also directly check out the [API reference `variables` section](ngx-meta.md#variables). In there, you can look for the module name and the `_PROVIDER` suffix.

You can find the [`STANDARD_TITLE_METADATA_PROVIDER`](ngx-meta.standard_title_metadata_provider.md) there too.

## 2. Add it/them

Now that you've found the metadata manager provider you want to use, add it as you would add a built-in module. Remove also the metadata module itself if you will not use other metadata managers from it apart from the ones you specify.

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    ```title="app.module.ts"
    // ...
    import {STANDARD_TITLE_METADATA_PROVIDER} from '@davidlj95/ngx-meta/standard'

    @NgModule({
      // ...
      imports: [
        // ...
        NgxMetaCoreModule.forRoot(),
        NgxMetaRoutingModule.forRoot(),
        {--NgxMetaStandardModule,--}
      ],
      providers: [
        // ...
        {++STANDARD_TITLE_METADATA_PROVIDER++},
      ]
    })
    export class AppModule {}
    ```

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    ```title="app.config.ts"
    // ...
    import {STANDARD_TITLE_METADATA_PROVIDER} from '@davidlj95/ngx-meta/standard'

    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(),
        {--provideNgxMetaStandard(),--}
        {++STANDARD_TITLE_METADATA_PROVIDER++},
        // ...
      ]
    })
    ```

!!! tip "You can also (lazy) load it later"

    You can also load the specific metadata provider later. This means it can be lazy loaded too (if you want). You can do it in a similar way you would with a built-in metadata module. Check out the [late loading modules guide](late-loading-modules.md) for more information. The only change is instead of adding a built-in metadata module, you'll add the specific metadata manager provider.
