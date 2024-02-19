# Set metadata using the service

One way you can set metadata in your page is using the library's main service: [`NgxMetaService`](ngx-meta.ngxmetaservice.md)

The service helps you set metadata in the page by passing a JSON object containing all metadata values to set. See [`NgxMetaService.set`](ngx-meta.ngxmetaservice.set.md).

## Usage

### Setting some metadata

--8<-- "includes/service-usage.md"

#### Multiple calls

The service is designed to set the metadata values of a page. So further calls to set metadata values won't actually expand the current metadata values, but replace them instead. The only exception is the routing module. Where you can provide some metadata in the route, some in the service and both will be combined. See [routing guide section about it for more information](set-metadata-using-routing.md#using-routes-data-and-service)

### Clearing metadata values

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

## Using routing module and service

See [routing guide section about it](set-metadata-using-routing.md#using-routes-data-and-service)

## Next steps

Check out how can you set your metadata in your Angular's [route's data] in the [routing module guide](set-metadata-using-routing.md). To know more about the shape of the JSON containing metadata values to set, take a look at the [metadata values JSON guide](metadata-values-json.md)
