import { TestBed } from '@angular/core/testing'

import { MetadataSetter } from './metadata-setter'
import { makeMetadata } from './__tests__/make-metadata'
import { DefaultsService } from './defaults.service'
import { MockProviders } from 'ng-mocks'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataValueGetter } from './metadata-value-getter'

describe('MetadataSetter', () => {
  enableAutoSpy()

  describe('set', () => {
    const value = 'value'

    describe('when value exists for the metadata', () => {
      const metadata = makeMetadata()
      const values = { foo: 'bar' }

      it('should call setter with its value', () => {
        const sut = makeSut()
        const valueGetter = TestBed.inject(
          MetadataValueGetter,
        ) as jasmine.SpyObj<MetadataValueGetter>
        valueGetter.get.and.returnValue(value)

        sut.set(metadata, values)

        expect(metadata.set).toHaveBeenCalledOnceWith(value)
        expect(valueGetter.get).toHaveBeenCalledOnceWith(
          metadata.definition,
          values,
        )
      })
    })

    describe('when global value exists', () => {
      const globalName = 'globalProp'
      const values = { [globalName]: value }
      const metadata = makeMetadata({ globalName })

      it('should call setter with global value', () => {
        const sut = makeSut()

        sut.set(metadata, values)

        expect(metadata.set).toHaveBeenCalledOnceWith(value)
      })
    })

    describe('when default exists', () => {
      const metadata = makeMetadata()

      it('should call setter with default value', () => {
        const sut = makeSut()
        const defaultsService = TestBed.inject(
          DefaultsService,
        ) as jasmine.SpyObj<DefaultsService>
        defaultsService.get.and.returnValue(value)

        sut.set(metadata, {})

        expect(metadata.set).toHaveBeenCalledOnceWith(value)
        expect(defaultsService.get).toHaveBeenCalledOnceWith(
          metadata.definition,
        )
      })
    })

    describe('when value, global value and default value exist', () => {
      const globalName = 'globalName'
      const metadata = makeMetadata({ globalName })
      const globalValue = 'globalValue'
      const defaultValue = 'defaultValue'
      const values = {
        [globalName]: globalValue,
      }
      let sut: MetadataSetter

      beforeEach(() => {
        sut = makeSut()
        const defaultsService = TestBed.inject(
          DefaultsService,
        ) as jasmine.SpyObj<DefaultsService>
        defaultsService.get.and.returnValue(defaultValue)
        const valueGetter = TestBed.inject(
          MetadataValueGetter,
        ) as jasmine.SpyObj<MetadataValueGetter>
        valueGetter.get.and.returnValue(value)
      })

      it('should call setter with value', () => {
        sut.set(metadata, values)

        expect(metadata.set).toHaveBeenCalledOnceWith(value)
      })
    })

    describe('when value is null and global exists', () => {
      const globalName = 'globalName'
      const metadata = makeMetadata({ globalName })
      const globalValue = 'globalValue'
      const values = {
        [globalName]: globalValue,
      }
      let sut: MetadataSetter

      beforeEach(() => {
        sut = makeSut()
        const valueGetter = TestBed.inject(
          MetadataValueGetter,
        ) as jasmine.SpyObj<MetadataValueGetter>
        valueGetter.get.and.returnValue(null)
      })

      it('should call setter with null', () => {
        sut.set(metadata, values)

        expect(metadata.set).toHaveBeenCalledOnceWith(null)
      })
    })

    describe('when no value exists', () => {
      it('should call setter with null', () => {
        const metadata = makeMetadata()
        const sut = makeSut()

        sut.set(metadata, {})

        expect(metadata.set).toHaveBeenCalledOnceWith(null)
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      MetadataSetter,
      MockProviders(MetadataValueGetter, DefaultsService),
    ],
  })
  return TestBed.inject(MetadataSetter)
}
