/**
 * . bump the npm version using build id
 * . publish to npm package repository
 * . return new npm version
 *
 */
const fs = require('fs');
const path = require('path');
var basePackageJson = require('../../package.json');
const args = {
  commands: process.argv[2],
  buildId: process.argv[3],
};

if (!args.commands) {
  throw new Error('Commands are required');
}

const commands = JSON.parse(args.commands);

if (!args.buildId) {
  throw new Error('Build Number is required');
}
const buildId = args.buildId.toString();

const projects = commands['publish'];

const newVersion = getNewVesrion();

updatePublishingPackageJsonVersion();

console.log(newVersion);

function getNewVesrion() {
  let currentVersion = basePackageJson.version;

  return currentVersion
    .split('.')
    .map((x, i) => (i == 2 ? buildId : x))
    .join('.');
}

function updatePublishingPackageJsonVersion() {
  projects.forEach((project) => {
    updateVersion(
      path.resolve(__dirname, '../../', `dist/apps/${project}/package.json`)
    );
  });
}

function updateVersion(packageJsonFilePath) {
  var package = require(packageJsonFilePath);
  package.version = newVersion;
  fs.writeFileSync(packageJsonFilePath, JSON.stringify(package, null, 2));
}
