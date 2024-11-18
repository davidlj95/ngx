// @ts-check
const tseslint = require('typescript-eslint')
const rootConfig = require('../../../eslint.config.js')
const angular = require('angular-eslint')

module.exports = tseslint.config(
  ...rootConfig,
  {
    files: ['**/*.ts'],
    // 👇 `extends` & `processor` added for WebStorm ESLint to be happy
    //    Not needed if running via CLI
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
    files: ['**/*.html'],
    rules: {},
  },
)
