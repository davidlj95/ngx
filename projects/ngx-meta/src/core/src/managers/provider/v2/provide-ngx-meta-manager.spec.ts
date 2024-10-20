import { injectOneMetadataManager } from '@/ngx-meta/test/inject-one-metadata-manager'
import { FactoryProvider, InjectionToken, Provider } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { DOCUMENT } from '@angular/common'
import { Router } from '@angular/router'
import { MetadataSetterFactory } from '../metadata-setter-factory'
import { _isDefined, withOptions } from '../../../utils'
import {
  provideNgxMetaManager,
  withManagerDeps,
  withManagerGlobal,
  withManagerObjectMerging,
} from './provide-ngx-meta-manager'

describe('provide manager', () => {
  const jsonPathAsArray = ['dummy-scope', 'dummy-key']
  const jsonPath = 'dummy-scope.dummy-key'

  it('should provide a manager with the given JSON path', () => {
    const provider = makeSut({ jsonPath })

    const manager = provideAndInject(provider)

    expect(manager.resolverOptions.jsonPath).toEqual(jsonPathAsArray)
  })

  it('should provide a manager with JSON path as id', () => {
    const provider = makeSut({ jsonPath })

    const manager = provideAndInject(provider)

    expect(manager.id).toEqual(jsonPath)
  })

  it('should provide a manager with the given factory', () => {
    const setter = () => {}
    const provider = makeSut({ factory: () => setter })

    const manager = provideAndInject(provider)

    expect(manager.set).toEqual(setter)
  })

  describe('when dependencies are given', () => {
    const deps = [DOCUMENT, Router] satisfies FactoryProvider['deps']

    it('should pass them to the factory function', () => {
      const factory = jasmine
        .createSpy<MetadataSetterFactory<unknown>>()
        .and.returnValue(() => {})
      const provider = makeSut({ deps, factory })

      provideAndInject(provider)

      expect(factory).toHaveBeenCalledWith(
        ...deps.map((dep) => TestBed.inject(dep as InjectionToken<unknown>)),
      )
    })
  })

  describe('when global is given', () => {
    const global = 'global'

    it('should set the manager global', () => {
      const provider = makeSut({ global })

      const manager = provideAndInject(provider)

      expect(manager.resolverOptions.global).toEqual(global)
    })
  })

  describe('when object merging is enabled', () => {
    const objectMerge = true

    it('should enable object merging in the manager', () => {
      const provider = makeSut({ objectMerge })

      const manager = provideAndInject(provider)

      expect(manager.resolverOptions.objectMerge).toBeTrue()
    })
  })
})

const makeSut = (
  opts: {
    jsonPath?: string
    factory?: MetadataSetterFactory<unknown>
    deps?: FactoryProvider['deps']
    global?: string
    objectMerge?: true
  } = {},
) =>
  provideNgxMetaManager(
    opts.jsonPath ?? 'dummy-scope.dummy-key',
    opts.factory ?? (() => () => {}),
    withOptions(
      ...[
        opts.deps ? withManagerDeps(...opts.deps) : undefined,
        opts.global ? withManagerGlobal(opts.global) : undefined,
        opts.objectMerge ? withManagerObjectMerging() : undefined,
      ].filter(_isDefined),
    ),
  )

const provideAndInject = (provider: Provider) => {
  TestBed.configureTestingModule({ providers: [provider] })
  return injectOneMetadataManager()
}
