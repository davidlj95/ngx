import { ScopedMetadataDefinition } from './scoped-metadata-definition'

describe('ScopedMetadataDefinition', () => {
  const scope = 'scope'
  const name = 'name'

  describe('id', () => {
    it('should return scope and name joined by a dot', () => {
      const sut = new ScopedMetadataDefinition(scope, name)

      expect(sut.id).toEqual(`${scope}.${name}`)
    })
  })

  describe('jsonPath', () => {
    it('should return scope split by dots and name', () => {
      const outerScope = 'outerScope'
      const midScope = 'midScope'
      const innerScope = 'innerScope'
      const sut = new ScopedMetadataDefinition(
        `${outerScope}.${midScope}.${innerScope}`,
        name,
      )

      expect(sut.jsonPath).toEqual([outerScope, midScope, innerScope, name])
    })
  })
})
