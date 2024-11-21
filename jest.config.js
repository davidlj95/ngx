// noinspection NpmUsedModulesInstalled
const { env } = require('process')

/** @type {import('@jest/types').Config.GlobalConfig} */
module.exports = {
  projects: ['<rootDir>/projects/ngx-meta/schematics'],

  // https://github.com/jestjs/jest/blob/v29.7.0/docs/Configuration.md#github-actions-reporter
  reporters: Boolean(env['CI'])
    ? [['github-actions', { silent: false }], 'summary']
    : undefined,

  coverageDirectory: '<rootDir>/coverage/jest',
  coverageReporters: ['json', 'text'],
  collectCoverageFrom: [
    '<rootDir>/**/*.ts',
    '!**/testing/**',
    '!**/external-utils/**',
  ],
}
