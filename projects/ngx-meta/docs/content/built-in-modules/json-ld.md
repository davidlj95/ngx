# JSON-LD

JSON-LD, which stands for [JSON Linked Data](https://json-ld.org/), is a lightweight data interchange format designed to be easy for humans to read and write, and easy for machines to parse and generate. It is a way to structure data in a format that is both human-readable and machine-readable. JSON-LD is particularly used for embedding structured data on the web, providing a standardized method for expressing linked data.

Structured data refers to a way of organizing and presenting data on the web to make it more understandable for search engines. This organization helps search engines better understand the content of a page and can enhance the display of search results with rich snippets. For instance, check [Google's docs about structured data markup in Google Search](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

JSON-LD is used in the context of structured data on the web by allowing website owners and developers to embed structured data directly into their HTML documents. This structured data is often in the form of [schema.org](https://schema.org) vocabulary, which provides a set of schemas (types, properties, and relationships) to describe various entities on the web, such as articles, events, products, and more.

The module allows you to embed a JSON-LD object inside a `#!html <script>` tag (with proper JSON-LD types set) under the `#!html <head>` of the page. It does no validation or whatsoever about the JSON-LD object set.

## Setup

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Add [`provideNgxMetaJsonLd()`](ngx-meta.providengxmetajsonld.md) to your standalone app's `app.config.ts` file providers. Check out [get started setup] for more details.

    ```typescript title="app.config.ts"
    import {provideNgxMetaJsonLd} from '@davidlj95/ngx-meta/json-ld';

    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaJsonLd(),
        // ...
      ],
    }
    ```

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Add [`provideNgxMetaJsonLd()`](ngx-meta.providengxmetajsonld.md) to your module-based app's `app.module.ts` file. Check out [get started setup] for more details.

    ```typescript title="app.module.ts"
    import {provideNgxMetaJsonLd} from '@davidlj95/ngx-meta/json-ld';

    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaJsonLd()
        // ...
      ],
      // ...
    })
    export class AppModule {}
    ```

## Utility type

Following Typescript type will help you provide metadata values:

```typescript
import { JsonLdMetadata } from '@davidlj95/ngx-meta/json-ld'

const metadata = {
  jsonLd: {
    '@context': 'https://schema.org/',
    '@type': 'Recipe',
    name: 'Party Coffee Cake',
    author: {
      '@type': 'Person',
      name: 'Mary Stone',
    },
    datePublished: '2018-03-10',
    description: 'This coffee cake is awesome and perfect for parties.',
    prepTime: 'PT20M',
  },
} satisfies JsonLdMetadata
```

[`JsonLdMetadata` API Reference](ngx-meta.jsonldmetadata.md)

## Resources

- [Google docs about structured data][structured data]
