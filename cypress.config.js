const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://app.louper.io/',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    hideXHRInCommandLog: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: "cypress/reports",      // Directory for JSON/HTML output
      overwrite: false,
      html: true,
      json: true
    },
    retries: {
      runMode: 0,
      openMode: 0
    },
    env: {
      username: 'ashishwas@gmail.com',
      password: 'Louper@1'
    }
  },
});
