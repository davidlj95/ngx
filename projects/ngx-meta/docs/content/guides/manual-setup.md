# Manual setup

If you don't want to use the `ng add` schematics to install and set up the library as described in [get started](get-started.md), you can install and set up the library manually.

## 1. Install the library

Using your package manager's install command. For instance, with `npm`:

```shell
npm install @davidlj95/ngx-meta
```

??? note "If using Angular v15 or v16"

    Run `npm install @davidlj95/ngx-meta@1.0.0-beta.38`. As latest v19 production version is not compatible with v15, v16. But latest beta version is. Soon will launch production versions to support older Angular versions. There are no other differences between last beta version and v19 version, so for now they can be used interchangeably.

## 2. Add library's providers

Now, let's add some providers to set the library up.

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Open your `app.config.ts` file. Add at least the core provider to the `providers` section.

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

    Open your `app.module.ts` file. Add at least the library's core module to the `providers` section.

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

## 3. Enjoy

You can use the library as usual now. Take a look at the steps after the setup in the [get started docs](get-started.md)
