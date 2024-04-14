Open a component file that is rendering a page / route. Inject the [`NgxMetaService`](/api/ngx-meta.ngxmetaservice/) service. And call the [`NgxMetaService.set` API](/api/ngx-meta.ngxmetaservice.set/) to set the metadata. For instance, in [`ngOnInit`](https://angular.dev/guide/components/lifecycle#ngoninit):

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
      standard: {
        keywords: ['cool', 'awesomeness'],
      },
    } satisfies GlobalMetadata & StandardMetadata)
  }
}
```

That's it, you should see the `#!html <title>`, `#!html <meta name="description">` and `#!html <meta name="keywords">` set in that page with the values you provided ✨

--8<-- "includes/title-description-global.md"

[Typescript's `satisfies` operator][typescript-satisfies] will help you write the proper JSON of metadata values to set. Take a look at [metadata values JSON guide](metadata-values-json.md) for more information about this values JSON.

Check out the [example standalone app]'s [`all-meta-set-by-service.component.ts` file](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/examples/templates/standalone/src/app/all-meta-set-by-service/all-meta-set-by-service.component.ts) for a full component file example
