# Twitter Cards

[Twitter Cards] are a way to attach rich media experiences to tweets. Similar to Open Graph, [Twitter Cards] provide a way for website owners to control how their content appears when shared on the Twitter platform. Twitter Cards enhance link previews by adding additional information and media elements to tweets.

## Compatibility with Open Graph

Some [Twitter Cards tags fallback to Open Graph equivalent properties if they can't be found](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup). So if you just want to set those properties, maybe you don't need to add Twitter Cards metadata at all. However, to set some Twitter Cards specific metadata that doesn't have an Open Graph fallback like the author's Twitter username, you'll need Twitter Cards metadata.

## Setup

Depending on what metadata you need to set, add one of more of the Twitter Card providers.

### Main

To set the Twitter Card type or the basic _summary_ or _summary large_ cards, you can use the main Twitter Cards module

=== "For standalone, module-free apps"

    --8<-- "includes/standalone-apps-explanation.md"

    Add [`provideNgxMetaTwitterCard()`](ngx-meta.providengxmetatwittercard.md) to your standalone app's `app.config.ts` file providers. Check out [get started setup] for more details.

    ```typescript title="app.config.ts"
    import {provideNgxMetaTwitterCard} from '@davidlj95/ngx-meta/twitter-card';

    export const appConfig: ApplicationConfig = {
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaTwitterCard(),
        // ...
      ],
    }
    ```

=== "For non-standalone, module-based apps"

    --8<-- "includes/module-apps-explanation.md"

    Add [`provideNgxMetaTwitterCard()`](ngx-meta.providengxmetatwittercard.md) to your module-based app's `app.module.ts` file. Check out [get started setup] for more details.

    ```typescript title="app.module.ts"
    import {provideNgxMetaTwitterCard} from '@davidlj95/ngx-meta/twitter-card';

    @NgModule({
      // ...
      providers: [
        // ...
        provideNgxMetaCore(),
        provideNgxMetaRouting(), // (optional)
        provideNgxMetaTwitterCard(),
        // ...
      ],
      // ...
    })
    export class AppModule {}
    ```

#### Metadata

To check all the metadata that can be set with this provider, check out

[`TwitterCard` API Reference](ngx-meta.twittercard.md)

## Utility type

Following Typescript type will help you provide metadata values:

```typescript
import { TwitterCardMetadata } from '@davidlj95/ngx-meta/twitter-card'

const metadata = {
  twitterCard: {
    site: { username: '@angular' },
  },
} satisfies TwitterCardMetadata
```

[`TwitterCardMetadata` API Reference](ngx-meta.twittercardmetadata.md)

## Resources

- [Twitter Cards specification][Twitter Cards]
- [Getting started with Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)
- [Summary card with large image](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image)
- [Twitter Cards validator](https://cards-dev.twitter.com/validator)
