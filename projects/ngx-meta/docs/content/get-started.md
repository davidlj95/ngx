# Get started

Glad you're here 🥰 Let's set it up in 3 steps ⚡️

## ➕ 1. Install and setup

```shell
ng add @davidlj95/ngx-meta
```

??? note "If using Angular v15 or v16"

    Run `ng add @davidlj95/ngx-meta@1.0.0-beta.38`. As latest v19 production version is not compatible with v15, v16. But latest beta version is. Soon will launch production versions to support older Angular versions. There are no other differences between last beta version and v19 version, so for now they can be used interchangeably.

The command will install the library and add ask you if you want to set up the routing module to set metadata values in Angular routes' `data`.

Then, to set some metadata to get started, choose at least the [standard module].

??? tip "Select just the metadata modules you need"

    In order to reduce the bundle size. You can also [lazy load them later](late-loading-modules.md) if you don't need to setup some metadata until the user reaches a specific page.

??? note "You can set it up manually too"

    Check out the [manual setup](manual-setup.md) guide for more information.

## 🏷️ 2. Set some metadata

### 2.1 Using the service

--8<-- "includes/service-usage.md"

!!! info "Metadata set by service won't be cleared by default"

    Those elements will be there even if you change the page unless the routing module is added.

    See [service guide about clearing metadata values](set-metadata-using-service.md#clearing-metadata) for more information

### 2.2 Using [route's data]

If you added the library's routing module, you can set the metadata for a page using a [route's data]. For instance:

--8<-- "includes/routing-usage.md"

## 🗺️ Next steps

Want to learn more about how to set metadata using the service, the routing module or both of them at once? Check the **[service](set-metadata-using-service.md) and [routing](set-metadata-using-routing.md) module guides**.

To know about how to properly define the metadata values to set, check out the **[metadata values JSON guide](metadata-values-json.md)**

If you already know about all that, maybe you want to explore the **library's [built-in modules](./built-in-modules/index.md) that allow setting common metadata**.

Otherwise, take a look at "Guides" section to learn about other features of the library. If looking for examples, you can always check out [our example apps](example-apps.md) for some real examples on how to use the library.
