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

[Typescript's `satisfies` operator][typescript-satisfies] will help you write the proper JSON of metadata values to set. Take a look at [metadata values JSON guide](metadata-values-json.md) for more information about it.

Check out the [Angular v17 example app]'s [`meta-set-by-service.component.ts` file](https://github.com/davidlj95/ngx/blob/main/projects/ngx-meta/e2e/a17/src/app/meta-set-by-service/meta-set-by-service.component.ts) for a full component file example
