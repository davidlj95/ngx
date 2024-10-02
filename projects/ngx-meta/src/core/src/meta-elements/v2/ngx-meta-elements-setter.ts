import { inject, InjectionToken } from '@angular/core'
import { Meta } from '@angular/platform-browser'
import { NgxMetaElementAttributes } from './ngx-meta-element-attributes'

/**
 * @alpha
 */
export const NGX_META_ELEMENTS_SETTER =
  new InjectionToken<NgxMetaElementsSetter>(
    ngDevMode ? 'NgxMeta Meta elements setter' : 'NgxMetaMEsS',
    {
      factory: () => {
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
      },
    },
  )

/**
 * @alpha
 */
export type NgxMetaElementsSetter = (
  nameAttribute: readonly [name: string, value: string],
  contents: ReadonlyArray<NgxMetaElementAttributes | undefined>,
) => void
