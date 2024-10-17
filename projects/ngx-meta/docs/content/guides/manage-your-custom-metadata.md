# Manage your custom metadata

In [service guide](set-metadata-using-service.md), [routing guide](set-metadata-using-routing.md) and [metadata values JSON guide](metadata-values-json.md) it is explained how to set common metadata elements provided by library's [built-in metadata modules](../built-in-modules/index.md).

But if none of those fit your needs, thanks to the plug-in based architecture of the library, you can implement your own.

For instance, let's say you want to manage a `#!html <meta name='custom:title'>` metadata element. And that it will be provided as the `custom.title` value in the metadata values JSON. For instance:

```typescript
const metadataValues = {
  custom: {
    title: 'Custom title value',
  },
}
```

## 1. Implement a metadata manager

You'll need to implement an [`NgxMetaMetadataManager`](ngx-meta.ngxmetametadatamanager.md). A metadata manager is an abstraction whose purpose is to:

- **Set some metadata elements** in the page by providing a metadata setter function
- **Specify what part of the metadata values JSON is needed** to be passed to the setter function (resolution options)

This may sound frightening, but it's not! There are also some helpers to make this easy 🎉

### Using a factory provider (recommended)

Recommended way is to directly create an object implementing the interface and define an Angular [`Provider`](https://angular.dev/guide/di/dependency-injection-providers) to inject dependencies. Specifically, [a factory provider](https://angular.dev/guide/di/dependency-injection-providers#factory-providers-usefactory)

Main benefit of this approach is **bundle size reduction** (see warning in next section about using a class for more information). Which is noticeable when writing many small managers. Which the library does and encourages you to do so.

Let's get hands-on! To avoid writing a provider yourself, the library provides a useful function to create a factory provider: [`provideNgxMetaManager`](ngx-meta.providengxmetamanager.md).

You just need to provide as first argument the JSON Path of the metadata value you're interested in.
Then, as second argument, the metadata setter factory function ([`MetadataSetterFactory`](ngx-meta.metadatasetterfactory.md)).
🤯 What's that? The function that creates the function that manages metadata elements in the page.
This is useful to inject dependencies you may need for that purpose. Check out the example to grasp it better:

<!-- prettier-ignore-start -->

```typescript
import {
  provideNgxMetaManager,
  NgxMetaElementsService,
  withNameAttribute,
  withContentAttribute,
  withOptions,
  withManagerDeps,
} from '@davidlj95/ngx-meta/core'

export const provideCustomMetadataManager = () =>
  provideNgxMetaManager<string | undefined>(
    'custom.title',
    (metaElementsService: NgxMetaElementsService) => (value) => {
      metaElementsService.set(
        withNameAttribute('custom:title'),
        withContentAttribute(value),
      )
    },
    withOptions(
      withManagerDeps(NgxMetaElementsService),
      // 👇 If we want that global `title` key in the metadata values
      //    JSON is used as custom title if non specific is provided
      //    You can skip this one if N/A
      withGlobal('title'),
    ),
  )
```

<!-- prettier-ignore-end -->

That would be it, there you have your metadata manager provider, ready to inject into your Angular's app dependencies.

??? tip "You can use a helper to create and ensure a JSON Path is valid"

    In the example, instead of `custom.title` JSON Path, you can use [`withManagerJsonPath`](ngx-meta.withmanagerjsonpath.md) helper.
    It will:

      - Ensure keys are valid (belong to the given type).

      - Join the keys with a `.`

    ```typescript
    import {
      withManagerJsonPath,
    } from '@davidlj95/ngx-meta/core'

    interface CustomMetadata {
      custom: {
        title: string
      }
    }

    export const provideCustomMetadataManager = () =>
      provideNgxMetaManager<string | undefined>(
        withManagerJsonPath<CustomMetadata>('custom', 'title'),
        // ...
      )
    )
    ```

    Check out [`withManagerJsonPath` API docs](ngx-meta.withmanagerjsonpath.md) for more information and known limitations.

See the API reference of [`provideNgxMetaManager`](ngx-meta.providengxmetamanager.md) for more information.

You can also check a full example at [example standalone app]'s [`provideCustomMetadataManager`](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/example-apps/templates/standalone/src/app/meta-late-loaded/provide-custom-metadata-manager.ts)

--8<-- "includes/ngx-meta-elements-service.md"

??? tip "Where is the awfully long `makeMetadataManagerProviderFromSetterFactory` function?"

    Well [it's still there](ngx-meta.makemetadatamanagerproviderfromsetterfactory.md).
    But the one appearing above has been introduced as it's shorter and more developer friendly.
    If you need, you can still check [this guide when it was using it](https://github.com/davidlj95/ngx/blob/ngx-meta-v1.0.0-beta.20/projects/ngx-meta/docs/content/guides/manage-your-custom-metadata.md)
    Or the [example app file using it](https://github.com/davidlj95/ngx/blob/ngx-meta-v1.0.0-beta.20/projects/ngx-meta/example-apps/templates/standalone/src/app/meta-late-loaded/provide-custom-metadata-manager.ts)

    However, beware that those APIs are now deprecated and will be removed in the future. It's recommended to upgrade to the new one described in the guide as soon as you can.

    Also, built-in modules are using the new one. And if you use this, then two functions will end up in your bundle that do the same. So some extra unneeded bytes in there.

### Using a class

You can also implement it by defining a class that implements the interface:

<!-- prettier-ignore-start -->

```typescript
import {
  NgxMetaElementsService,
  NgxMetaMetadataManager,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'

const JSON_PATH = ['custom', 'title']

@Injectable()
class CustomTitleMetadataManager implements NgxMetaMetadataManager<string | undefined> {
  // Convention is to name id as the JSON path to access the value from
  // the metadata values JSON
  public readonly id = JSON_PATH.join('.')

  public readonly resolverOptions: MetadataResolverOptions = {
    jsonPath: JSON_PATH,
    // 👇 If we want that global `title` key in the metadata values
    //    JSON is used as custom title if non specific is provided
    //    You can skip this one if N/A
    global: 'title' satisfies keyof GlobalMetadata,
  }

  constructor(private readonly metaElementsService: NgxMetaElementsService) {
  }

  // Type is constrained by specifying `<string | undefined>` above
  public set(value: string | undefined): void {
    this.metaElementsService.set(
      withNameAttribute('custom:title'),
      withContentAttribute(value)
    )
  }
}
```

<!-- prettier-ignore-end -->

This option is the traditional, Angular'ish way of working (services & `@Injectable` decorators). However...

!!! warning "Prefer factory functions instead"

    Angular's `@Injectable` [takes around 200 bytes of overhead to perform the dependency injection][bundle size issue]. If writing many managers, do prefer using providers instead (as in previous section)

If you don't need any dependencies injection, this approach is definitely cleaner. But that's extremely rare. You'll probably need at least the [`DOCUMENT`](https://angular.dev/api/common/DOCUMENT) to manage the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) / HTML of the page.

--8<-- "includes/ngx-meta-elements-service.md"

## 2. Inject it

Now that you have implemented your manager, you can inject it into your Angular's app dependencies so the library can use it.

### Injecting the factory provider

The provider has been created already, so you just need to add it to your main app file. In a similar fashion as you would do with a built-in metadata module like [standard module] in the [get started setup] step

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Open your `app.config.ts` file. Add the created factory provider to the providers list.

    ```typescript title="app.config.ts"
    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        CUSTOM_TITLE_METADATA_MANAGER_PROVIDER,
      ]
    })
    ```

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Open your `app.module.ts` file. Add the created factory provider to the module.

    ```typescript title="app.module.ts"
    @NgModule({
      // ...
      providers: [
        CUSTOM_TITLE_METADATA_MANAGER_PROVIDER,
      ]
    })
    export class AppModule {}
    ```

??? tip "You can also (lazy) load it later"

    You can also load the custom metadata manager later. This means it can be lazy loaded too (if you want). You can do it in a similar way you would with a built-in metadata module. Check out the [late loading modules guide](late-loading-modules.md) for more information. The only change is instead of adding a built-in metadata module, you'll add your class provider or factory provider as explained above.

### Injecting the class

Create a [class provider](https://angular.dev/guide/di/dependency-injection-providers#class-providers-useclass) and add it to your main app file. In a similar fashion as you would do with a built-in metadata module like [standard module] in the [get started setup] step

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Open your `app.config.ts` file. Add the following provider:

    ```typescript title="app.config.ts"
    import {NgxMetaMetadataManager} from '@davidlj95/ngx-meta/core'

    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        {
          provide: NgxMetaMetadataManager,
          useClass: CustomTitleMetadataManager,
          multi: true,
        }
      ]
    })
    ```

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Open your `app.module.ts` file. Add the following provider to the module.

    ```typescript title="app.module.ts"
    import {NgxMetaMetadataManager} from '@davidlj95/ngx-meta/core'

    @NgModule({
      // ...
      providers: [
        {
          provide: NgxMetaMetadataManager,
          useClass: CustomTitleMetadataManager,
          multi: true,
        }
      ]
    })
    export class AppModule {}
    ```

## ❤️ Contributions are welcome!

Feel free to share your custom metadata managers with the community by making them built-in modules of the library. Built-in modules of the library are actually a bunch of grouped factory providers. The only requirements for new built-in modules to be accepted are that metadata managed:

- Has some docs online
- Is popular enough (a bit subjective, I know :P)

Otherwise, you can also package them and ship them separately.
