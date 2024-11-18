// @ts-check
// noinspection NpmUsedModulesInstalled
const eslint = require('@eslint/js')
const tseslint = require('typescript-eslint')
const angular = require('angular-eslint')

const eslintCompat = require('@eslint/compat')
const path = require('path')
const gitignorePath = path.resolve(__dirname, '.gitignore')

module.exports = tseslint.config(
  eslintCompat.includeIgnoreFile(gitignorePath),
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
    ],
  },
  {
    files: ['projects/*/src/**/*.ts'],
    extends: [...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'lib',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'lib',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['projects/*/src/**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
)
