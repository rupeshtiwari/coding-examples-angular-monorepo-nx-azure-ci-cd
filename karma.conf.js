// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const { join } = require('path');
const { constants } = require('karma');

module.exports = () => {
  return {
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter'),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: join(__dirname, '../../coverage'),
      reports: ['cobertura'],
      fixWebpackSourcePaths: true,
      // thresholds: {
      //   statements: 80,
      //   lines: 80,
      //   branches: 80,
      //   functions: 80
      // }
    },
    junitReporter: {
      outputDir: 'testresults/junit',
      outputFile: 'unit-test-result.xml',
      useBrowserName: false,
    },
    reporters: ['progress', 'kjhtml', 'junit'],
    port: 9876,
    colors: true,
    logLevel: constants.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless'],
    singleRun: true,
    failOnEmptyTestSuite: false
  };
};
