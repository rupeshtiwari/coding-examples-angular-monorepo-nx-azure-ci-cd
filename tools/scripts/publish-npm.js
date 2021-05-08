/**
 * . bump the npm version using build id
 * . publish to npm package repository
 * . return new npm version
 *
 */

const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

const args = {
  commands: process.argv[2],
};

if (!args.commands) {
  throw new Error('Commands are required');
}

const commands = JSON.parse(args.commands);
const projects = commands['publish'];

publishNpmPackage();

function publishNpmPackage() {
  projects.forEach((app) => {
    const cwd = path.resolve(__dirname, '../../', `dist/apps/${app}`);

    try {
      execSync(`npm publish --access public`, { cwd, stdio: [0, 1, 2] });
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  });
}
