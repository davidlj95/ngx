import {
  _ProvideNgxMetaManagerOptions,
  provideNgxMetaManager,
  withManagerDeps,
  withManagerGlobal,
  withManagerJsonPath,
} from './provide-ngx-meta-manager'
import {
  NgxMetaElementNameAttribute,
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '../../../meta-elements'
import { MetadataSetterFactory } from '../metadata-setter-factory'
import { withOptions } from '../../../utils'
import { StringKeyOf } from '../../../utils/string-key-of'

/**
 * @internal
 */
export const _provideNgxMetaModuleManager = <
  Type extends object,
  Key extends StringKeyOf<Type>,
>(
  key: Key,
  scope: ReadonlyArray<string>,
  options: _ProvideNgxMetaModuleManagerOptions<Type[Key]>,
) =>
  provideNgxMetaManager(
    withManagerJsonPath(...scope, key),
    options.f ??
      ((metaElementsService: NgxMetaElementsService) => (value) =>
        metaElementsService.set(
          options.n ?? withNameAttribute(key),
          withContentAttribute(value as string | null | undefined),
        )),
    withOptions(
      withManagerDeps(options.d ?? [NgxMetaElementsService]),
      options.k ? withManagerGlobal(key) : {},
      options,
    ),
  )

/**
 * @internal
 */
export type _ProvideNgxMetaModuleManagerOptions<T> = Partial<{
  f: MetadataSetterFactory<T>
  n: NgxMetaElementNameAttribute
  k: true
}> &
  _ProvideNgxMetaManagerOptions

/**
 * @internal
 */
export const _withModuleManagerSetterFactory = <T>(
  setterFactory: _ProvideNgxMetaModuleManagerOptions<T>['f'],
): _ProvideNgxMetaModuleManagerOptions<T> => ({
  f: setterFactory,
})

/**
 * @internal
 */
export const _withModuleManagerNameAttribute = <T>(
  nameAttribute: _ProvideNgxMetaModuleManagerOptions<T>['n'],
): _ProvideNgxMetaModuleManagerOptions<T> => ({
  n: nameAttribute,
})

/**
 * @internal
 */
export const _withModuleManagerSameGlobalKey = <
  T,
>(): _ProvideNgxMetaModuleManagerOptions<T> => ({
  k: true,
})
