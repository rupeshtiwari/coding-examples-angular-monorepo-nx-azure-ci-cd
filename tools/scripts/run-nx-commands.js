/**
 * # Run Many
 * It will run the script using nx command line to run them in parellel.
 */
const execSync = require('child_process').execSync;
const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');

const commands = JSON.parse(process.argv[2]);
/*
const commands = {
  lint: [
    'branding-logger',
    'cutepuppies-client',
    'cutepuppies-admin',
    'sales-puppy-editor',
    'sales-puppies',
    'branding-ngmaterial',
    'customers-users',
  ],
  test: [
    'branding-logger',
    'cutepuppies-client',
    'cutepuppies-admin',
    'sales-puppy-editor',
    'sales-puppies',
    'branding-ngmaterial',
    'customers-users',
  ],
  build: ['cutepuppies-client', 'cutepuppies-admin'],
  publish: ['cutepuppies-client', 'cutepuppies-admin'],
};
*/

const target = process.argv[3];
// const target = 'test';
const projects = commands[target];
const coverageDir = path.resolve(__dirname, '../../coverage');
const mergedDir = path.join(coverageDir, '/merged');

try {
  switch (target) {
    case 'test': {
      runTestCommand();
      break;
    }
    case 'build': {
      runBuildCommand();
      break;
    }
    default: {
      runCommand(); // lint
    }
  }
} catch (e) {
  console.log(e);
  process.exit(1);
}

function runBuildCommand() {
  runCommand('--prod');
}

function runCommand(args = '') {
  execSync(
    `npx nx run-many --target=${target} --projects=${projects.join(
      ','
    )} --parallel ${args}`,
    {
      stdio: [0, 1, 2],
    }
  );
}

function runTestCommand() {
  execSync(
    `npx nx run-many --target=${target} --projects=${projects.join(
      ','
    )} --parallel --browsers=ChromeHeadless --codeCoverage --sourceMap=false`,
    {
      stdio: [0, 1, 2],
    }
  );

  mergeCodeCoverage();
}

function mergeCodeCoverage() {
  copyCodeCoverageToMergedFolder();

  const files = glob(mergedDir + '/**/*.xml', { sync: true });

  const packages = files
    .map((f, i) => {
      const fileName = path.basename(f);
      const projectName = projects.filter((p) => fileName.search(p) > -1).pop();

      return `${projectName}=${fileName}`;
    })
    .join(' ');

  const script = `npx cobertura-merge -o merged-cobertura-coverage.xml ${packages}`;

  execSync(script, {
    stdio: [0, 1, 2],
    cwd: mergedDir,
  });
}

function copyCodeCoverageToMergedFolder() {
  fs.emptyDirSync(mergedDir);
  const files = glob(coverageDir + '/**/*.xml', { sync: true });

  files.forEach((f, i) => {
    const x = f.split('/coverage/')[1].replace(/\//g, '-').split('/').pop();
    fs.copySync(f, `${mergedDir}/${x}`);
  });
}
