import {
  coreFeature,
  CoreFeature,
  CoreFeatureKind,
} from '../providers/core-feature'
import { _titleFormatter, TitleFormatter } from './title-formatter'
import { FactoryProvider } from '@angular/core'

/**
 * Allows formatting page titles automatically
 *
 * This way you can prepend or append your site name or brand, for instance.
 *
 * Metadata managers that use this formatter are:
 *
 *  - {@link Standard.title}
 *
 *  - {@link OpenGraph.title}
 *
 *  - {@link TwitterCard.title}
 *
 * @example
 *
 * <b>Using standalone, recommended API</b>
 * ```typescript
 * provideNgxMetaCore(
 *   withNgxMetaTitleFormatter((title) => `${title} - Site name`)
 * )
 * ```
 *
 * <b>Using module-based API</b>
 * ```typescript
 * NgxMetaCoreModule.forRoot(
 *   withNgxMetaTitleFormatter((title) => `${title} - Site name`)
 * )
 * ```
 *
 * See also:
 *
 * - {@link provideNgxMetaCore}: to use it with the standalone, recommended API.
 *
 * - {@link NgxMetaCoreModule.(forRoot:1)}: to use it with the module-based API.
 *
 * - {@link https://ngx-meta.dev/guides/title-formatting/ | Title formatting guide}
 *
 *
 * @param titleFormatter - A function that takes the page title set in metadata and returns the formatted title
 *
 * @beta
 */
export const withNgxMetaTitleFormatter = (
  titleFormatter: TitleFormatter,
): CoreFeature<CoreFeatureKind.TitleFormatter> =>
  coreFeature(CoreFeatureKind.TitleFormatter, [
    {
      provide: _titleFormatter(),
      useFactory: () => titleFormatter,
    } satisfies FactoryProvider,
  ])
