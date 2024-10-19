# Get started

Glad you're here 🥰 Let's set it up in 3 steps ⚡️

## ➕ 1. Install

```shell
ng add @davidlj95/ngx-meta
```

The command will install the library and add the core provider to your app configuration or root module.

## ⚙️ 2. Setup

Let's add the library to your Angular site and set some standard `#!html <meta>` tags.

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Open your `app.config.ts` file. Add at least the core provider to the `providers` section. It should be there already if installed the library with `ng add`.

    If you want to set metadata in each route's `data` using Angular's `Router`, add the library's routing module too.

    In order to set some standard `#!html <meta>`s, let's add the [standard module] provider.

    ```typescript title="app.config.ts"
    import {provideNgxMetaCore} from '@davidlj95/ngx-meta/core'
    import {provideNgxMetaRouting} from '@davidlj95/ngx-meta/routing'
    import {provideNgxMetaStandard} from '@davidlj95/ngx-meta/standard'

    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaStandard(),
        // ...
      ],
    }
    ```

    --8<-- "includes/example-standalone-app-config.md"

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Open your `app.module.ts` file. Add at least the library's core module to the `providers` section. It should be there already if installed the library with `ng add`.

    If you want to set metadata in each route's `data` using Angular's `Router`, add the library's routing module too.

    In order to set some standard `<meta>`s, let's add the [standard module].

    ```typescript title="app.module.ts"
    import {provideNgxMetaCore} from '@davidlj95/ngx-meta/core'
    import {provideNgxMetaRouting} from '@davidlj95/ngx-meta/routing'
    import {provideNgxMetaStandard} from '@davidlj95/ngx-meta/standard'

    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaStandard(),
      ],
      // ...
    })
    export class AppModule {}
    ```

    --8<-- "includes/example-module-based-app-module.md"

??? tip "Lazy load them if you want!"

    You can load metadata modules (like [Open Graph module]) later. They can be lazy loaded too actually. So if you don't need all metadata modules to be available in all your app, you can reduce the main bundle size by loading some later. Check out the [late loading modules guide](late-loading-modules.md) for more information

## 🏷️ 3. Set some metadata

### Using the service

--8<-- "includes/service-usage.md"

!!! info "Metadata set by service won't be cleared by default"

    Those elements will be there even if you change the page unless the routing module is added.

    See [service guide about clearing metadata values](set-metadata-using-service.md#clearing-metadata-values) for more information

### Using [route's data]

If you added the library's routing module, you can set the metadata for a page using a [route's data]. For instance:

--8<-- "includes/routing-usage.md"

## 🗺️ Next steps

Want to learn more about how to set metadata using the service, the routing module or both of them at once? Check the **[service](set-metadata-using-service.md) and [routing](set-metadata-using-routing.md) module guides**.

To know about how to properly define the metadata values to set, check out the **[metadata values JSON guide](metadata-values-json.md)**

If you already know about all that, maybe you want to explore the **library's [built-in modules](./built-in-modules/index.md) that allow setting common metadata**.

Otherwise, take a look at "Guides" section to learn about other features of the library. If looking for examples, you can always check out [our example apps](example-apps.md) for some real examples on how to use the library.
