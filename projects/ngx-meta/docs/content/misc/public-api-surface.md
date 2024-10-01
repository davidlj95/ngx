# Public API surface

Not every exported API from the package is considered a public API.
Not every use of it is considered to be public use.
Similarly to the [Angular public API surface], non-public API members or use cases should not be used.
[Angular public API surface]: https://github.com/angular/angular/blob/main/contributing-docs/public-api-surface.md

!!! danger "Really, do not use non-public APIs"

    Non-public API or non-public uses of it are not supported use cases.
    Therefore breaking changes may be introduced in those cases without the formal process for those (i.e.: a major release)

## Exclusions

Everything exported is considered a public API except...

### Non-public API members

Some exported API members from this package are not intended for public use.

Those can be easily identified because one or more of these reasons:

- **API is a class method marked as `private`**. Same happens with [Angular public API surface].

- **API name starts with an underscore `_`**. Same happens with [Angular public API surface].
- **API member does not appear in documentation**

Those are not public API members. They are exported only to be used internally.

!!! note "You may request for a non-public API to be made public"

    If you consider you'd benefit from a non-public API, please raise [a new discussion in GitHub](https://github.com/davidlj95/ngx/discussions).
    The API can be transitioned into a public one if that's helpful.

??? info "Private and internal APIs"

    Inside the world of non-public API names there are two kinds: the internal and the private ones.

     - **Internal APIs**: start with just one underscore `_`. They are mainly exported to share APIs internally between the package's multiple entrypoints. Mainly exported by the core package to be used amongst the rest of package's entrypoints / modules.

     - **Private APIs**: start with two underscores `__`. They are mainly exported to be used by other APIs in the same entrypoint or for (unit) testing purposes.

### Using inheritance with exported API classes

Similar exclusion to [Angular public API surface]'s one:

!!! quote

    Extending any of our classes unless the support for this is specifically documented in the API reference.

However, we can go a bit further and say it's not in the nearby plans to support that. APIs are designed to favour [composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance). Hence, extending any of the exported classes won't be a supported use case for now.

### Constructors of injectable classes

Similar exclusion to [Angular public API surface]'s one:

!!! quote

    Constructors of injectable classes (services and directives). Use dependency injection to obtain instances of these classes

### File imports

All public APIs will be exported from the module's entrypoint. If they're not, they are non-public. Or we've messed up something. Things happen 🤷

Similar exclusion to [Angular public API surface]'s one:

!!! quote

    Any file/import paths within our package except for the `/`, `/testing` and `/bundles/*` and other documented package entry-points.
