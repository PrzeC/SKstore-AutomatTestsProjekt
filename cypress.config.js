const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1440,
  viewportHeight: 1080,
  fixturesFolder: "cypress/fixtures",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: false,
    projectId: "5bozs3",
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});