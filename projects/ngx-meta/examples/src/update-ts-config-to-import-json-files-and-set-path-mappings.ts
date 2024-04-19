import { getRelativeLibraryE2EDir, jsonToString, Log } from './utils.js'
import { findTsConfigFileOrExit } from './find-ts-config-file-or-exit.js'
import ts from 'typescript'
import { join } from 'path'
import { writeFile } from 'fs/promises'

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
  type TsConfig = { compilerOptions: ts.CompilerOptions }
  const rawConfig = config.raw as TsConfig
  rawConfig.compilerOptions.resolveJsonModule = true
  // 👇 Not needed for Angular v17, given `esModuleInterop` is enabled there
  //    https://www.typescriptlang.org/tsconfig#allowSyntheticDefaultImports
  rawConfig.compilerOptions.allowSyntheticDefaultImports = true
  rawConfig.compilerOptions.paths = {
    ...rawConfig.compilerOptions.paths,
    '@/e2e/*': [join(getRelativeLibraryE2EDir(), '*')],
  }
  await writeFile(configFileName, jsonToString(config.raw))
}
