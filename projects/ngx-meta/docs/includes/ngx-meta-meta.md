Notice the use of [`NgxMetaMetaService`](/api/ngx-meta.ngxmetametaservice/). It's a wrapper over [Angular's `Meta` service](https://angular.dev/api/platform-browser/Meta) to manage `#!html <meta>` elements. With the difference that it is able to remove them from the page when value is `undefined` or `null`. For more information about how to use it, see [its API reference docs](/api/ngx-meta.ngxmetametaservice/)

!!! danger "Remove the element if value is undefined (or null)"

    That's a convention of the library to work as expected. If you don't provide a value in your metadata values JSON, it is expected that the metadata element will disappear from the page. But as a metadata manager, you actually need to remove it! That's why [`NgxMetaMetaService`] is used, to facilitate this process.
