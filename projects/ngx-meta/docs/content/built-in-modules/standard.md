# Standard

This module allows managing HTML `#!html <meta>` tags whose `name` attribute is defined in the HTML specification and the site's `#!html <title>`. We call those [standard meta tags]

## Setup

Depending on what metadata you need to set, add one of more of the following modules / providers.

### Main

=== "For non-standalone, module-based apps"
Add `NgxMetaStandardModule` to your module-based app's `app.module.ts` file. Checkout [get started setup] for more details.

=== "For standalone, module-free apps"
Add `provideNgxMetaStandard()` to your standalone app's `app.config.ts` file providers. Checkout [get started setup] for more details.

## Types

Following Typescript types provide you with all implemented metadata:

- `StandardMetadata`

## Resources

- [List of standard metas in MDN][standard meta tags]
- [Standard metadata names in HTML specification](https://html.spec.whatwg.org/multipage/semantics.html#standard-metadata-names)
