# Metadata values JSON

As seen in previous guides, metadata values can be set by describing them in a JSON object. Which will then be used by [the service](set-metadata-using-service.md) or the [routing module](set-metadata-using-routing.md) to set the actual metadata elements on the page.

## Types and global / specific metadata

In order to properly shape your metadata values JSON, you can use several utility types. There's not a single one given the plug-in based architecture of the library, where each kind of metadata is handled by a separate module. However, there are two kinds of types as you may have noticed already in the previous guides.

For instance, in the [get started](get-started.md) example, the Typescript types [`GlobalMetadata`](ngx-meta.globalmetadata.md) and [`StandardMetadata`](ngx-meta.standardmetadata.md) were used to ensure we properly communicated the library what metadata to set.

This reveals another feature of the library. There are some values that can be reused to set multiple metadata. Whilst others are specific to a specific kind of metadata.

For instance, you may want the title of your page to be used for the standard's HTML `#!html <title>` element and for the Open Graph's `#!html <meta property='og:title'>`. Those values intended to be shared across many metadata elements are defined in:

### Global metadata

Global metadata values are values that will be used by many metadata elements set by [built-in modules](../built-in-modules/index.md). **The type [`GlobalMetadata`](ngx-meta.globalmetadata.md) collects them all**. The type specifies their names and which [built-in metadata modules](../built-in-modules/index.md) will use those values. Checkout the [type's API reference here](ngx-meta.globalmetadata.md) or in your IDE to learn more.

By convention, those are placed as keys in the JSON object used to set the metadata values (either calling the service or in the route's data)

For instance:

```typescript
import { GlobalMetadata } from '@davidlj95/ngx-meta/core'

const metadataValues: GlobalMetadata = {
  title: "Page's title",
}
```

Defines the [`GlobalMetadata.title`](ngx-meta.globalmetadata.title.md) which will set the HTML's `#!html <title>` if [standard module](standard.md) is present and the `#!html <meta property='og:title'>` if [Open Graph module](open-graph.md) is present.

### Module metadata

Module metadata values are those that will be used by just one module. For instance, [`StandardMetadata`](ngx-meta.standardmetadata.md) type defines metadata values that will be used only by the [standard module](standard.md). That's why all values are placed inside a key with the name of the module (by convention). For instance, for [standard module](standard.md) metadata values, they're set under the `standard` key. You can inspect the type to know what metadata can be set using that module. If the metadata can be shared by many modules, it will also specify which of those can be set as global ones.

For instance:

```typescript
import { StandardMetadata } from '@davidlj95/ngx-meta/standard'

const metadataValues: StandardMetadata = {
  standard: {
    title: "Page's title",
  },
}
```

Defines the [`StandardMetadata.title`](ngx-meta.standard.title.md) which will set the HTML's `#!html <title>` if [standard module](standard.md) is present. However, this value won't be used by other modules. For instance `#!html <meta property='og:title'>` will be empty if [Open Graph module](open-graph.md) is present, given only standard `title` property has been set.

## Combining global and module metadata

If you specify a module specific value and a global value, specific will take preference.

For instance if setting those values (again, either using service or route data):

```typescript
const metadataValues: GlobalMetadata & StandardMetadata = {
  title: 'Global title',
  standard: {
    title: 'Standard title',
  },
}
```

The `#!html <title>` element set by [standard module](standard.md) will contain `Standard title`. But other modules , like [Open Graph module](open-graph.md) will use `Global title` instead. So if [Open Graph module](open-graph.md) is present, the title property element will be `#!html <meta property='og:title' content='Global title'`. Of course, you could also set a specific title for Open Graph too.

## Module types convention

By convention, each module exports a type named `XMetadata` (where `X` is the name of the module). So you can know what each metadata each module can set.

## Next steps

Library comes with some built-in modules to help you set common metadata for websites. What modules are there and what metadata they provide? Checkout next section about [built-in modules](../built-in-modules/index.md)!

Do you want to use some metadata values as default for all pages? Checkout the [defaults guide](defaults.md)
