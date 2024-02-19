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

As with the service case, [Typescript's `satisfies` operator][typescript-satisfies] will help you write the proper JSON of metadata values to set.

Check out the [Angular v17 example app] [`app.routes.ts` file](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/e2e/a17/src/app/app.routes.ts) for a full routes file example
