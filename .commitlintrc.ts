import { RuleConfigSeverity, UserConfig } from '@commitlint/types'
import * as child_process from 'child_process'
import { promisify } from 'util'
import configConventional from '@commitlint/config-conventional'

const COMMITLINT_CONFIG: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': async () => {
      // Dependabot writes long message lines
      // Can't be customized right now to avoid that behaviour
      // https://github.com/dependabot/dependabot-core/issues/1460
      // We have to make an exception then
      // Only checking last commit as dependabot only commits once per PR
      if (await lastCommitIsFromDependabot()) {
        return [RuleConfigSeverity.Disabled]
      }
      return configConventional.rules['body-max-line-length']
    },
  },
}

const lastCommitIsFromDependabot = async () => {
  const lastCommitAuthor = (
    await asyncExec("git show -s --format='%an'", {
      encoding: 'utf-8',
    })
  ).stdout.trim()
  return lastCommitAuthor === DEPENDABOT_AUTHOR_NAME
}

const asyncExec = promisify(child_process.exec)
const DEPENDABOT_AUTHOR_NAME = 'dependabot[bot]'

export default COMMITLINT_CONFIG
