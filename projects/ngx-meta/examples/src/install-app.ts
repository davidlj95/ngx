import { Log } from './utils.js'
import { execa } from 'execa'

export async function installApp(appDir: string) {
  Log.step('Installing app dependencies')
  const installCommand = execa('pnpm', ['install'], {
    cwd: appDir,
    all: true,
    env: { FORCE_COLOR: true.toString() },
  })
  Log.stream(installCommand.all)
  await installCommand
}
