import { SemVer } from 'semver'
import { execa, Log } from '../tools/index.js'
import { join } from 'path'
import { supportsNgNewWithSsr } from '../angular/index.js'

export async function createAngularApp(opts: {
  appName: string
  dir: string
  cliVersionSemver: SemVer
}): Promise<string> {
  Log.step('Creating Angular app using Angular CLI')
  const ngNewSupportsSsr = supportsNgNewWithSsr(opts.cliVersionSemver)
  if (ngNewSupportsSsr) {
    Log.info('Adding built-in SSR support')
  }
  // https://angular.dev/cli/new
  const ANGULAR_CLI_NEW_DEFAULT_ARGS = [
    '--inline-style',
    '--minimal',
    '--package-manager=pnpm',
    '--routing',
    '--skip-git',
    '--skip-install',
    '--skip-tests',
    '--style=css',
  ]
  const ANGULAR_CLI_NEW_SSR_ARG = '--ssr'
  await execa(
    'pnpm',
    [
      'ng',
      `new`,
      `${opts.appName}`,
      ...ANGULAR_CLI_NEW_DEFAULT_ARGS,
      ...(ngNewSupportsSsr ? [ANGULAR_CLI_NEW_SSR_ARG] : []),
    ],
    { cwd: opts.dir },
  )
  Log.ok('Angular app created')
  return join(opts.dir, opts.appName)
}
