# Title formatting

Sometimes you may want to specify your site name or brand name in every page of your website[^1]. If that's the case, you may find yourself formatting page titles around every time:

```typescript
const BRAND = 'ACME Corp.'
const titleFormatter = (title: string) => `${title} - ${BRAND}`
// 👇 This can be repetitive
const productsPageMetadata = {
  title: titleFormatter('Products'),
} satisfies GlobalMetadata
```

If that's the case, don't worry, we're here to help 🎉

## Setup

You can provide a title formatting function to the library. Then, the built-in metadata managers that handle titles will call it to format the title before placing it as your title metadata.

To provide the title formatter function:

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Add [`withNgxMetaTitleFormatter`](ngx-meta.withngxmetatitleformatter.md) as a [`provideNgxMetaCore`](ngx-meta.providengxmetacore.md) feature to your standalone app's `app.config.ts` file providers.

    ```typescript title="app.config.ts"
    import {provideNgxMetaCore, withNgxMetaTitleFormatter} from '@davidlj95/ngx-meta/core';

    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        // ...
        provideNgxMetaCore(
          withNgxMetaTitleFormatter(
            (title) => `${title} - ACME Corp.`
          )
        ),
        // ...
      ],
    }
    ```

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Add [`withNgxMetaTitleFormatter`](ngx-meta.withngxmetatitleformatter.md) as a [`provideNgxMetaCore`](ngx-meta.providengxmetacore.md) feature in the app's `app.module.ts` file.

    ```typescript title="app.module.ts"
    import {provideNgxMetaCore, withNgxMetaTitleFormatter} from '@davidlj95/ngx-meta/core';

    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(
          withNgxMetaTitleFormatter(
            (title) => `${title} - ACME Corp.`
          )
        ),
        // ...
      ],
      // ...
    })
    export class AppModule {}
    ```

## Usage

That's it! When you set your metadata, the title formatter will be called before placing its output as the page's metadata. For instance, following the previous example:

```typescript
const metadata = {
  title: 'Products',
} satisfies GlobalMetadata
```

After the example setup, title metadata manager will use `Products - ACME Corp.` as page title to set.

To see which title metadata managers will use the formatter, check out [`withNgxMetaTitleFormatter` API docs](ngx-meta.withngxmetatitleformatter.md)

[^1]: See [`Standard.title` metadata](ngx-meta.standard.title.md) "See also" additional resources for more info
