const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: 'mx8b7v',
  chromeWebSecurity: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      //viewportWidth: 1366,
      //viewportHeight: 768,
      hideXHR: true,
      
  },
});
