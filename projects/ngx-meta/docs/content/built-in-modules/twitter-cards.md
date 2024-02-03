# Twitter Cards

[Twitter Cards] are a way to attach rich media experiences to tweets. Similar to Open Graph, [Twitter Cards] provide a way for website owners to control how their content appears when shared on the Twitter platform. Twitter Cards enhance link previews by adding additional information and media elements to tweets.

## Compatibility with Open Graph

Some [Twitter Cards tags fallback to Open Graph equivalent properties if they can't be found](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup). So if you just want to set those properties, maybe you don't need to add Twitter Cards metadata at all. However, to set some Twitter Cards specific metadata that doesn't have an Open Graph fallback like the author's Twitter username, you'll need Twitter Cards metadata.

## Setup

Depending on what metadata you need to set, add one of more of the Twitter Card modules / providers.

### Main

To set the Twitter Card type or the basic _summary_ or _summary large_ cards, you can use the main Twitter Cards module

=== "For non-standalone, module-based apps"
Add `NgxMetaTwitterCardModule` to your module-based app's `app.module.ts` file. Checkout [get started setup] for more details.

=== "For standalone, module-free apps"
Add `provideNgxMetaTwitterCard()` to your standalone app's `app.config.ts` file providers. Checkout [get started setup] for more details.

## Types

Following Typescript types provide you with all implemented metadata:

- `TwitterCardMetadata`

## Resources

- [Twitter Cards specification][Twitter Cards]
- [Twitter Cards validator](https://cards-dev.twitter.com/validator)