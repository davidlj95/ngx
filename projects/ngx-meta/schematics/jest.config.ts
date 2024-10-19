import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest'

const defaultPreset = createDefaultPreset({
  tsconfig: '<rootDir>/tsconfig.spec.json',
})

const jestConfig: JestConfigWithTsJest = {
  ...defaultPreset,
}

export default jestConfig
