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

That's it, you should see the `#!html <title>`, `#!html <meta name="description">` and `#!html <meta name="keywords">` set in that page with the values you provided ✨

--8<-- "includes/title-description-global.md"

As with the service case, [Typescript's `satisfies` operator][typescript-satisfies] will help you write the proper JSON of metadata values to set.

**The [`NgxMetaRouteData`](ngx-meta.ngxmetaroutedata.md) utility type** ensures route data is inside `meta` key of the route's data.

As per the global and standard types to shape the metadata values JSON, take a look at [metadata values JSON guide](metadata-values-json.md) for more information about it.

Check out the [example standalone app] [`app.routes.ts` file](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/example-apps/templates/standalone/src/app/app.routes.ts) for a full routes file example
