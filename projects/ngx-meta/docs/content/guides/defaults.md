# Defaults

If you want every page in your site to have some metadata values, a good option is to use the defaults feature.

This way, everytime you set your metadata values (either using the service or the route's data), if no value is provided for some metadata, default value will be used instead.

## Providing default values

=== "For non-standalone, module-based apps"

    This is the default for apps generated with Angular CLI before v17

    Open your `app.module.ts` where [`NgxMetaCoreModule`](../api/ngx-meta.ngxmetacoremodule.md) is imported. Provide your default values by calling [`NgxMetaCoreModule.forRoot`](../api/ngx-meta.ngxmetacoremodule.forroot.md) with the options object.

    ```typescript
    @NgModule({
      // ...
      imports: [
        // ...
        NgxMetaCoreModule.forRoot({
          defaults: {
            description: "Awesome products made real ✨"
          } satisfies GlobalMetadata
        }),
      ],
      // ...
    })
    export class AppModule {}
    ```


    Check out the [Angular v16 example app]'s [`app.module.ts` file](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/e2e/a16/src/app/app.module.ts) for a full app module file example

=== "For standalone, module-free apps"

    This is the default for apps generated with Angular CLI v17 and above

    Open your `app.config.ts` file where [`provideNgxMetaCore`](../api/ngx-meta.providengxmetacore.md) is provided. Provide your default values by adding a call to [`withNgxMetaDefaults`](../api/ngx-meta.withngxmetadefaults.md) with the default values to set.

    ```typescript
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

    Check out the [Angular v17 example app]'s [`app.config.ts` file](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/e2e/a17/src/app/app.config.ts) for a full config file example

Notice how the [Typescript's `satisfies` operator][typescript-satisfies] helps again ensuring the metadata values JSON matches the expected shape.

You can use there a combination of global and module specific metadata values [as seen in previous guide](./global-and-module-metadata.md)
