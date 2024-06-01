module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
     [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md', 'dist/**/*'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        pushTo: 'origin',
        branch: 'release',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: 'dist/**/*',
        successComment: false,
        failComment: false,
        labels: ['automated release'],
        addReleases: 'bottom',
      },
    ],
  ],
};

