import { SemVer } from 'semver'
import { supportsNgNewWithSsr } from '../angular/index.js'
import { execa, Log } from '../tools/index.js'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function setupSsr(opts: {
  cliBinary: string
  appDir: string
  cliVersion: SemVer
}) {
  if (supportsNgNewWithSsr(opts.cliVersion)) {
    Log.debug(
      `Skipping SSR setup: Angular CLI %s supports creating apps
   with SSR support, so assuming it has been added already at creation`,
      opts.cliVersion,
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

const NPMRC_FILENAME = '.npmrc'
