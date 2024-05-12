import { Log } from './utils.js'
import { execa } from './execa.js'

export async function disableAnalytics(opts: {
  cliBinary: string
  appDir: string
}) {
  Log.step('Disabling Angular analytics')
  return execa(opts.cliBinary, ['config', 'cli.analytics', false.toString()], {
    cwd: opts.appDir,
  })
}
