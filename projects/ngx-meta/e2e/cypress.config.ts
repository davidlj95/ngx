import { defineConfig } from 'cypress'
import registerCodeCoverageTasks from '@cypress/code-coverage/task'
import { removeNycTempDir, renameJsonReport } from './cypress/support/coverage'

export default defineConfig({
  e2e: {
    //👇 Keep in sync with `add-ci-run-scripts.ts`
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions,
    ) {
      // implement node event listeners here
      registerCodeCoverageTasks(on, config)
      on('before:run', async () => {
        console.debug('Running before:run tasks')
        await removeNycTempDir()
      })
      on('after:run', async () => {
        console.debug('Running after:run tasks')
        await renameJsonReport()
        await removeNycTempDir()
      })
      return config
    },
  },
  //👇 Trying it out. Should be fine for CI/CD too
  defaultCommandTimeout: 1000,
})
