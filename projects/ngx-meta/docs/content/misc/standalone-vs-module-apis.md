# Standalone vs module APIs

All main APIs have a standalone and an Angular module-based variant. However, **standalone APIs are preferred and recommended**. Given it's the current recommended approach to author Angular projects. Despite that, Angular module APIs are still here available to use if you prefer to do so.

Beware that you can use standalone APIs even if your Angular is still module-based. So you can migrate if you want at your own pace.

??? info "Angular module-based APIs use standalone APIs under the hood"

    So if you want to shave some bytes from your bundle size, going for standalone APIs is yet another reason to add to the list. As you'll remove from it the Angular module class overhead.

## Equivalent APIs

Here's a table with the list of main APIs with its standalone and Angular-module variants

|             API             |                                                                     Standalone | Angular module                                                               |
| :-------------------------: | -----------------------------------------------------------------------------: | :--------------------------------------------------------------------------- |
|            Core             |                         [`provideNgxMetaCore`](ngx-meta.providengxmetacore.md) | [`NgxMetaCoreModule.forRoot`](ngx-meta.ngxmetacoremodule.forroot.md)         |
|           Routing           |                   [`provideNgxMetaRouting`](ngx-meta.providengxmetarouting.md) | [`NgxMetaRoutingModule.forRoot`](ngx-meta.ngxmetaroutingmodule.forroot.md)   |
|      JSON-LD Metadata       |                     [`provideNgxMetaJsonLd`](ngx-meta.providengxmetajsonld.md) | [`NgxMetaJsonLdModule`](ngx-meta.ngxmetajsonldmodule.md)                     |
|     Open Graph Metadata     |               [`provideNgxMetaOpenGraph`](ngx-meta.providengxmetaopengraph.md) | [`NgxMetaOpenGraphModule`](ngx-meta.ngxmetaopengraphmodule.md)               |
| Open Graph Profile Metadata | [`provideNgxMetaOpenGraphProfile`](ngx-meta.providengxmetaopengraphprofile.md) | [`NgxMetaOpenGraphProfileModule`](ngx-meta.ngxmetaopengraphprofilemodule.md) |
|      Standard Metadata      |                 [`provideNgxMetaStandard`](ngx-meta.providengxmetastandard.md) | [`NgxMetaStandardModule`](ngx-meta.ngxmetastandardmodule.md)                 |
|   Twitter Cards Metadata    |           [`provideNgxMetaTwitterCard`](ngx-meta.providengxmetatwittercard.md) | [`NgxMetaTwitterCardModule`](ngx-meta.ngxmetatwittercardmodule.md)           |
