/** @type {import('@jest/types').Config.GlobalConfig} */
module.exports = {
  projects: ['<rootDir>/projects/ngx-meta/schematics'],
  coverageDirectory: '<rootDir>/coverage/jest',
  coverageReporters: ['json', 'text'],
  collectCoverageFrom: ['<rootDir>/**/*.ts', '!**/testing/**'],
}
