import { MetadataDefinition } from './metadata-definition'

describe('MetadataDefinition', () => {
  const scope = 'scope'
  const name = 'name'

  describe('id', () => {
    it('should return scope and name joined by a dot', () => {
      const sut = new MetadataDefinition({ name, scope })

      expect(sut.id).toEqual(`${scope}.${name}`)
    })
  })

  describe('jsonPath', () => {
    it('should return scope split by dots and name', () => {
      const outerScope = 'outerScope'
      const midScope = 'midScope'
      const innerScope = 'innerScope'
      const sut = new MetadataDefinition({
        name,
        scope: `${outerScope}.${midScope}.${innerScope}`,
      })

      expect(sut.jsonPath).toEqual([outerScope, midScope, innerScope, name])
    })
  })
})
