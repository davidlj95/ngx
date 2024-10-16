import { SemVer } from 'semver'
import { supportsNgNewWithSsr } from './supports-ng-new-with-ssr.js'
import { Log } from './utils.js'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { NPMRC_FILENAME } from './constants.js'
import { execa } from './execa.js'

export async function setupSsr(opts: {
  cliBinary: string
  appDir: string
  cliVersionSemVer: SemVer
}) {
  if (supportsNgNewWithSsr(opts.cliVersionSemVer)) {
    Log.debug(
      `Skipping SSR setup: Angular CLI %s supports creating apps
   with SSR support, so assuming it has been added already at creation`,
      opts.cliVersionSemVer,
    )
    return
  }
  // Avoid failing on CI/CD where second `install` command triggered by
  // adding `@nguniversal` doesn't work due to default `--frozen-lockfile`
  // behaviour
  Log.step('Configuring pnpm to disable lockfiles')
  await writeFile(join(opts.appDir, NPMRC_FILENAME), 'lockfile=false')
  // Before v17, the recommendation was using @nguniversal for SSR
  // Current docs SSR guide do this with `ng add @angular/ssr`, which starts at v17
  // https://v16.angular.io/guide/universal
  Log.step('Setting up SSR using @nguniversal')
  await execa(
    opts.cliBinary,
    ['add', '--skip-confirmation', '@nguniversal/express-engine'],
    {
      cwd: opts.appDir,
    },
  )
  // Seems there's no way to avoid installing deps
  // https://github.com/angular/angular-cli/blob/16.2.14/packages/angular/cli/src/commands/add/cli.ts#L304
  Log.step('Removing node modules and %s', NPMRC_FILENAME)
  await execa('rm', ['-rf', 'node_modules', NPMRC_FILENAME], {
    cwd: opts.appDir,
  })
}
