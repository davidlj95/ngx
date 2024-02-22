# Metadata values JSON

As seen in previous guides, metadata values can be set by describing them in a JSON object. Which will then be used by [the service](set-metadata-using-service.md) or the [routing module](set-metadata-using-routing.md) to set the actual metadata elements on the page.

## Typescript types

To help you properly shape the JSON, the library provides you with some Typescript types that will help you ensure the shape of the JSON is the proper one. There's not a single one containing all metadata values possible given the plug-in based architecture of the library. So in order to specify the type of your metadata values JSON, you may need to combine several using the `&` operator.

For instance, in [get started](get-started.md) global metadata values (described by type [`GlobalMetadata`](ngx-meta.globalmetadata.md)) and [standard module] metadata values (described by type [`StandardMetadata`](ngx-meta.standardmetadata.md)) are used together:

```typescript
import { GlobalMetadata } from '@davidlj95/ngx-meta/core'
import { StandardMetadata } from '@davidlj95/ngx-meta/standard'

const metadataValuesJson: GlobalMetadata & StandardMetadata = {
  title: 'Cool page',
  description: 'Contains awesomeness',
  standard: {
    keywords: ['cool', 'awesomeness'],
  },
}
```

## Shared and specific metadata

Essentially there are two main kind of metadata values, global / shared metadata values and module / specific metadata values.

### Global, shared metadata

Global metadata values are used by more than one [built-in metadata module](../built-in-modules/index.md). That will probably set more than one metadata element in the page.

For instance, you may want the title of your page to be used for the standard's HTML `#!html <title>` element and for the Open Graph's `#!html <meta property='og:title'>`.

Values intended to be shared across many metadata elements are defined in **the [`GlobalMetadata`](ngx-meta.globalmetadata.md) type**. The type specifies their names and which [built-in metadata modules](../built-in-modules/index.md) will use those values. Check out the [type's API reference here](ngx-meta.globalmetadata.md) or in your IDE to learn more.

By convention, those are placed as keys in the JSON object used to set the metadata values

For instance:

```typescript
import { GlobalMetadata } from '@davidlj95/ngx-meta/core'

const metadataValues: GlobalMetadata = {
  title: "Page's title",
}
```

Defines the [`GlobalMetadata.title`](ngx-meta.globalmetadata.title.md) which will set the HTML's `#!html <title>` if [standard module] is present, the `#!html <meta property='og:title'>` if [Open Graph module] is present, and `#!html <meta name="twitter:title">` if [Twitter Cards module] is present.

### Module, specific metadata

Module, specific metadata values are those that will be used by just one module. For instance, [`StandardMetadata`](ngx-meta.standardmetadata.md) type defines metadata values that will be used only by the [standard module]. In the first example of the page, `keywords` is specified under the `standard` key, because it only matters to the `standard` module.

By convention, that's why all module metadata values are placed inside a key with the name of the module. For instance, as you've seen, [standard module] metadata values, are set under the `standard` key. You can inspect the type to know what metadata can be set using that module.

For instance:

```typescript
import { StandardMetadata } from '@davidlj95/ngx-meta/standard'

const metadataValues: StandardMetadata = {
  standard: {
    title: "Page's title",
  },
}
```

Defines the [`StandardMetadata.title`](ngx-meta.standard.title.md) which will set the HTML's `#!html <title>` if [standard module] is present. However, this value won't be used by other modules. For instance `#!html <meta property='og:title'>` will be empty if [Open Graph module] is present, given only standard `title` prope

#### Metadata module types convention

By convention, each metadata module exports a type named `XMetadata` (where `X` is the name of the module). So you can know what each metadata each module can set.

### Combining both

If you specify a module specific value and a global shared value, specific will take preference.

For instance if setting those values:

```typescript
const metadataValues: GlobalMetadata & StandardMetadata = {
  title: 'Global title',
  standard: {
    title: 'Standard title',
  },
}
```

The `#!html <title>` element set by [standard module] will contain `Standard title`. But other modules , like [Open Graph module] will use `Global title` instead. So if [Open Graph module](open-graph.md) is present, the title property element will be `#!html <meta property='og:title' content='Global title'`. Of course, you could also set a specific title for Open Graph too.

## Next steps

Library comes with some built-in modules to help you set common metadata for websites. What modules are there and what metadata they provide? Check out next section about [built-in modules](../built-in-modules/index.md)!

Do you want to use some metadata values as default for all pages? Check out the [defaults guide](defaults.md)
