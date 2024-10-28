# Why is this needed

May schematic utilities are deep imports, hence not part of [Angular's public API surface](https://github.com/angular/angular/blob/main/contributing-docs/public-api-surface.md)

> A deep import is an import deeper than one of the package's entry point. For instance `@angular/core` is a regular import. But `@angular/core/src/utils` is a deep import.

For instance:

- `@schematics/angular/utility`
- `@angular-devkit/core/src/utils`

So the files needed from there are copy / pasted in here to avoid coupling to non-public APIs which can be dangerous (for instance breaking changes)

Indeed, [some `@angular/core` schematic utils mysteriously disappeared in v15.1](https://stackoverflow.com/a/79123753/3263250)

Existing `npm` libraries with exported utils aren't very popular or maintained at the moment of writing this. For instance:

- [`schematics-utilities`](https://www.npmjs.com/package/schematics-utilities). Most popular one. Exports copy/pasted utils from Angular's schematics package and Angular Material package. [Latest release is from 2021 (3+ years ago)](https://github.com/nitayneeman/schematics-utilities/releases/tag/v2.0.3). [Depends on Angular v8 and Typescript v3](https://github.com/nitayneeman/schematics-utilities/blob/v2.0.3/package.json#L38-L41)
- [`@hug/ngx-schematics-utilities`](https://www.npmjs.com/package/@hug/ngx-schematics-utilities). Modern schematics with a builder-like pattern. It's updated: [latest release was last month](https://github.com/DSI-HUG/ngx-schematics-utilities/releases/tag/10.1.4). [Depends with peer dependencies (yay!) on Angular > v17](https://github.com/DSI-HUG/ngx-schematics-utilities/blob/10.1.4/projects/lib/package.json#L53-L58). Not very popular though. So prefer copy/pasting for now.
