/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: [
    //👇 Fake branch so that we can release alpha versions in `main`
    //   until we can release 1.0.0
    'semantic-release',
    { name: 'main', prerelease: 'alpha' },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      //👇 Publish built version
      { pkgRoot: './dist/ngx-meta', tarballDir: 'dist', npmPublish: false },
    ],
    ['@semantic-release/github', { assets: 'dist/*.tgz' }],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'projects/ngx-meta/src/CHANGELOG.md',
      },
    ],
  ],
  //👇 Add library name in tag
  tagFormat: 'ngx-meta-v${version}',
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
  releaseRules: [
    {
      // Commit type depends on preset
      // https://github.com/semantic-release/commit-analyzer/blob/v11.1.0/README.md#specific-commit-properties
      // https://github.com/conventional-changelog/conventional-changelog/tree/conventional-commits-parser-v5.0.0/packages/conventional-commits-parser#usage
      // https://github.com/conventional-changelog/conventional-changelog/tree/conventional-changelog-conventionalcommits-v7.0.2/packages/conventional-changelog-conventionalcommits
      // 👇 Maintenance releases. For instance when updating dependencies
      type: 'chore',
      scope: 'release',
      subject: '*maintenance*',
      release: 'patch',
    },
  ],
  writerOpts: {
    //👇 Add library name in release notes
    // https://github.com/conventional-changelog/conventional-changelog/tree/conventional-changelog-writer-v7.0.1/packages/conventional-changelog-writer#finalizecontext
    finalizeContext: (context) => {
      return { ...context, version: `\`ngx-meta\` v${context.version}` }
    },
  },
}
