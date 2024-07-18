module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || "",
    formatOptions: {
      snippetInterface: "async-await"
    },
    paths: [
      "test/features/"
    ],
    //publishQuiet: true,
    dryRun: false,
    require: [
      "test/steps/*.js",
      "test/fixtures/*.js",
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    parallel: 1
  },
  rerun: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    publishQuiet: true,
    dryRun: false,
    require: [
      "test/steps/*.js",
      "test/fixtures/*.js",
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    parallel: 2
  }
}