import { Log } from './utils.js'
import { execa } from 'execa'

export async function installCli(tmpDir: string) {
  Log.step('Installing Angular CLI')
  const installCommand = execa('pnpm', ['install'], {
    cwd: tmpDir,
    all: true,
    env: { FORCE_COLOR: true.toString() },
  })
  Log.stream(installCommand.all)
  await installCommand
}
