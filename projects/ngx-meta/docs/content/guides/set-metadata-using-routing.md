# Set metadata using routing

Another way you can set metadata in your page is using the library's routing module. The module will listen to the Angular's [`Router`](https://angular.dev/api/router/Router) events and set the metadata[^1] for the page every time it detects the route has changed.

## Setup

First, ensure you added the module to your app.

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Open your `app.config.ts` file where [`provideNgxMetaCore`](ngx-meta.providengxmetacore.md) is provided. Ensure the routing module is added by adding a call to [`provideNgxMetaRouting`](ngx-meta.providengxmetarouting.md)

    ```typescript title="app.config.ts"
    import {provideNgxMetaCore} from '@davidlj95/ngx-meta/core'
    import {provideNgxMetaRouting} from '@davidlj95/ngx-meta/routing'

    export const appConfig: ApplicationConfig = {
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(),
        // ...
      ],
    }
    ```

    --8<-- "includes/example-standalone-app-config.md"

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Open your `app.module.ts` where [`provideNgxMetaCore`](ngx-meta.providengxmetacore.md) is provided. Ensure the routing module is added by adding a call to [`provideNgxMetaRouting`](ngx-meta.providengxmetarouting.md)

    ```typescript title="app.module.ts"
    import {provideNgxMetaCore} from '@davidlj95/ngx-meta/core'
    import {provideNgxMetaRouting} from '@davidlj95/ngx-meta/routing'

    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(),
      ],
      // ...
    })
    export class AppModule {}
    ```

    --8<-- "includes/example-module-based-app-module.md"

## Usage

Once the module has been set up, you can add the metadata values for a page in its [route's data]

--8<-- "includes/routing-usage.md"

## Benefits over using service

You'll be able to provide the metadata values for a page in a more declarative way by attaching that data next to where the route is defined. And save up some code by avoiding the boilerplate of calling `ngOnInit` as per [service usage](set-metadata-using-service.md). Also, metadata values will get cleared every time you navigate to another page (and replaced by that page's metadata values). To have some metadata values be present for every page, check out [how to set some metadata defaults](defaults.md)

However, you won't be able to set there dynamic values. For instance, if the route loads a product's detail (`/product/:id`), you won't be able to set at the route's data the specific product metadata given you don't know the product ID at that point yet. Unless...

## Using route's data and service

You can use both route's data and service to set the metadata values for a page. And both will be used when setting the metadata values in an additive manner.

For instance, if setting some metadata values in the [route's data]:

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
        standard: {
          keywords: ['cool', 'awesomeness'],
        },
      } satisfies NgxMetaRouteData<GlobalMetadata & StandardMetadata>,
    },
  },
]
```

And then some metadata values are provided using the service

```typescript
import { NgxMetaService, GlobalMetadata } from '@davidlj95/ngx-meta/core'

@Component({
  // ...
})
export class CoolPageComponent implements OnInit {
  constructor(private readonly ngxMetaService: NgxMetaService) {}

  ngOnInit(): void {
    this.ngxMetaService.set({
      image: {
        url: 'https://example.org/cool.png',
        alt: 'A koala riding a horse',
      },
    } satisfies GlobalMetadata)
  }
}
```

The final metadata values set will contain the `title`, `description`, `keywords` and `image` provided.

## Next steps

To know more about the shape of the JSON containing metadata values to set, check out the [metadata values JSON guide](metadata-values-json.md).

If you want to set some values for every page, disregarding the route, check out how to set some [default metadata values](defaults.md)

[^1]: Actually using the [`NgxMetaService`](ngx-meta.ngxmetaservice.md) APIs under the hood
