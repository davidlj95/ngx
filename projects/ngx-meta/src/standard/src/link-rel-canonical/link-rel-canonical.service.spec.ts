import { TestBed } from '@angular/core/testing'

import { LinkRelCanonicalService } from './link-rel-canonical.service'
import { DOCUMENT } from '@angular/common'
import { LinkRelCanonicalHarness } from './__tests__/link-rel-canonical-harness'

describe('LinkRelCanonicalService', () => {
  let sut: LinkRelCanonicalService
  let linkRelCanonicalHarness: LinkRelCanonicalHarness

  beforeEach(() => {
    sut = makeSut()
    linkRelCanonicalHarness = new LinkRelCanonicalHarness(
      TestBed.inject(DOCUMENT),
    )
  })

  afterEach(() => {
    linkRelCanonicalHarness.remove()
  })

  it('should be created', () => {
    expect(sut).toBeTruthy()
  })

  describe('set', () => {
    describe('when URL is not provided', () => {
      const url = undefined

      describe('when canonical link element exists', () => {
        const existingUrl = 'https://example.com'

        beforeEach(() => {
          linkRelCanonicalHarness.create(existingUrl)
        })

        it('should remove it', () => {
          sut.set(url)

          expect(linkRelCanonicalHarness.getAll()).toHaveSize(0)
        })
      })

      describe('when canonical link element does not exist', () => {
        it('should do nothing', () => {
          sut.set(url)

          expect(linkRelCanonicalHarness.getAll()).toHaveSize(0)
        })
      })
    })

    describe('when URL is provided', () => {
      const url = new URL('https://example.com/foo')

      describe('when canonical link element exists', () => {
        it('should update it', () => {
          const anotherUrl = 'https://example.com/bar'
          linkRelCanonicalHarness.create(anotherUrl)
          expect(linkRelCanonicalHarness.get()).toBeTruthy()

          sut.set(url)

          const linkRelCanonicalElements = linkRelCanonicalHarness.getAll()
          expect(linkRelCanonicalElements).toHaveSize(1)
          expect(linkRelCanonicalElements[0].getAttribute('href')).toEqual(
            url.toString(),
          )
        })
      })

      describe('when canonical link element does not exist', () => {
        it('should create it', () => {
          sut.set(url)

          const linkRelCanonicalElements = linkRelCanonicalHarness.getAll()
          expect(linkRelCanonicalElements).toHaveSize(1)
          expect(linkRelCanonicalElements[0].getAttribute('href')).toEqual(
            url.toString(),
          )
        })
      })
    })

    describe('when URL is null', () => {
      const url = null

      describe('when canonical element does not exist', () => {
        it('should do nothing', () => {
          sut.set(url)

          expect(linkRelCanonicalHarness.getAll()).toHaveSize(0)
        })
      })

      describe('when canonical element exists', () => {
        beforeEach(() => {
          linkRelCanonicalHarness.create('https://example.com')
        })

        it('should remove it', () => {
          sut.set(url)

          expect(linkRelCanonicalHarness.getAll()).toHaveSize(0)
        })
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({ providers: [LinkRelCanonicalService] })
  return TestBed.inject(LinkRelCanonicalService)
}
