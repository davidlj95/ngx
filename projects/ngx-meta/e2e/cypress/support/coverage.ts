import { rename, rm } from 'fs/promises'
import { join } from 'path'
import { loadNycConfig } from '@istanbuljs/load-nyc-config'

export async function removeNycTempDir() {
  const nycConfig = await loadNycConfig()
  const nycTempDir = nycConfig.tempDir ?? DEFAULT_NYC_TEMP_DIR
  const nycTempPath = join(nycConfig.cwd, nycTempDir)

  if (nycTempPath.length === 0) {
    console.error('Temporary path is not properly defined. Aborting')
    return
  }

  console.info('Clearing nyc temp dir "%s"', nycTempPath)
  await rm(join(nycTempPath), { recursive: true, force: true })
}

const DEFAULT_NYC_TEMP_DIR = '.nyc_output'

export async function renameJsonReport() {
  const nycConfig = await loadNycConfig()
  if (
    !nycConfig['reporter']
      ?.map((reporter) => reporter.toLowerCase())
      .includes('json')
  ) {
    console.debug(
      'No JSON coverage report emitted as per configuration. Not renaming',
    )
    return
  }

  console.info('Renaming JSON coverage report')
  const coverageDirectory = join(
    nycConfig.cwd,
    nycConfig.reportDir ?? DEFAULT_COVERAGE_DIR,
  )
  const jsonReportName =
    process.env['COVERAGE_JSON_REPORT_NAME'] ?? DEFAULT_RENAMED_JSON_REPORT_NAME
  const oldPath = join(coverageDirectory, DEFAULT_JSON_REPORT_NAME)
  const newPath = join(coverageDirectory, jsonReportName)
  console.info(" Source:      '%s'", oldPath)
  console.info(" Destination: '%s'", newPath)

  await rename(oldPath, newPath)
}

const DEFAULT_COVERAGE_DIR = 'coverage'
const DEFAULT_JSON_REPORT_NAME = 'coverage-final.json'
const DEFAULT_RENAMED_JSON_REPORT_NAME = 'e2e.json'
