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

First, you'll need to implement an [`NgxMetaMetadataManager`](ngx-meta.ngxmetametadatamanager.md). A metadata manager is an abstraction whose purpose is to:

- **Set some metadata elements** in the page by providing a metadata setter function
- **Specify what part of the metadata values JSON is needed** to be passed to the setter function (resolution options)

This may sound frightening, but it's not!

### Using a class

You can implement it by defining a class that implements the interface:

<!-- prettier-ignore-start -->

```typescript
import { 
    makeKeyValMetaDefinition, 
    NgxMetaMetadataManager, 
    NgxMetaMetaService 
} from '@davidlj95/ngx-meta/core'

const JSON_PATH = ['custom', 'title']

@Injectable({ providedIn: 'root' })
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

  constructor(private readonly ngxMetaMetaService: NgxMetaMetaService) {}

  // Type is constrained by specifying `<string | undefined>` above
  public set(value: string | undefined): void {
    this.ngxMetaMetaService.set(makeKeyValMetaDefinition('custom:title'), value)
  }
}
```

<!-- prettier-ignore-end -->

--8<-- "includes/ngx-meta-meta.md"

This option is presented first as it's the traditional, Angular'ish way of working (services & `@Injectable` decorators). However, do check out another way of implementing it (see in below box why)

!!! warning "Prefer factory functions instead"

    Angular's `@Injectable` [takes around 200 bytes of overhead to perform the dependency injection][bundle size issue]. If writing many managers, do prefer using providers instead (see next section)

If you don't need any dependencies injection, this approach is definitely cleaner. But that's extremely rare. You'll probably need at least the [`DOCUMENT`](https://angular.dev/api/common/DOCUMENT) to safely manage the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) / HTML of the page.

### Using a factory provider (recommended)

Another way is to directly create an object implementing the interface and define an Angular's [`Provider`] to inject dependencies. Specifically, [a factory provider](https://angular.dev/guide/di/dependency-injection-providers#factory-providers-usefactory)

Main benefit of this approach is **bundle size reduction** (see warning in previous section). Which is noticeable when writing many small managers. Which the library does and encourages you to do so.

Let's get hands-on! To avoid writing a provider yourself, the library provides a useful function to create a factory provider: [`makeMetadataManagerProviderFromSetterFactory`](ngx-meta.makemetadatamanagerproviderfromsetterfactory.md).
Again, don't let the scarily long name frighten you, [it doesn't bite](https://knowyourmeme.com/memes/does-he-bite).

It takes as argument function that creates a metadata setter given some dependencies. Call it a setter factory. Then, allows you to customize the other elements of a metadata manager.

<!-- prettier-ignore-start -->

```typescript
import { 
    makeKeyValMetaDefinition, 
    makeMetadataManagerProviderFromSetterFactory, 
    NgxMetaMetaService 
} from '@davidlj95/ngx-meta/core'

const CUSTOM_TITLE_METADATA_MANAGER_PROVIDER = makeMetadataManagerProviderFromSetterFactory(
  (ngxMetaMetaService: NgxMetaMetaService) => 
    ngxMetaMetaService.set(
      makeKeyValMetaDefinition('custom:title'), 
      value
    ), 
  {
    // Dependencies to pass to the setter factory
    d: [NgxMetaMetaService],
    // JSON Path to resolve the value from the values JSON
    // Will also be used as id
    jP: ['custom', 'title'],

    // 👇 If we want that global `title` key in the metadata values
    //    JSON is used as custom title if non specific is provided
    //    You can skip this one if N/A
    g: 'title' satisfies keyof GlobalMetadata,
  }
)
```


<!-- prettier-ignore-end -->

--8<-- "includes/ngx-meta-meta.md"

That would be it, there you have your metadata manager provider, ready to inject into your Angular's app dependencies.

See the API reference of [`makeMetadataManagerProviderFromSetterFactory`](ngx-meta.makemetadatamanagerproviderfromsetterfactory.md) for more information

You can also check a full example at [Angular v17 example app]'s [`provideCustomMetadataManager`](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/e2e/a17/src/app/meta-late-loaded/provide-custom-metadata-manager.ts)

## 2. Inject it

Now that you have implemented your manager, you can inject it into your Angular's app dependencies so the library can use it.

### Injecting the class

If you implemented using an `#!typescript @Injectable` class with the `#!javascript {providedIn: 'root'}` option, nothing else is needed 🎉

Otherwise, create a [class provider](https://angular.dev/guide/di/dependency-injection-providers#class-providers-useclass) and add it to your main app file. In a similar fashion as you would do with a built-in metadata module like [standard module] in the [get started setup] step

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
        }
      ]
    })
    export class AppModule {}
    ```

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
        }
      ]
    })
    ```

### Injecting the factory provider

The provider has been created already, so you just need to add it to your main app file. In a similar fashion as you would do with a built-in metadata module like [standard module] in the [get started setup] step

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

!!! tip "You can also (lazy) load it later"

    You can also load the custom metadata manager later. This means it can be lazy loaded too (if you want). You can do it in a similar way you would with a built-in metadata module. Check out the [late loading modules guide](late-loading-modules.md) for more information. The only change is instead of adding a built-in metadata module, you'll add your class provider or factory provider as explained above.

## ❤️ Contributions are welcome!

Feel free to share your custom metadata managers with the community by making them built-in modules of the library. Built-in modules of the library are actually a bunch of grouped factory providers. The only requirements for new built-in modules to be accepted are that metadata managed:

- Has some docs online
- Is popular enough (a bit subjective, I know :P)

Otherwise, you can also package them and ship them separately.
