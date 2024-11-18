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

const eslintPluginJsonFiles = require('eslint-plugin-json-files')

const eslintPluginJasmine = require('eslint-plugin-jasmine')

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
    files: ['**/*.cy.ts', '**/cypress/**/*.ts'],
    ...eslintPluginCypress.configs.recommended,
  },
  {
    files: ['**/*.json'],
    plugins: { 'json-files': eslintPluginJsonFiles },
    processor: eslintPluginJsonFiles.processors.json,
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
  // Angular ESLint added an `eslint.config.js` file inside `projects/ngx-meta/src`
  // However, ESLint configuration files closer to files are not used by ESLint if running it from root directory
  // Because configuration file resolution is experimental and must be manually enabled:
  // https://eslint.org/docs/latest/use/configure/configuration-files#experimental-configuration-file-resolution
  // But WebStorm will use them. So that can lead to different configs used by IDE and in CI/CD. Hence, removing the
  // extra configuration file to ensure consistency. The file doesn't contain any new rule, so it's safe to do that.
  // Here's how the file looked like:
  // https://github.com/angular-eslint/angular-eslint/blob/v18.4.0/packages/schematics/src/utils.ts
  // Adding here below extra rules for subdirectories then:
  {
    files: ['projects/*/src/package.json'],
    rules: {
      'json-files/require-license': 'error',
      'json-files/restrict-ranges': ['error', { versionHint: 'caret' }],
    },
  },
  {
    files: ['projects/*/src/**/*.spec.ts'],
    plugins: {
      jasmine: eslintPluginJasmine,
    },
    ...eslintPluginJasmine.configs.recommended,
  },
  eslintConfigPrettier,
)
