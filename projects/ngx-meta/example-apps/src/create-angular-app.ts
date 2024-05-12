import { SemVer } from 'semver'
import { Log } from './utils.js'
import { join } from 'path'
import { supportsNgNewWithSsr } from './supports-ng-new-with-ssr.js'
import { execa } from './execa.js'

export async function createAngularApp(opts: {
  name: string
  extraArgs?: ReadonlyArray<string>
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
      `${opts.name}`,
      ...ANGULAR_CLI_NEW_DEFAULT_ARGS,
      ...(opts.extraArgs ?? []),
      ...(ngNewSupportsSsr ? [ANGULAR_CLI_NEW_SSR_ARG] : []),
    ],
    { cwd: opts.dir },
  )
  Log.ok('Angular app created')
  return join(opts.dir, opts.name)
}
