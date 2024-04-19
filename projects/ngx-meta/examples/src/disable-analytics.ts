import { Log } from './utils.js'
import { execa } from 'execa'

export async function disableAnalytics(opts: {
  cliBinary: string
  appDir: string
}) {
  Log.step('Disabling Angular analytics')
  const disableAnalyticsCommand = execa(
    opts.cliBinary,
    ['config', 'cli.analytics', false.toString()],
    {
      cwd: opts.appDir,
      all: true,
      env: { FORCE_COLOR: true.toString() },
    },
  )
  Log.stream(disableAnalyticsCommand.all)
  await disableAnalyticsCommand
}
