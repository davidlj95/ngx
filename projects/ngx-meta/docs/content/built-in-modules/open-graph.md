# Open Graph

[Open Graph] is a protocol developed by Facebook that allows web pages to become rich objects in a social graph. It enables developers to control how their content appears when shared on social media platforms, such as Facebook, Twitter, LinkedIn, and others. Open Graph tags are added to the HTML of a web page as `#!html <meta name="og:x">` elements and provide metadata that helps social platforms understand and display the content more effectively.

When a link is shared on social media, Open Graph tags influence the appearance of the link preview or social card. Social cards are the visual representations of links that include a title, description, and image. These cards enhance the user experience by providing a snapshot of the linked content.

This module will help you set those tags to provide metadata to social networks and also customize link previews / social cards

## Setup

Depending on what metadata you need to set, add one of more of the Open Graph modules / providers.

### Main

Contains the essential to set up Open Graph metadata. They will allow you to set up social cards / link previews for platforms that read Open Graph metadata.

Specifically, manages [basic](https://ogp.me/#metadata) and [optional](https://ogp.me/#optional) metadata

=== "For non-standalone, module-based apps"
Add [`NgxMetaOpenGraphModule`](../api/ngx-meta.ngxmetaopengraphmodule.md) to your module-based app's `app.module.ts` file. Checkout [get started setup] for more details.

=== "For standalone, module-free apps"
Add [`provideNgxMetaOpenGraph()`](../api/ngx-meta.providengxmetaopengraph.md) to your standalone app's `app.config.ts` file providers. Checkout [get started setup] for more details.

### Profile

Manages [profile](https://ogp.me/#type_profile) non-vertical metadata

=== "For non-standalone, module-based apps"
Add [`NgxMetaOpenGraphProfileModule`](../api/ngx-meta.ngxmetaopengraphprofilemodule.md) to your module-based app's `app.module.ts` file. Checkout [get started setup] for more details.

=== "For standalone, module-free apps"
Add [`provideNgxMetaOpenGraphProfile()`](../api/ngx-meta.providengxmetaopengraphprofile.md) to your standalone app's `app.config.ts` file providers. Checkout [get started setup] for more details.

## Types

Following Typescript types provide you with all implemented metadata:

- [`OpenGraphMetadata`](../api/ngx-meta.opengraphmetadata.md)

## Platforms reading Open Graph metadata

At the moment of writing this document, Open Graph metadata is read by many popular sites to display social cards / link previews:

- Facebook
- Facebook Messenger
- LinkedIn
- Slack
- Telegram
- Twitter (you can set more details using [Twitter Cards](./twitter-cards.md))
- WhatsApp

## Resources

- [Open Graph protocol specification][Open Graph]
- [Facebook's sharing debugger](https://developers.facebook.com/tools/debug/)
- [Article on social discovery](https://web.dev/articles/social-discovery)
