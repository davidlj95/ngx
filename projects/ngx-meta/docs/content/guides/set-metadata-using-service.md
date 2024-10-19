# Set metadata using the service

One way you can set metadata in your page is using the library's main service: [`NgxMetaService`](ngx-meta.ngxmetaservice.md)

The service helps you set metadata in the page by passing a JSON object containing all metadata values to set. See [`NgxMetaService.set`](ngx-meta.ngxmetaservice.set.md).

## Setting some metadata

--8<-- "includes/service-usage.md"

### Multiple calls

The service is designed to set the metadata values of a page. So further calls to set metadata values won't actually expand the current metadata values, but replace them instead. The only exception is the routing module. Where you can provide some metadata in the route, some in the service and both will be combined. See [routing guide section about it for more information](set-metadata-using-routing.md#using-routes-data-and-service)

!!! note "You can call this API anywhere you want"

    Examples do it inside `ngOnInit` to set metadata as early as possible. Though you may want to call it in other places (like `ngOnChanges`). Feel free to call the [`NgxMetaService.set` API](ngx-meta.ngxmetaservice.set.md) API wherever you want :)

If you want to just set a specific metadata value, see next section about [setting a single metadata value](#setting-a-single-metadata-value)

## Setting a single metadata value

In some cases you may not want to set all metadata elements of the page, but just change a specific one or a few instead. This is useful when some metadata values come asynchronously (ie: from an API). You can set the static ones you know and change the asynchronous ones when they arrive. To do so, you can use the [`NgxMetaService.setOne` API](ngx-meta.ngxmetaservice.setone.md)

For instance, let's say you want to set a new title. If using [`NgxMetaService.set` API](ngx-meta.ngxmetaservice.set.md) as in previous section, you'd do it like this:

```typescript
import { NgxMetaService, GlobalMetadata } from '@davidlj95/ngx-meta/core'
// ...

@Component({
  // ...
})
export class CoolPageComponent implements OnInit {
  constructor(private readonly ngxMetaService: NgxMetaService) {}

  ngOnInit(): void {
    this.ngxMetaService.set({
      title: 'Another title for the cool page',
    } satisfies GlobalMetadata)
  }
}
```

However, **that would clear every other managed metadata from the page**. For instance, if you had set its description or keywords, they would be gone.

If you want to instead just change the title and leave everything as it is, use the [`NgxMetaService.setOne` API](ngx-meta.ngxmetaservice.setone.md). Specify the JSON Path that you'd use if specifying a JSON containing metadata values and the value for that metadata. Previous example of altering just the title could be done with

```typescript
import { NgxMetaService, GlobalMetadata } from '@davidlj95/ngx-meta/core'
// ...

@Component({
  // ...
})
export class CoolPageComponent implements OnInit {
  constructor(private readonly ngxMetaService: NgxMetaService) {}

  ngOnInit(): void {
    this.ngxMetaService.setOne('title' satisfies keyof GlobalMetadata, 'Another title for the cool page')
  }
}
```

That would alter the existing title, but leave rest of metadata elements as they are. Here the `#!typescript satisfies keyof GlobalMetadata` would ensure that `title` actually refers to a global key. For more information about the metadata values JSON, check [its guide](metadata-values-json.md)

!!! note "Title is a global: many metadata elements may change"

    Given `title` is specified as a global key. So `#!html <title>` element will be changed if [standard module] is present. But `#!html <meta property="og:title">` will be also changed if [Open Graph module] is present.

If instead you wanted to alter keywords, which is specified under the standard's module `standard` key:

```javascript
{
  standard: {
    keywords: ['foo', 'bar']
  }
}
```

Specify the path to the property, using dots to access subkeys. For instance, to alter the keywords only:

```typescript
import { NgxMetaService, GlobalMetadata } from '@davidlj95/ngx-meta/core'
// ...

@Component({
  // ...
})
export class CoolPageComponent implements OnInit {
  constructor(private readonly ngxMetaService: NgxMetaService) {}

  ngOnInit(): void {
    this.ngxMetaService.setOne('standard.keywords', ['other', 'keywords'])
  }
}
```

!!! note "You can call this API anywhere you want"

    Examples do it inside `ngOnInit` to set metadata as early as possible. Though in real world examples, some metadata values may not be available at that point. They may come asynchronously. Feel free to call the [`NgxMetaService.setOne` API](ngx-meta.ngxmetaservice.setone.md) after receiving the result from a `Promise` / `Observable` if you need to :)

## Clearing metadata

In the example, we set the elements `#!html <title>` and `#!html <meta name="description|keywords">`. Those will stay when the route changes if the library's routing module has not been added. If you want those metadata values to get removed when changing route without adding the library's routing module, you can add a call to the service on the [`ngOnDestroy`](https://angular.dev/guide/components/lifecycle#ngondestroy) hook:

```typescript
@Component({
  // ...
})
export class CoolPageComponent implements OnInit, OnDestroy {
  constructor(private readonly ngxMetaService: NgxMetaService) {}
  // ...
  ngOnDestroy(): void {
    //👇 Clear metadata when changing page
    //   If you have enabled the library's routing module, this is not needed
    this.ngxMetaService.clear()
  }
}
```

## Using routing module and service

See [routing guide section about it](set-metadata-using-routing.md#using-routes-data-and-service)

## Next steps

To set your metadata in a more declarative fashion, check out how you can set your metadata in your Angular's [route's data] in the [routing module guide](set-metadata-using-routing.md).

To know more about the shape of the JSON containing metadata values to set, take a look at the [metadata values JSON guide](metadata-values-json.md)
