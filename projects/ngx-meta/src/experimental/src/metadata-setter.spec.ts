import { TestBed } from '@angular/core/testing'

import { MetadataSetter } from './metadata-setter'
import { makeMetadata } from './__tests__/make-metadata'
import { DefaultsService } from './defaults.service'
import { MockProviders } from 'ng-mocks'
import { enableAutoSpy } from '../../__tests__/enable-auto-spy'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { Metadata } from './metadata'

describe('MetadataSetter', () => {
  enableAutoSpy()
  let sut: MetadataSetter
  let dummyMetadata: Metadata<unknown>
  let valueFromValues: jasmine.SpyObj<MetadataValueFromValues>
  let defaultsService: jasmine.SpyObj<DefaultsService>

  beforeEach(() => {
    dummyMetadata = makeMetadata()
    sut = makeSut()
    valueFromValues = TestBed.inject(
      MetadataValueFromValues,
    ) as jasmine.SpyObj<MetadataValueFromValues>
    defaultsService = TestBed.inject(
      DefaultsService,
    ) as jasmine.SpyObj<DefaultsService>
  })

  describe('set', () => {
    const dummyValues = { foo: 'bar' }
    const value = 'value'
    const defaultValue = 'defaultValue'

    describe('when value exists for the metadata', () => {
      beforeEach(() => {
        valueFromValues.get.and.returnValue(value)
      })

      it('should call setter with its value', () => {
        sut.set(dummyMetadata, dummyValues)

        expect(dummyMetadata.set).toHaveBeenCalledOnceWith(value)
        expect(valueFromValues.get).toHaveBeenCalledOnceWith(
          dummyMetadata.definition,
          dummyValues,
        )
      })
    })

    describe('when default exists', () => {
      beforeEach(() => {
        defaultsService.get.and.returnValue(value)
      })

      it('should call setter with default value', () => {
        sut.set(dummyMetadata, dummyValues)

        expect(dummyMetadata.set).toHaveBeenCalledOnceWith(value)
        expect(defaultsService.get).toHaveBeenCalledOnceWith(
          dummyMetadata.definition,
        )
      })
    })

    describe('when value and default value exist', () => {
      beforeEach(() => {
        defaultsService.get.and.returnValue(defaultValue)
        valueFromValues.get.and.returnValue(value)
      })

      it('should call setter with value', () => {
        sut.set(dummyMetadata, dummyValues)

        expect(dummyMetadata.set).toHaveBeenCalledOnceWith(value)
      })
    })

    describe('when value is null and default exists', () => {
      beforeEach(() => {
        valueFromValues.get.and.returnValue(null)
        defaultsService.get.and.returnValue(defaultValue)
      })

      it('should call setter with null', () => {
        sut.set(dummyMetadata, dummyValues)

        expect(dummyMetadata.set).toHaveBeenCalledOnceWith(null)
      })
    })

    describe('when neither value or default value exists', () => {
      it('should call setter with undefined', () => {
        sut.set(dummyMetadata, dummyValues)

        expect(dummyMetadata.set).toHaveBeenCalledOnceWith(undefined)
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [
      MetadataSetter,
      MockProviders(MetadataValueFromValues, DefaultsService),
    ],
  })
  return TestBed.inject(MetadataSetter)
}
