import { TestBed } from '@angular/core/testing'
import { NgxMetaCoreModule } from './ngx-meta-core.module'
import { DEFAULTS_TOKEN } from './defaults-token'
import { ModuleWithProviders } from '@angular/core'
import { GlobalMetadata } from '@davidlj95/ngx-meta/core'

describe('Core module', () => {
  it('provides no defaults by default', () => {
    makeSut(NgxMetaCoreModule.forRoot())
    expect(TestBed.inject(DEFAULTS_TOKEN, null, { optional: true })).toBeNull()
  })

  it('provides no defaults if options object is empty', () => {
    makeSut(NgxMetaCoreModule.forRoot({}))
    expect(TestBed.inject(DEFAULTS_TOKEN, null, { optional: true })).toBeNull()
  })

  it('provides defaults if specified as options object', () => {
    const defaults: GlobalMetadata = { title: 'Hello World!' }
    makeSut(NgxMetaCoreModule.forRoot({ defaults }))

    expect(TestBed.inject(DEFAULTS_TOKEN, null, { optional: true })).toEqual(
      defaults,
    )
  })
})

const makeSut = (
  moduleWithProviders: ModuleWithProviders<NgxMetaCoreModule>,
) => {
  TestBed.configureTestingModule({ imports: [moduleWithProviders] })
}
