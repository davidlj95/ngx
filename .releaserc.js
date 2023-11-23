/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: [
    //👇 Fake "release" branch so that we can release alpha versions in `main`
    //   until we can release 1.0.0
    'release',
    { name: 'main', prerelease: 'alpha' },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', { pkgRoot: './dist/ngx-metadata' }],
    '@semantic-release/github',
  ],
  tagFormat: 'ngx-metadata-v${version}',
  preset: 'conventionalcommits',
  presetConfig: {
    header: 'CHANGELOG',
    types: [
      {
        type: 'feat',
        section: 'Features',
      },
      {
        type: 'fix',
        section: 'Bug Fixes',
      },
      {
        type: 'perf',
        section: 'Performance Improvements',
      },
      {
        type: 'revert',
        section: 'Reverts',
      },
      {
        type: 'docs',
        section: 'Documentation',
      },
      {
        type: 'style',
        section: 'Style',
      },
      {
        type: 'chore',
        section: 'Miscellaneous Chores',
      },
      {
        type: 'refactor',
        section: 'Code Refactoring',
      },
      {
        type: 'test',
        section: 'Tests',
      },
      {
        type: 'build',
        section: 'Build System',
      },
      {
        type: 'ci',
        section: 'Continuous (Integration|Deployment)',
      },
    ],
  },
  writerOpts: {
    finalizeContext: (context) => {
      return { ...context, version: `\`ngx-metadata\` v${context.version}` }
    },
  },
}
