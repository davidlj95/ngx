import { TestBed } from '@angular/core/testing'
import { NgxMetaCoreModule } from './ngx-meta-core.module'
import { DEFAULTS_TOKEN } from './defaults-token'

describe('NgxMetaCoreModule', () => {
  it('provides no defaults by default', () => {
    TestBed.configureTestingModule({ imports: [NgxMetaCoreModule.forRoot()] })
    expect(TestBed.inject(DEFAULTS_TOKEN, null, { optional: true })).toBeNull()
  })

  it('provides no defaults if not specified', () => {
    TestBed.configureTestingModule({ imports: [NgxMetaCoreModule.forRoot({})] })
    expect(TestBed.inject(DEFAULTS_TOKEN, null, { optional: true })).toBeNull()
  })
})
