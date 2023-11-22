import { TestBed } from '@angular/core/testing'
import { DefaultsService } from './defaults.service'

describe('DefaultsService', () => {
  describe('resolve', () => {
    describe('when no defaults', () => {
      it('should return data as is', () => {
        const data = { [makeRandomString()]: makeRandomString() }

        expect(makeSut().resolve(data)).toEqual(data)
      })
    })

    describe('when one defaults object provided', () => {
      describe('when key does not exist in data', () => {
        it('should return default for that key', () => {
          const data = {}
          const defaults = { [makeRandomString()]: makeRandomString() }
          const sut = makeSut()

          expect(sut.resolve(data, defaults)).toEqual(defaults)
        })
      })

      describe('when key exists in data', () => {
        const key = makeRandomString()

        describe('when its value is not null nor undefined nor object', () => {
          it('should return data key / value pair as is', () => {
            const data = { [key]: makeRandomString() }
            const defaults = { [key]: 'default' }
            const sut = makeSut()

            expect(sut.resolve(data, defaults)).toEqual(data)
          })
        })

        describe('when its value is object', () => {
          it('should return merged object properties', () => {
            const data = { [key]: { foo: 'bar' } }
            const defaults = { [key]: { bar: 'foo' } }
            const sut = makeSut()

            expect(sut.resolve<object>(data, defaults)).toEqual({
              [key]: { foo: 'bar', bar: 'foo' },
            })
          })
        })

        describe('when its value is undefined', () => {
          it('should return default value for that key', () => {
            const data = { [key]: undefined }
            const defaults = { [key]: 'value' }
            const sut = makeSut()

            expect(sut.resolve<object>(data, defaults)).toEqual(defaults)
          })
        })

        describe('when its value is null', () => {
          it('should return null as value for that key', () => {
            const data = { [key]: null }
            const defaults = { [key]: 'value' }
            const sut = makeSut()

            expect(sut.resolve<object>(data, defaults)).toEqual(data)
          })
        })
      })
    })

    describe('when multiple defaults objects provided', () => {
      it('should resolve them one by one', () => {
        const sut = makeSut()
        const resolveSpy = spyOn(sut, 'resolve').and.callThrough()

        const data = { data: 'value' }
        const firstDefault = { first: 'default', default: 'first' }
        const secondDefault = { second: 'default', default: 'second' }

        expect(sut.resolve<object>(data, firstDefault, secondDefault)).toEqual({
          ...data,
          ...firstDefault,
          ...secondDefault,
          default: firstDefault.default,
        })
        expect(resolveSpy).toHaveBeenCalledTimes(2)
        expect(resolveSpy).toHaveBeenCalledWith(
          data,
          firstDefault,
          secondDefault,
        )
        expect(resolveSpy).toHaveBeenCalledWith(
          { ...data, ...firstDefault },
          secondDefault,
        )
      })
    })
  })
})

function makeSut() {
  TestBed.configureTestingModule({
    providers: [DefaultsService],
  })
  return TestBed.inject(DefaultsService)
}

function makeRandomString(length: number = 6): string {
  // https://stackoverflow.com/a/1349426
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  let counter = 0
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }
  return result
}
