const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1440,
  viewportHeight: 1080,
  fixturesFolder: "cypress/fixtures",
  reporter: "mochawesome",
  projectId: "75fcww",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
  env: {
    CYPRESS_RECORD_KEY: "24ab4336-358c-4198-964e-071bdb3b9dde" // Zmień na swój klucz Cypress Dashboard
  }
});