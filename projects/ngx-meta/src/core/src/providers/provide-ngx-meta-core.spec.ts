import { TestBed } from '@angular/core/testing'
import { provideNgxMetaCore } from './provide-ngx-meta-core'
import { RELATIVE_URL_RESOLVER } from '../url-resolution/relative-url-resolver'
import { noOpRelativeUrlResolver } from '../url-resolution/no-op-relative-url-resolver'
import { withNgxMetaBaseUrl } from '../url-resolution'

describe('Core providers', () => {
  it('should provide no op relative URL resolver by default', () => {
    setup(provideNgxMetaCore())

    const relativeUrlResolver = TestBed.inject(RELATIVE_URL_RESOLVER)
    expect(relativeUrlResolver).toEqual(noOpRelativeUrlResolver)
  })

  it('should override no op relative URL resolver when base URL is specified', () => {
    setup(provideNgxMetaCore(withNgxMetaBaseUrl('https://example.com')))

    const relativeUrlResolver = TestBed.inject(RELATIVE_URL_RESOLVER)
    expect(relativeUrlResolver).not.toEqual(noOpRelativeUrlResolver)
  })
})

const setup = (coreProviders: ReturnType<typeof provideNgxMetaCore>) =>
  TestBed.configureTestingModule({ providers: [coreProviders] })
