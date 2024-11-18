import { Log } from '../tools/index.js'
import { findTsConfigFileOrExit } from '../typescript/index.js'
import ts from 'typescript'
import { join } from 'path'
import { writeFile } from 'fs/promises'
import { jsonToString } from '../utils/index.js'

export const RELATIVE_E2E_DIR_FROM_APP_DIR = join('..', '..', '..', 'e2e')

export async function updateTsConfigToImportJsonFilesAndSetPathMappings(
  appDir: string,
) {
  Log.step('Adding JSON imports and path mappings to Typescript config')
  const configFileName = await findTsConfigFileOrExit(appDir)

  const configFile = ts.readConfigFile(configFileName, ts.sys.readFile)
  if (configFile.error) {
    Log.error('Unable to read Typescript config file', configFileName)
    process.exit(1)
  }
  const config = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    appDir,
  )
  interface TsConfig {
    compilerOptions: ts.CompilerOptions
  }
  const rawConfig = config.raw as TsConfig
  rawConfig.compilerOptions.resolveJsonModule = true
  // 👇 Not needed for Angular v17, given `esModuleInterop` is enabled there
  //    https://www.typescriptlang.org/tsconfig#allowSyntheticDefaultImports
  rawConfig.compilerOptions.allowSyntheticDefaultImports = true
  rawConfig.compilerOptions.paths = {
    ...rawConfig.compilerOptions.paths,
    '@/e2e/*': [join(RELATIVE_E2E_DIR_FROM_APP_DIR, '*')],
  }
  await writeFile(configFileName, jsonToString(config.raw))
}
