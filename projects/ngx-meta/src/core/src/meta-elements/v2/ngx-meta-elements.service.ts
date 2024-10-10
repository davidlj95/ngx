import { NgxMetaElementAttributes } from './ngx-meta-element-attributes'
import { Meta } from '@angular/platform-browser'
import { Injectable } from '@angular/core'

/**
 * Manages `<meta>` elements inside `<head>`.
 *
 * @alpha
 */
@Injectable({ providedIn: 'root' })
export class NgxMetaElementsService {
  constructor(private meta: Meta) {}

  set(
    nameAttribute: NgxMetaElementNameAttribute,
    content:
      | ReadonlyArray<NgxMetaElementAttributes>
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
    | ReadonlyArray<NgxMetaElementAttributes>
    | NgxMetaElementAttributes,
) => contentOrContents is ReadonlyArray<NgxMetaElementAttributes>

/**
 * @alpha
 */
export type NgxMetaElementNameAttribute = readonly [name: string, value: string]
