import { NgxMetaElementAttributes } from './ngx-meta-element-attributes'
import { Meta } from '@angular/platform-browser'
import { Injectable } from '@angular/core'
import { NgxMetaElementNameAttribute } from './ngx-meta-element-name-attribute'

/**
 * Manages `<meta>` elements inside `<head>`
 *
 * @public
 */
@Injectable({ providedIn: 'root' })
export class NgxMetaElementsService {
  constructor(private meta: Meta) {}

  /**
   * Creates, updates or removes some kind of `<meta>` elements inside `<head>` in a declarative fashion.
   *
   * <b>API is in alpha state. But appears as beta due a tooling limitation</b>
   *
   * Kind of `<meta>` elements to manage are identified by an HTML attribute providing its metadata name.
   * For instance, to manage description metadata elements (`<meta name="description">`) on the page, the
   * `name` attribute with `description` value identifies them.
   *
   * Then, contents for those can be specified. In the shape of a key/value JSON object declaring each element's
   * additional attributes. Mainly `content` named attributes. See {@link NgxMetaElementAttributes}.
   * If no contents are provided, all `<meta>` elements of that kind will be removed.
   * An array of contents may be given to create multiple `<meta>` elements with same kind.
   *
   * @example
   * <b>Setting `<meta name="description" content="Cool page"/>`</b>
   *
   * ```typescript
   * ngxMetaElementsService.set(
   *   withNameAttribute('description'), // same as `['name','description']`
   *   withContent('Cool page'), // same as `{content:'Cool page'}`
   * )
   * ```
   *
   * Utility functions {@link withNameAttribute} and {@link withContentAttribute} help creating the
   * name attribute identifying the kind of meta elements and the contents to provide for it.
   *
   * {@link withContentAttribute} helps to create the attributes key / value object.
   *
   * <b>Removing any `<meta name="description"/>` existing elements</b>
   *
   * ```typescript
   * ngxMetaElementsService.set(
   *   withNameAttribute('description'), // same as `['name','description']`
   *   undefined, // same as `withContent(undefined)`
   * )
   * ```
   *
   * <b>Setting many `<meta name="theme-color"/>` elements</b>
   *
   * ```typescript
   * ngxMetaElementsService.set(
   *   withNameAttribute('theme-color'), // same as `['name','theme-color']`
   *   [
   *     withContent('darkblue', { media: "(prefers-color-scheme: dark)" }),
   *     withContent('lightblue') // same as `{content:'lightblue'}`
   *   ]
   * )
   * ```
   *
   * <b>Removing any `<meta name="theme-color"/>` existing elements</b>
   *
   * ```typescript
   * ngxMetaElementsService.set(
   *   withNameAttribute('theme-color'), // same as `['name','theme-color']`
   *   [], // `undefined` is valid too
   * )
   * ```
   *
   * Attribute name helpers:
   *
   *  - {@link withNameAttribute}
   *
   *  - {@link withPropertyAttribute}
   *
   * Content helpers:
   *
   *  - {@link withContentAttribute}
   *
   * @param nameAttribute - Attribute use to identify which kind of `<meta>` elements to manage.
   *                        As an array with the attribute name in first position and attribute value in second one.
   *                        Utility functions exist to generate arrays for common name attributes.
   *                        See {@link withNameAttribute} and {@link withPropertyAttribute} helpers to create those
   *                        arrays without repeating attribute names around.
   *
   * @param content - Content(s) attributes to set for this `<meta>` elements kind.
   *                  Or the lack of them to remove all `<meta>` elements of this kind.
   *                  See {@link withContentAttribute} helper for creating content objects.
   */
  set(
    nameAttribute: NgxMetaElementNameAttribute,
    content:
      | readonly NgxMetaElementAttributes[]
      | NgxMetaElementAttributes
      | undefined,
  ): void {
    const [nameAttributeName, nameAttributeValue] = nameAttribute
    const attrSelector = `${nameAttributeName}="${nameAttributeValue}"`
    this.meta.getTags(attrSelector).forEach((tag) => tag.remove())
    /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
    if (!content) {
      return
    }
    const contents = (Array.isArray as isContentsArray)(content)
      ? content
      : [content]
    this.meta.addTags(
      contents.map((content) => ({
        [nameAttributeName]: nameAttributeValue,
        ...content,
      })),
    )
  }
}

type isContentsArray = (
  contentOrContents:
    | readonly NgxMetaElementAttributes[]
    | NgxMetaElementAttributes,
) => contentOrContents is readonly NgxMetaElementAttributes[]
