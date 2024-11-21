Notice the use of [`NgxMetaElementsService`](/api/ngx-meta.ngxmetaelementsservice/). It's similar to [Angular's `Meta` service](https://angular.dev/api/platform-browser/Meta) to manage `#!html <meta>` elements. With the difference that it is designed in a declarative fashion. For instance, if contents to set are `null` or `undefined`, it will remove those `#!html <meta>` elements from the page. It also allows to manage multiple `#!html <meta>` elements. For more information about how to use it, see [its API reference docs](/api/ngx-meta.ngxmetaelementsservice.set/)

!!! danger "Remove the element if value is undefined (or null)"

    That's a convention of the library to work as expected. If you don't provide a value in your metadata values JSON, it is expected that the metadata element will disappear from the page. But as a metadata manager, you actually need to remove it! That's why [`NgxMetaElementsService`](/api/ngx-meta.ngxmetaelementsservice/) is used, to facilitate this process.

??? question "Were you looking for `NgxMetaMetaService`?"

    It has been deprecated. See the [migration guide](/migrations/01-meta-element-apis/) for more information on how to migrate and why it has been deprecated.
