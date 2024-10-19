# Defaults

If you want every page in your site to have some metadata values, a good option is to use the defaults feature.

This way, everytime you set your metadata values (either using the service or the route's data), if no value is provided for some metadata, default value will be used instead.

??? info "Remember to either use the routing module or call the service"

    As defaults are applied when setting metadata values. So if no metadata values are being set, no defaults will be applied.
    Metadata values can be set [using the service](./set-metadata-using-service.md) or when navigating to a new route when
    [using routing](./set-metadata-using-routing.md)

## Providing default values

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Open your `app.config.ts` file where [`provideNgxMetaCore`](ngx-meta.providengxmetacore.md) is provided.

    Provide your default values by adding a call to [`withNgxMetaDefaults`](ngx-meta.withngxmetadefaults.md) with the default values to set.

    ```typescript title="app.config.ts"
    export const appConfig: ApplicationConfig = {
      providers: [
        // ...
        provideNgxMetaCore(
          withNgxMetaDefaults({
            description: "Awesome products made real ✨"
          } satisfies GlobalMetadata)
        ),
      ],
    }
    ```

    --8<-- "includes/example-standalone-app-config.md"

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Open your `app.module.ts` where [`provideNgxMetaCore`](ngx-meta.providengxmetacore.md) is provided.

    Provide your default values by adding a call to [`withNgxMetaDefaults`](ngx-meta.withngxmetadefaults.md) with the default values to set.

    ```typescript title="app.module.ts"
    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(
          withNgxMetaDefaults({
            description: "Awesome products made real ✨"
          } satisfies GlobalMetadata)
        ),
      ],
      // ...
    })
    export class AppModule {}
    ```

    --8<-- "includes/example-module-based-app-module.md"

Notice how the [Typescript's `satisfies` operator][typescript-satisfies] helps again ensuring the metadata values JSON matches the expected shape. For more information check [metadata values JSON guide](metadata-values-json.md)

## Next steps

Library comes with some built-in modules to help you set common metadata for websites. What modules are there and what metadata they provide? Check out next section about [built-in modules](../built-in-modules/index.md)!

If you want to optimize your main bundle size, take a look at [late loading modules guide](late-loading-modules.md)
