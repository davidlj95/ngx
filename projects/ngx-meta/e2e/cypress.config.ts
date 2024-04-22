import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    //👇 Keep in sync with `add-ci-run-scripts.ts`
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on: unknown, config: unknown) {
      // implement node event listeners here
    },
  },
  //👇 Trying it out. Should be fine for CI/CD too
  defaultCommandTimeout: 1000,
})
