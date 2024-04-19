import ts from 'typescript'
import { Log } from './utils.js'

export async function findTsConfigFileOrExit(projectDir: string) {
  const configFileName = ts.findConfigFile(projectDir, ts.sys.fileExists)
  if (!configFileName) {
    Log.error('Cannot find Typescript config file in project directory')
    Log.item(projectDir)
    process.exit(1)
  }
  return configFileName
}
