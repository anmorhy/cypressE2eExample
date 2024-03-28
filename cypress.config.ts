import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
    },
  },
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: '**/*.spec.{js,jsx,ts,tsx}',
  },
  defaultCommandTimeout: 30000,
  viewportWidth: 500,
  viewportHeight: 800,
  retries: 3
});
