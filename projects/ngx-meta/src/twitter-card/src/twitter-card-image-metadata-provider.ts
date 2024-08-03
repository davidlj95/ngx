import { makeTwitterCardMetadataProvider } from './make-twitter-card-metadata-provider'
import { makeTwitterCardMetaDefinition } from './make-twitter-card-meta-definition'
import { _GLOBAL_IMAGE, NgxMetaMetaService } from '@davidlj95/ngx-meta/core'
import { TwitterCard } from './twitter-card'

/**
 * @internal
 */
export const __TWITTER_CARD_IMAGE_METADATA_SETTER_FACTORY =
  (metaService: NgxMetaMetaService) => (image: TwitterCard['image']) => {
    const imageUrl = image?.url.toString()
    // 👇 See Open Graph image metadata provider to answer your: WTF?
    // noinspection HttpUrlsUsage
    ngDevMode &&
      imageUrl &&
      !(imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) &&
      // prettier-ignore
      console.error(
        'ngx-meta/twitter-card: an image URL must use either http or https.\n' +
          '-> Invalid image URL: %s\n' +
          'For more info, checkout https://stackoverflow.com/a/9858694/3263250', imageUrl)
    metaService.set(
      makeTwitterCardMetaDefinition(_GLOBAL_IMAGE),
      image?.url?.toString(),
    )
    metaService.set(
      makeTwitterCardMetaDefinition(_GLOBAL_IMAGE, 'alt'),
      image?.alt,
    )
  }
/**
 * Manages the {@link TwitterCard.image} metadata
 * @public
 */
export const TWITTER_CARD_IMAGE_METADATA_PROVIDER =
  makeTwitterCardMetadataProvider(_GLOBAL_IMAGE, {
    g: _GLOBAL_IMAGE,
    s: __TWITTER_CARD_IMAGE_METADATA_SETTER_FACTORY,
    m: true,
  })
