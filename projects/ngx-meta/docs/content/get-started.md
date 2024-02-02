# Get started

Glad you're here 🥰 Let's set it up in 3 steps ⚡️

## ➕ 1. Install

```
ng add @davidlj95/ngx-meta
```

Or just use your package manager's `install` command[^1]

## ⚙️ 2. Setup

Let's add the library to your Angular site and set some standard `#!html <meta>` tags.

=== "For non-standalone, module-based apps"

    This is the default for apps generated with Angular CLI before v17

    Open your `app.module.ts` file and add at least the core module to the `imports` section. If you want to set metadata in each route's `data` using Angular's `Router`, add the routing module too. In order to set some standard `<meta>`s, let's add the standard module.

    ```typescript
    @NgModule({
      // ...
      imports: [
        // ...
        NgxMetaCoreModule.forRoot(),
        NgxMetaRoutingModule.forRoot(),
        NgxMetaStandardModule,
      ],
      // ...
    })
    export class AppModule {}
    ```

    Check out the [Angular v16 example app]'s [`app.module.ts` file](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/e2e/a16/src/app/app.module.ts) for a full app module file example

=== "For standalone, module-free apps"

    This is the default for apps generated with Angular CLI v17 and above

    Open your `app.config.ts` file and add at least the core provider to the     `providers` section. If you want to set metadata in each route's `data`     using Angular's `Router`, add the routing provider too. In order to set some     standard `<meta>`s, let's add the standard provider.

    ```typescript
    export const appConfig: ApplicationConfig = {
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(),
        provideNgxMetaStandard(),
        // ...
      ],
    }
    ```

    Check out the [Angular v17 example app]'s [`app.config.ts` file](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/e2e/a17/src/app/app.config.ts) for a full config file example

## 🏷️ 3. Set some metadata

### Using the service

Open a component file that is rendering a page / route. Inject the service. And call it to set the metadata. For instance, in [`ngOnInit`](https://angular.dev/guide/components/lifecycle#ngoninit):

```typescript
import { NgxMetaService, GlobalMetadata } from '@davidlj95/ngx-meta/core'
import { StandardMetadata } from '@davidlj95/ngx-meta/standard'
// ...

@Component({
  // ...
})
export class CoolPageComponent implements OnInit {
  constructor(private readonly ngxMetaService: NgxMetaService) {}

  ngOnInit(): void {
    this.ngxMetaService.set({
      title: 'Cool page',
      description: '⚠️ Contains awesomeness',
    } satisfies GlobalMetadata & StandardMetadata)
  }
}
```

That's it, you should see the `#!html <title>` and `#!html <meta name="description">` set in that page with the values you provided ✨

[Typescript's `satisfies` operator][typescript-satisfies] will help you write the proper JSON of metadata values to set. Later we'll get into what's that `GlobalMetadata` type

Check out the [Angular v17 example app]'s [`meta-set-by-service.component.ts` file](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/e2e/a17/src/app/meta-set-by-service/meta-set-by-service.component.ts) for a full component file example

!!! info "Metadata set by service won't be cleared by default"

    Metadata set (in the example, `#!html <title>` and `#!html <meta name="description">`) will stay when the route changes if the routing module / provider hasn't been added. If you want those metadata values to get removed when changing route without adding the routing module / provider, you can add a call to the service on the `ngOnDestroy` hook:

    ```typescript
    @Component({
      // ...
    })
    export class CoolPageComponent implements OnInit, OnDestroy {
      constructor(private readonly ngxMetaService: NgxMetaService) {}

      // ...
      ngOnDestroy(): void {
        //👇 Clear metadata when changing page
        //   If you have enabled the routing module / provider, this is not needed
        this.ngxMetaService.clear()
      }
    }
    ```

### Using [route's data]

If you added the routing module / provider, you can set the metadata for a page using a [route's data]. For instance:

```typescript
import { NgxMetaRouteData } from '@davidlj95/ngx-meta/routing'
import { GlobalMetadata } from '@davidlj95/ngx-meta/core'
import { StandardMetadata } from '@davidlj95/ngx-meta/standard'

export const routes: Routes = [
  // ...
  {
    path: 'cool-page',
    component: CoolPageComponent,
    data: {
      meta: {
        title: 'Cool page',
        description: '⚠️ Contains awesomeness',
      } satisfies NgxMetaRouteData<GlobalMetadata & StandardMetadata>,
    },
  },
]
```

That's it, you should see the `#!html <title>` and `#!html <meta name='description'>` set in the `cool-page` page with the values you provided ✨

As with the service case, [Typescript's `satisfies` operator][typescript-satisfies] will help you write the proper JSON of metadata values to set. Later it will be explained what's that `GlobalMetadata` type

Check out the [Angular v17 app `app.routes.ts` file](../e2e/a17/src/app/app.routes.ts) for a full routes file example

## 🗺️ 4. Explore [all metadata you can set](https://www.youtube.com/watch?v=1kzb6uf0U0k)

A forth step? You lied to me 😢 Well you had some metadata in your site at end of step 3 😜

Now, do you wonder what metadata can you set? Typescript types can help you.

Following the example, inspect `GlobalMetadata` and `StandardMetadata` types to see all values you can set.

### Global metadata

`GlobalMetadata` defines metadata values that will be used by several modules. For instance, the `title` will be used by standard module to set the page's `#!html <title>`. But it will also be used by [Open Graph] module (if added) to set the `#!html <meta property='og:title'>` element.

### Module metadata

`StandardMetadata` defines metadata values that will be used only by the standard module. That's why all values should be placed under the `standard` key.

You can inspect what metadata can be set using that module. And which of those can be set as global ones so they're also shared with other modules. If you specify a module value and a global value, specific will take preference.

For instance if setting those values (either using service or route data):

```typescript
const metadataValues: GlobalMetadata & StandardMetadata = {
  title: 'Global title',
  standard: {
    title: 'Standard title',
  },
}
```

The `#!html <title>` element will contain `Standard title`. But other modules will use `Global title`.

By convention, each metadata module provides at least (where `X` is name of module):

- An `NgxMetaXModule` or `provideNgxMetaX` module or provider. To add it to the app (see step 2)
- An `XMetadata` type with all metadata it can set.

What modules are there and what metadata they provide? Checkout next section about [built-in modules](./built-in-modules)!

[^1]: The library doesn't include any schematics for now
