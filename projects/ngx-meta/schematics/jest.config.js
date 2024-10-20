const { createDefaultPreset } = require('ts-jest')

const defaultPreset = createDefaultPreset({
  tsconfig: '<rootDir>/tsconfig.spec.json',
})

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...defaultPreset,
}
