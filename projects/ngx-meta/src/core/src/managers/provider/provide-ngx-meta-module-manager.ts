import {
  _ProvideNgxMetaManagerOptions,
  provideNgxMetaManager,
  withManagerDeps,
  withManagerJsonPath,
  withManagerOptions,
} from './provide-ngx-meta-manager'
import {
  NgxMetaElementNameAttribute,
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '../../meta-elements'
import { MetadataSetterFactory } from './make-metadata-manager-provider-from-setter-factory'

/**
 * @internal
 */
export const _provideNgxMetaModuleManager = <
  Type extends object,
  Key extends StringKey<Type>,
>(
  key: Key,
  options: _ProvideNgxMetaModuleManagerOptions<Type[Key]> = {},
) =>
  provideNgxMetaManager(
    withManagerJsonPath(...(options.s ?? []), key),
    options.f ??
      ((metaElementsService: NgxMetaElementsService) => (value) =>
        metaElementsService.set(
          options.n ? options.n : withNameAttribute(key),
          withContentAttribute(value as string | null | undefined),
        )),
    withManagerOptions(
      withManagerDeps(options.d ?? [NgxMetaElementsService]),
      options,
    ),
  )

type StringKey<T = object> = Extract<keyof T, string>

/**
 * @internal
 */
export type _ProvideNgxMetaModuleManagerOptions<T> = Partial<{
  s: ReadonlyArray<string>
  f: MetadataSetterFactory<T>
  n: NgxMetaElementNameAttribute
}> &
  _ProvideNgxMetaManagerOptions

/**
 * @internal
 */
export const _withModuleManagerSetterFactory = <T>(
  setterFactory: MetadataSetterFactory<T>,
): _ProvideNgxMetaModuleManagerOptions<T> => ({
  f: setterFactory,
})

/**
 * @internal
 */
export const _withModuleManagerNameAttribute = <T>(
  nameAttribute: NgxMetaElementNameAttribute,
): _ProvideNgxMetaModuleManagerOptions<T> => ({
  n: nameAttribute,
})

/**
 * @internal
 */
export const _withModuleManagerScope = <T>(
  ...scope: ReadonlyArray<string>
): _ProvideNgxMetaModuleManagerOptions<T> => ({ s: scope })

/**
 * @internal
 */
export const _withModuleManagerOptions = <T>(
  ...options: ReadonlyArray<_ProvideNgxMetaModuleManagerOptions<T>>
): _ProvideNgxMetaModuleManagerOptions<T> =>
  options.reduce<_ProvideNgxMetaModuleManagerOptions<T>>(
    (acc, curr) => ({ ...acc, ...curr }),
    {},
  )
