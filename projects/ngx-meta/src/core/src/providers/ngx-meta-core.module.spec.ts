import { TestBed } from '@angular/core/testing'
import { NgxMetaCoreModule } from './ngx-meta-core.module'
import { injectDefaults } from '../defaults/defaults'
import { ModuleWithProviders } from '@angular/core'
import { GlobalMetadata } from '../globals'
import { withNgxMetaDefaults } from '../defaults'

describe('Core module', () => {
  const defaults: GlobalMetadata = { title: 'Hello World!' }

  it('provides no defaults by default', () => {
    makeSut(NgxMetaCoreModule.forRoot())

    expect(injectDefaultsForTesting()).toBeNull()
  })

  it('provides no defaults if options object is empty', () => {
    // noinspection JSDeprecatedSymbols
    makeSut(NgxMetaCoreModule.forRoot({}))

    expect(injectDefaultsForTesting()).toBeNull()
  })

  it('provides defaults if specified as options object', () => {
    // noinspection JSDeprecatedSymbols
    makeSut(NgxMetaCoreModule.forRoot({ defaults }))

    expect(injectDefaultsForTesting()).toEqual(defaults)
  })

  it('accepts features from provider APIs, like defaults', () => {
    makeSut(NgxMetaCoreModule.forRoot(withNgxMetaDefaults(defaults)))

    expect(injectDefaultsForTesting()).toEqual(defaults)
  })
})

const makeSut = (
  moduleWithProviders: ModuleWithProviders<NgxMetaCoreModule>,
) => {
  TestBed.configureTestingModule({ imports: [moduleWithProviders] })
}

const injectDefaultsForTesting = (): ReturnType<typeof injectDefaults> =>
  TestBed.runInInjectionContext(injectDefaults)
