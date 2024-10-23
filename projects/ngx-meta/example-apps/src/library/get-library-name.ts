import { readPackageJsonInDir } from '../package-json/index.js'
import { LIBRARY_DIST_DIR } from './library-dist-dir.js'

export const getLibraryName = async (): Promise<string> =>
  (await readPackageJsonInDir(LIBRARY_DIST_DIR)).name
