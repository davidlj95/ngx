# Design principles

When developing this library, following points were the north star to decide the what and the how

## Declarative

Declarative APIs are preferred to offer to library's users. The user just tells the library what metadata wants to set in the page and the library does the rest.

## Extendable

Despite built-in tools to set common used metadata, users may have their own needs. So library must allow to manage them in the same fashion as built-in metadata managers do. This includes any kind of metadata, not just the regular `#!html <meta>` elements in the `#!html <head>` of the page.

## Tree-shakeable

Features the app offers should be built thinking about [tree shaking] from design. So if users decide not to opt-in to certain features, those features' code doesn't end up in their apps bundles. In this regard, the bundle size of apps consuming the library is tracked to avoid features from excessively growing in size (which can impact users' apps performances).

## Minimal

Essentially, the [KISS principle](https://en.wikipedia.org/wiki/KISS_principle). Library won't offer features that go beyond helping Angular users setting metadata in their apps. This specially relates to previous principle regarding [tree shaking]. If an optional feature can't be implemented in a way that's tree shakeable, better not to implement it. Users can implement it themselves if they wish to. Maybe a cookbook guide in documentation can be added instead.
