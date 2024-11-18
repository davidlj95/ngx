// @ts-check
// noinspection NpmUsedModulesInstalled
const eslint = require('@eslint/js')
const tseslint = require('typescript-eslint')
const angular = require('angular-eslint')

const eslintCompat = require('@eslint/compat')
const path = require('path')
const gitignorePath = path.resolve(__dirname, '.gitignore')

const eslintConfigPrettier = require('eslint-config-prettier')

const eslintPluginCypress = require('eslint-plugin-cypress/flat')

const jsonFiles = require('eslint-plugin-json-files')

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
  {
    files: ['**/*.cy.ts'],
    ...eslintPluginCypress.configs.recommended,
  },
  {
    files: ['**/*.json'],
    plugins: { 'json-files': jsonFiles },
    processor: jsonFiles.processors.json,
    rules: {
      'json-files/require-unique-dependency-names': 'error',
      'json-files/restrict-ranges': [
        'error',
        {
          versionHint: 'pin',
        },
      ],
      'json-files/sort-package-json': 'error',
    },
  },
  // If not placed here and running `eslint .` on root repo dir,
  // the `projects/ngx-meta/eslint.config.js` file isn't picked up
  // Feature to do so is still experimental
  {
    files: ['projects/ngx-meta/src/package.json'],
    rules: {
      'json-files/require-license': 'error',
      'json-files/restrict-ranges': ['error', { versionHint: 'caret' }],
    },
  },
  eslintConfigPrettier,
)
