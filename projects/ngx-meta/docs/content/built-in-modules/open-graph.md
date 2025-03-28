# Open Graph

[Open Graph] is a protocol developed by Facebook that allows web pages to become rich objects in a social graph. It enables developers to control how their content appears when shared on social media platforms, such as Facebook, Twitter, LinkedIn, and others. Open Graph tags are added to the HTML of a web page as `#!html <meta name="og:x">` elements and provide metadata that helps social platforms understand and display the content more effectively.

When a link is shared on social media, Open Graph tags influence the appearance of the link preview or social card. Social cards are the visual representations of links that include a title, description, and image. These cards enhance the user experience by providing a snapshot of the linked content.

This module will help you set those tags to provide metadata to social networks and also customize link previews / social cards

## Setup

Depending on what metadata you need to set, add one of more of the Open Graph providers.

### Main

Contains the essential to set up Open Graph metadata. They will allow you to set up social cards / link previews for platforms that read Open Graph metadata.

Specifically, manages [basic](https://ogp.me/#metadata) and [optional](https://ogp.me/#optional) metadata

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Add [`provideNgxMetaOpenGraph()`](ngx-meta.providengxmetaopengraph.md) to your standalone app's `app.config.ts` file providers. Check out [get started setup] for more details.

    ```typescript title="app.config.ts"
    import {provideNgxMetaOpenGraph} from '@davidlj95/ngx-meta/open-graph';

    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaOpenGraph(),
        // ...
      ],
    }
    ```

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Add [`provideNgxMetaOpenGraph()`](ngx-meta.providengxmetaopengraph.md) to your module-based app's `app.module.ts` file. Check out [get started setup] for more details.

    ```typescript title="app.module.ts"
    import {provideNgxMetaOpenGraph} from '@davidlj95/ngx-meta/open-graph';

    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaOpenGraph(),
        // ...
      ],
      // ...
    })
    export class AppModule {}
    ```

#### Metadata

To check all the metadata that can be set with this provider, check out

[`OpenGraph` API Reference](ngx-meta.opengraph.md)

> Except if the property indicates otherwise, like `profile`.

### Profile

Manages [profile](https://ogp.me/#type_profile) non-vertical metadata. Manages metadata under [`OpenGraph.profile`](ngx-meta.opengraph.profile.md)

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Add [`provideNgxMetaOpenGraphProfile()`](ngx-meta.providengxmetaopengraphprofile.md) to your standalone app's `app.config.ts` file providers. Check out [get started setup] for more details.

    ```typescript title="app.config.ts"
    import {provideNgxMetaOpenGraphProfile} from '@davidlj95/ngx-meta/open-graph';

    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaOpenGraphProfile(),
        // ...
      ],
    }
    ```

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Add [`provideNgxMetaOpenGraphProfile()`](ngx-meta.providengxmetaopengraphprofile.md) to your module-based app's `app.module.ts` file. Check out [get started setup] for more details.

    ```typescript title="app.module.ts"
    import {provideNgxMetaOpenGraphProfile} from '@davidlj95/ngx-meta/open-graph';

    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaOpenGraphProfile(),
        // ...
      ],
      // ...
    })
    export class AppModule {}
    ```

#### Metadata

To check all the metadata that can be set with this provider, check out

[`OpenGraphProfile` API Reference](ngx-meta.opengraphprofile.md)

## Utility type

Following Typescript type will help you provide metadata values:

```typescript
import { OpenGraphMetadata, OPEN_GRAPH_TYPE_WEBSITE } from '@davidlj95/ngx-meta/open-graph'

const metadata = {
  openGraph: {
    type: OPEN_GRAPH_TYPE_WEBSITE,
    profile: {
      username: 'angular',
    },
  },
} satisfies OpenGraphMetadata
```

[`OpenGraphMetadata` API Reference](ngx-meta.opengraphmetadata.md)

## Platforms reading Open Graph metadata

At the moment of writing this document, Open Graph metadata is read by many popular sites to display social cards / link previews:

- Facebook
- Facebook Messenger
- LinkedIn
- Slack
- Telegram
- Twitter (you can set more details using [Twitter Cards](twitter-cards.md))
- WhatsApp

## Resources

- [Open Graph protocol specification][Open Graph]
- [Facebook's sharing debugger](https://developers.facebook.com/tools/debug/)
- [`freeCodeCamp.org`'s article on Open Graph](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/)
- [Article on social discovery](https://web.dev/articles/social-discovery)
