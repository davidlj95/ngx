import { inject } from '@angular/core'
import { Meta } from '@angular/platform-browser'
import { NgxMetaElementAttributes } from './ngx-meta-element-attributes'
import { _LazyInjectionToken, _makeInjectionToken } from '../../utils'

/**
 * @alpha
 */
export const ngxMetaElementsSetter: _LazyInjectionToken<
  NgxMetaElementsSetter
> = () =>
  _makeInjectionToken(ngDevMode ? 'Meta elements setter' : 'MEsS', () => {
    const meta = inject(Meta)
    return (nameAttribute, contents) => {
      const [nameAttributeName, nameAttributeValue] = nameAttribute
      const attrSelector = `${nameAttributeName}="${nameAttributeValue}"`
      meta.getTags(attrSelector).forEach((tag) => tag.remove())
      meta.addTags(
        contents.map((content) => ({
          [nameAttributeName]: nameAttributeValue,
          ...content,
        })),
      )
    }
  })

/**
 * @alpha
 */
export type NgxMetaElementsSetter = (
  nameAttribute: readonly [name: string, value: string],
  contents: ReadonlyArray<NgxMetaElementAttributes | undefined>,
) => void
