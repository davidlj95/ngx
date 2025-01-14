# Standard

This module allows managing HTML `#!html <meta>` tags whose [`name` attribute is defined in the HTML specification][html-spec-standard-metas] and the site's `#!html <title>`. We call those [standard meta tags]

## Setup

Depending on what metadata you need to set, add one of more of the following providers.

### Main

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Add [`provideNgxMetaStandard()`](ngx-meta.providengxmetastandard.md) to your standalone app's `app.config.ts` file providers. Check out [get started setup] for more details.

    ```typescript title="app.config.ts"
    import {provideNgxMetaStandard} from '@davidlj95/ngx-meta/standard';

    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaStandard(),
        // ...
      ],
    }
    ```

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Add [`provideNgxMetaStandard()`](ngx-meta.providengxmetastandard.md) to your module-based app's `app.module.ts` file. Check out [get started setup] for more details.

    ```typescript title="app.module.ts"
    import {provideNgxMetaStandard} from '@davidlj95/ngx-meta/standard';

    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaStandard(),
        // ...
      ],
      // ...
    })
    export class AppModule {}
    ```

#### Metadata

To check all the metadata that can be set with this module, check out

[`Standard` API Reference](ngx-meta.standard.md)

## Utility type

Following Typescript type will help you provide metadata values:

```typescript
import { StandardMetadata } from '@davidlj95/ngx-meta/standard'

const metadata = {
  standard: {
    keywords: ['cool', 'site'],
  },
} satisfies StandardMetadata
```

[`StandardMetadata` API Reference](ngx-meta.standardmetadata.md)

## Resources

- [List of standard metas in MDN][standard meta tags]
- [Standard metadata names in HTML specification][html-spec-standard-metas]

[html-spec-standard-metas]: https://html.spec.whatwg.org/multipage/semantics.html#standard-metadata-names
