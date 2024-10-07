import { inject, InjectionToken } from '@angular/core'
import { Meta } from '@angular/platform-browser'
import { NgxMetaElementAttributes } from './ngx-meta-element-attributes'

/**
 * @alpha
 */
export const NGX_META_ELEMENT_SETTER = new InjectionToken<NgxMetaElementSetter>(
  ngDevMode ? 'NgxMeta Meta elements setter' : 'NgxMetaMES',
  {
    factory: () => {
      const meta = inject(Meta)
      return (nameAttribute, content) => {
        const [nameAttributeName, nameAttributeValue] = nameAttribute
        const attrSelector = `${nameAttributeName}="${nameAttributeValue}"`
        /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
        if (!content) {
          meta.removeTag(attrSelector)
          return
        }
        meta.updateTag(
          { [nameAttributeName]: nameAttributeValue, ...content },
          attrSelector,
        )
      }
    },
  },
)

/**
 * @alpha
 */
export type NgxMetaElementSetter = (
  nameAttribute: readonly [name: string, value: string],
  content: NgxMetaElementAttributes | undefined,
) => void
