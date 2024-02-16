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

[Typescript's `satisfies` operator][typescript-satisfies] will help you write the proper JSON of metadata values to set. Later we'll get into what's that [`GlobalMetadata`](./api/ngx-meta.globalmetadata.md) type

Check out the [Angular v17 example app]'s [`meta-set-by-service.component.ts` file](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/e2e/a17/src/app/meta-set-by-service/meta-set-by-service.component.ts) for a full component file example

!!! info "Metadata set by service won't be cleared by default"

    Metadata set (in the example, `#!html <title>` and `#!html <meta name="description">`) will stay when the route changes if the routing module / provider hasn't been added. If you want those metadata values to get removed when changing route without adding the routing module / provider, you can add a call to the service on the [`ngOnDestroy`](https://angular.dev/guide/components/lifecycle#ngondestroy) hook:

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

As with the service case, [Typescript's `satisfies` operator][typescript-satisfies] will help you write the proper JSON of metadata values to set. Later it will be explained what's that [`GlobalMetadata`](./api/ngx-meta.globalmetadata.md) type

Check out the [Angular v17 example app] [`app.routes.ts` file](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/e2e/a17/src/app/app.routes.ts) for a full routes file example

## 🗺️ Next steps

Do you wonder what metadata can you set? Learn first about [global and module metadata](guides/global-and-module-metadata.md).

If you already know about that, maybe you want to explore the [built-in modules](./built-in-modules) that allow setting common metadata.

[^1]: The library doesn't include any schematics for now
