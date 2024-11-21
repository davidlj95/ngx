# `<meta>` element APIs

## TL;DR

APIs to manage `<meta>` elements on the page changed to improve development experience. [`NgxMetaMetaService`](ngx-meta.ngxmetametaservice.md) and related APIs are deprecated in favour of [`NgxMetaElementsService`](ngx-meta.ngxmetaelementsservice.md) and related APIs

See [migration](#migration) for more info about how to migrate.

## Summary

| Key                            | Value              |
| :----------------------------- | :----------------- |
| Category of change             | 👎 **Deprecation** |
| Automatic migration schematics | No                 |
| Introduced in version          | `1.0.0-beta.24`    |

## Description

### Issue

[GitHub PR]: https://github.com/davidlj95/ngx/pull/883

[**🎟️ GitHub PR with details**][GitHub PR]

[theme color standard meta]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color

APIs to manage `<meta>` elements on the page had several issues:

- **Unneeded abstraction**: [`NgxMetaMetaService`](ngx-meta.ngxmetametaservice.md) requires as first argument an [`NgxMetaMetaDefinition`](ngx-meta.ngxmetametadefinition.md) and then the content to place in there. Idea behind that definition type was to model and manage a kind of `<meta>` elements. Like `<meta name="description">` for instance. But this can be done without introducing an additional type / abstraction. Which adds unnecessary cognitive load to do something simple as managing `<meta>` elements.
- **Limited abstraction**: [`NgxMetaMetaDescription`](ngx-meta.ngxmetametadefinition.md) has two properties:
  - [`attrSelector`](ngx-meta.ngxmetametadefinition.attrselector.md): identifies the kind of `<meta>` elements. Like `name="description"`. So they can be created, updated or removed depending on the metadata to set on the page. Nothing wrong with it.
  - [`withContent`](ngx-meta.ngxmetametadefinition.withcontent.md): a function that given some content as `string`, generates an Angular's [`MetaDefinition`](https://angular.dev/api/platform-browser/MetaDefinition). This was done so that Open Graph metadata name is placed in a `property` attribute. Though most names are placed in a `name` attribute. Or to customize the attribute holding the content if needed. However, sometimes more attributes are needed for a `<meta>` element. A `string` is then not enough to specify them all. Like [theme color standard meta].
- **Coupled API design**: [`NgxMetaMetaService`](ngx-meta.ngxmetametaservice.md) second argument is the content to set to the `<meta>` element. That content is a `string` because of [`NgxMetaMetaDefinition.withContent`](ngx-meta.ngxmetametadefinition.withcontent.md). It couples even more to the abstraction above. And also it inherits the limitation of being a `string`.
- **Can't set multiple `<meta>` elements**. If calling the API to set a given `<meta>`, it will replace existing element. Can't add more than one. This is an issue for metadata that may need multiple `<meta>` elements. Like [theme color standard meta] or [Open Graph arrays](https://ogp.me/#array)

- **Too long names**: I know, subjective. But [`NgxMetaMetaDefinition`](ngx-meta.ngxmetametadefinition.md) feels too long. Same for [`makeKeyValMetaDefinition`](ngx-meta.makekeyvalmetadefinition.md) and [`makeComposedKeyValMetaDefinition`](ngx-meta.makecomposedkeyvalmetadefinition.md)

### Solution

As APIs are coupled, introducing a compatibility layer on top of existing ones would:

- **Add more complexity** to existing ones to manage both old and new usages.
- **Increase bundle size** because of this extra compatibility layer

So newer APIs were designed to solve the existing issues. The goals of these new APIs are then:

- **No unneeded abstractions**: everything should be able to be specified without introducing extra abstractions. Using primitive types. Helper functions can be introduced as syntactic sugar.

- **Support `<meta>` elements with more attributes**: not just `name` and `content` ones. For instance [theme color standard meta] can specify the `media` attribute.
- **Support setting multiple `<meta>` elements**

- **Shorter names**

### Changes

Following set of APIs are deprecated[^1]:

- [`NgxMetaMetaService`](ngx-meta.ngxmetametaservice.md)
- [`NgxMetaMetaMetaDefinition`](ngx-meta.ngxmetametadefinition.md)
  - [`makeKeyValMetaDefinition`](ngx-meta.makekeyvalmetadefinition.md)
  - [`makeComposedKeyValMetaDefinition`](ngx-meta.makecomposedkeyvalmetadefinition.md)
    - [`MakeComposedKeyValMetaDefinitionOptions`](ngx-meta.makecomposedkeyvalmetadefinitionoptions.md)
- [`NgxMetaMetaContent`](ngx-meta.ngxmetametacontent.md)

And the following set of APIs are introduced:

- [`NgxMetaElementsService`](ngx-meta.ngxmetaelementsservice.md)
- [`NgxMetaElementNameAttribute`](ngx-meta.ngxmetaelementnameattribute.md)
  - [`withNameAttribute`](ngx-meta.withnameattribute.md)
  - [`withPropertyAttribute`](ngx-meta.withpropertyattribute.md)
- [`NgxMetaElementAttributes`](ngx-meta.ngxmetaelementattributes.md)
  - [`withContentAttribute`](ngx-meta.withcontentattribute.md)

See [GitHub PR] were they were introduced more details. Keep reading for how to migrate from old ones to newer ones.

## Migration

### Automatic

No automatic migration via schematics are available for this change. Manual migration is required

### Manual

Here you have some examples of how the same thing can be achieved using old and new APIs:

<!-- prettier-ignore-start -->

#### Set a single `<meta>` element

Let's set a `<meta name="description">` element:

<div class="grid" markdown>

```typescript title="Before"
const metaService = inject(NgxMetaMetaService)
metaService.set(
  makeKeyValMetaDefinition('description'), 
  'foo'
)
```

```typescript title="After"
const metaService = inject(NgxMetaElementsService)
metaService.set(
  withNameAttribute('description'), 
  withContentAttribute('foo')
)
```

</div>

#### Remove all `<meta>` elements of a kind

Let's remove all `<meta name="description">` elements:

<div class="grid" markdown>

```typescript title="Before"
const metaService = inject(NgxMetaMetaService)
metaService.set(
  makeKeyValMetaDefinition('description'),
  undefined, // or null
)
```

```typescript title="After"
const metaService = inject(NgxMetaElementsService)
metaService.set(
  withNameAttribute('description'),
  undefined, // or null or empty array
)
// or also just
metaService.set(
  withNameAttribute('description'), 
  withContentAttribute(undefined)
)
```

</div>

#### Set `<meta>` element with more attributes

Like a `<meta name="theme-color">` with a `media` attribute:

<div class="grid" markdown>

```typescript title="Before"
const metaService = inject(NgxMetaMetaService)
metaService.set(
  makeKeyValMetaDefinition(
    'theme-color', 
    { extras: { media: '(prefers-color-scheme: dark)' } }
  ), 
  'darkblue'
)
```

```typescript title="After"
const metaService = inject(NgxMetaElementsService)
metaService.set(
  withNameAttribute('theme-color'), 
  withContentAttribute(
    'darkblue',
    { media: '(prefers-color-scheme: dark)' }
  )
)
```

</div>

#### Set many `<meta>` elements

Like multiple `<meta name="theme-color">`:

<div class="grid" markdown>

```typescript title="Before"
// ❌ Not possible with library-provided APIs
```

```typescript title="After"
const metaService = inject(NgxMetaElementsService)
metaService.set(
  withNameAttribute('theme-color'), 
  [
    withContentAttribute(
      'darkblue', 
      { media: '(prefers-color-scheme: dark)' }
    ),
    withContentAttribute('lightblue')
  ]
)
```

</div>

<!-- prettier-ignore-end -->

[^1]: For more details, check out the [deprecation PR](https://github.com/davidlj95/ngx/pull/955)
