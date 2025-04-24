const { execSync } = require('child_process')
const micromatch = require('micromatch')

const localBranchAsMain = Boolean(
  process.env.LOCAL_SEMANTIC_RELEASE_BRANCH_AS_MAIN,
)
const getCurrentBranch = () =>
  execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf-8',
  }).trim()
const repositoryUrl = process.env.LOCAL_SEMANTIC_RELEASE_REPOSITORY_URL?.trim()
const isDotRepositoryUrl = repositoryUrl === '.'
const MAINTENANCE_BRANCH_GLOB = '*[0-9]+.x'
const getMaintenanceBranchConfig = () => {
  const baseConfig = {
    name: MAINTENANCE_BRANCH_GLOB,
  }
  const currentBranch = getCurrentBranch()
  const isMaintenanceBranch = micromatch.isMatch(
    currentBranch,
    MAINTENANCE_BRANCH_GLOB,
  )
  if (!isMaintenanceBranch) return baseConfig
  const prefixedMajorVersion = currentBranch.split('.').at(-2)
  const matches = /[0-9]+$/.exec(prefixedMajorVersion)
  const majorVersion = matches[0]
  if (
    matches.index === 0 &&
    prefixedMajorVersion.length === majorVersion.length
  )
    throw new Error('Non major version maintenance branches are not supported')
  return {
    ...baseConfig,
    range: `${majorVersion}.x`,
    channel: `v${majorVersion}`,
  }
}

// noinspection JSUnusedGlobalSymbols
/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  repositoryUrl,
  branches: [
    //👇 Major version maintenance branches
    getMaintenanceBranchConfig(),
    {
      name: localBranchAsMain ? getCurrentBranch() : 'main',
      // ⚠️ Default channel is `undefined` for first release branch, but branch name for the rest.
      // Using `false` to indicate the default distribution channel
      // https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#branches-properties
      channel: false,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    // When running locally with the repository URL set to `.`, it fails
    // As tries to read parts from `.` which is not a URL:
    // https://github.com/semantic-release/release-notes-generator/blob/v13.0.0/index.js#L37-L39
    !isDotRepositoryUrl
      ? '@semantic-release/release-notes-generator'
      : undefined,
    [
      '@semantic-release/npm',
      //👇 Publish built version
      {
        pkgRoot: './projects/ngx-meta/dist',
        tarballDir: './projects/ngx-meta/dist',
        npmPublish: true,
      },
    ],
    // When using `.` as a repository, interest is in publishing
    // Hence there's no need for GitHub release, issue comments...
    !isDotRepositoryUrl
      ? [
          '@semantic-release/github',
          { assets: './projects/ngx-meta/dist/*.tgz' },
        ]
      : undefined,
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'projects/ngx-meta/src/CHANGELOG.md',
      },
    ],
  ].filter((plugin) => !!plugin),
  //👇 Add library name in tag
  tagFormat: 'ngx-meta-v${version}',
  preset: 'conventionalcommits',
  presetConfig: {
    header: 'CHANGELOG',
    types: [
      //👇 Type list:
      // https://github.com/conventional-changelog/conventional-changelog/blob/conventional-changelog-conventionalcommits-v8.0.0/packages/conventional-changelog-conventionalcommits/src/constants.js
      //👇 Emojis:
      // https://github.com/orhun/git-cliff/blob/v2.6.1/config/cliff.toml
      {
        type: 'feat',
        section: '🚀 Features',
      },
      {
        type: 'fix',
        section: '🐛 Bug Fixes',
      },
      {
        type: 'perf',
        section: '⚡️ Performance Improvements',
      },
      {
        type: 'revert',
        section: '↩️ Reverts',
      },
      {
        type: 'docs',
        section: '📚 Documentation',
      },
      {
        type: 'style',
        section: '🎨 Style',
      },
      {
        type: 'chore',
        section: '💼 Miscellaneous Chores',
      },
      {
        type: 'refactor',
        section: '♻️ Code Refactoring',
      },
      {
        type: 'test',
        section: '🧪 Tests',
      },
      {
        type: 'build',
        section: '⚙️ Build System',
      },
      {
        type: 'ci',
        section: '👷 Continuous (Integration|Deployment)',
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
    finalizeContext: (context) => ({
      ...context,
      version: `\`ngx-meta\` v${context.version}`,
    }),
  },
}
