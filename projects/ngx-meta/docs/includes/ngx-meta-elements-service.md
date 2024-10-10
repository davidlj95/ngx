Notice the use of [`NgxMetaElementsService`](/api/ngx-meta.ngxmetaelementsservice/). It's similar to [Angular's `Meta` service](https://angular.dev/api/platform-browser/Meta) to manage `#!html <meta>` elements. With the difference that it is designed in a declarative fashion. For instance, if contents to set are `null` or `undefined`, it will remove those `#!html <meta>` elements from the page. It also allows to manage multiple `#!html <meta>` elements. For more information about how to use it, see [its API reference docs](/api/ngx-meta.ngxmetaelementsservice/)

!!! danger "Remove the element if value is undefined (or null)"

    That's a convention of the library to work as expected. If you don't provide a value in your metadata values JSON, it is expected that the metadata element will disappear from the page. But as a metadata manager, you actually need to remove it! That's why [`NgxMetaElementsService`](/api/ngx-meta.ngxmetaelementsservice/) is used, to facilitate this process.

??? tip "Were you looking for `NgxMetaMetaService`?"

    Before [`NgxMetaElementsService`](/api/ngx-meta.ngxmetaelementsservice/) APIs were introduced, the service managing those was [`NgxMetaMetaService`](/api/ngx-meta.ngxmetametaservice/). However, API design for it and related util functions was a bit limited. It also didn't allow to manage multiple `#!html <meta>` elements. So they were replaced. See [the PR were newer APIs were introduced](https://github.com/davidlj95/ngx/pull/883) for more information.

    Also, beware that built-in metadata modules use [`NgxMetaElementsService`](/api/ngx-meta.ngxmetaelementsservice/). So if using built-in metadata modules and [`NgxMetaMetaService`](/api/ngx-meta.ngxmetametaservice/) for your custom metadata managers, you'll be adding both meta element managers (the new and the old one) to your bundle. Therefore there'll be some unneeded extra bytes in your bundle size. As there are two pieces of code doing the same thing. Whereas if using [`NgxMetaElementsService`](/api/ngx-meta.ngxmetaelementsservice/), just this one will be included.
