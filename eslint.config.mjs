// @ts-check
// noinspection NpmUsedModulesInstalled
import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import angular from 'angular-eslint'

import { includeIgnoreFile } from '@eslint/compat'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginCypress from 'eslint-plugin-cypress/flat'
import eslintPluginJasmine from 'eslint-plugin-jasmine'
import eslintPluginJest from 'eslint-plugin-jest'
import eslintPluginJsonFiles from 'eslint-plugin-json-files'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const gitignorePath = resolve(__dirname, '.gitignore')

export default tsEslint.config(
  includeIgnoreFile(gitignorePath),
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.recommended,
      ...tsEslint.configs.stylistic,
    ],
  },
  {
    files: [
      'projects/*/src/**/*.ts',
      'projects/*/example-apps/templates/**/*.ts',
    ],
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
    files: ['projects/*/example-apps/templates/**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
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
  {
    files: ['projects/*/schematics/**/*.spec.ts'],
    plugins: {
      jest: eslintPluginJest,
    },
    ...eslintPluginJest.configs['flat/recommended'],
    ...eslintPluginJest.configs['flat/style'],
  },
  eslintConfigPrettier,
)
