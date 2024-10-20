# URL resolution

Some metadata values need a URL as value. Like [canonical URL](ngx-meta.globalmetadata.canonicalurl.md) metadata. And in some cases, an absolute URL is required or preferred. For instance [standard module]'s [canonical URL](ngx-meta.standard.canonicalurl.md) or [Open Graph module]'s [URL](ngx-meta.opengraph.url.md)

??? tip "Both URLs mentioned can be set at the same time"

    By using mentioned [canonical URL](ngx-meta.globalmetadata.md) [global metadata](ngx-meta.globalmetadata.md). See [metadata values JSON guide](metadata-values-json.md) for more info

Providing an absolute URL over and over could be repetitive. For instance:

```typescript
const fooPageMetadata: GlobalMetadata = {
  canonicalUrl: 'https://example.com/app/foo',
}
const barPageMetadata: GlobalMetadata = {
  canonicalUrl: 'https://example.com/app/bar',
}
```

The same URL prefix repeats around `https://example.com/app`.

But don't worry, got you covered 😉 Set up URL resolution and the problem will be over

## Set up

To avoid repeating the same URL prefix over and over, the library provides a way to configure a **base URL**. This way, when specifying a relative URL where an absolute URL is required or preferred, the **base URL** will be prepended. So that eventually an absolute URL appears as
metadata value.

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Add [`withNgxMetaBaseUrl`](ngx-meta.withngxmetabaseurl.md) as a [`provideNgxMetaCore`](ngx-meta.providengxmetacore.md) feature to your standalone app's `app.config.ts` file providers.

    ```typescript title="app.config.ts"
    import {provideNgxMetaCore, withNgxMetaBaseUrl} from '@davidlj95/ngx-meta/core';

    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        // ...
        provideNgxMetaCore(
          withNgxMetaBaseUrl('https://example.com/app')
        ),
        // ...
      ],
    }
    ```

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Add [`withNgxMetaBaseUrl`](ngx-meta.withngxmetabaseurl.md) as a [`provideNgxMetaCore`](ngx-meta.providengxmetacore.md) feature in the app's `app.module.ts` file.

    ```typescript title="app.module.ts"
    import {provideNgxMetaCore, withNgxMetaBaseUrl} from '@davidlj95/ngx-meta/core';

    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(
          withNgxMetaBaseUrl('https://example.com/app')
        ),
        // ...
      ],
      // ...
    })
    export class AppModule {}
    ```

## Usage

### With a relative URL

Once set up, you can specify a relative URL as URL and the absolute URL will be resolved for you behind the scenes. The initial example setting some canonical URLs could now be reduced to:

```typescript
const fooPageMetadata: GlobalMetadata = {
  canonicalUrl: 'foo', // value will be 'https://example.com/app/foo'
}
const barPageMetadata: GlobalMetadata = {
  canonicalUrl: 'bar', // value will be 'https://example.com/app/bar'
}
```

Pretty neat, isn't it?

### With Angular router's URL

What if the relative URL you want to use is the same one used for the Angular's router route? In that case, you can provide the magic value [`ANGULAR_ROUTER_URL`](ngx-meta.angularrouterurl.md). This will instruct the library to use the current [Angular's router URL](https://angular.dev/api/router/Route/#url) as relative URL. Which in turn will be resolved into an absolute URL.

```typescript
const routes = [
  {
    path: 'foo',
    component: FooComponent,
  },
  // ...
]
const fooPageMetadata: GlobalMetadata = {
  canonicalurl: ANGULAR_ROUTER_URL, // value will be 'https://example.com/app/foo'
}
```

!!! danger "URL resolution must be enabled to use Angular router URL"

    Otherwise an invalid URL will be used as metadata value. Specifically, the [`ANGULAR_ROUTER_URL`](ngx-meta.angularrouterurl.md) symbol converted to string.

## Recipes

### Using defaults

You can also use the previous [`ANGULAR_ROUTER_URL`](ngx-meta.angularrouterurl.md) value as a [default value](defaults.md) for some metadata. This way the Angular router's URL will be used as default if no other value is specified.

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    ```typescript title="app.config.ts"
    import {provideNgxMetaCore, withNgxMetaBaseUrl, ANGULAR_ROUTER_URL} from '@davidlj95/ngx-meta/core';

    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        // ...
        provideNgxMetaCore(
          withNgxMetaDefaults(
            {
              canonicalUrl: ANGULAR_ROUTER_URL,
            } satisfies GlobalMetadata
          )
        ),
        // ...
      ],
    }
    ```

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    ```typescript title="app.module.ts"
    import {provideNgxMetaCore, withNgxMetaDefaults, ANGULAR_ROUTER_URL} from '@davidlj95/ngx-meta/core';

    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(
          withNgxMetaDefaults(
            {
              canonicalUrl: ANGULAR_ROUTER_URL,
            } satisfies GlobalMetadata
          )
        ),
        // ...
      ],
      // ...
    })
    export class AppModule {}
    ```

## Implementation notes

The provided base URL string will be prepended to the relative URL value. The only adjustments that are made are:

- **Double slashes are avoided**. Base URL `https://example.com/app/` (trailing slash) + relative URL `/foo` (leading slash) will result in `https://example.com/app/foo`
- **Slash is added when needed**. Base URL `https://example.com/app` (no trailing slash) + relative URL `foo` (no leading slash) will result in `https://example.com/app/foo`
- **No trailing slash for home is fine**. Base URL `https://example.com/app` (no trailing slash) and an empty string relative URL will result in `https://example.com/app` (base URL as is). Beware that if using [`ANGULAR_ROUTER_URL`](ngx-meta.angularrouterurl.md) the router root URL is `/`. So if using the previous base URL, the result for the home / root page would be `https://example.com/app/` (with trailing slash).
