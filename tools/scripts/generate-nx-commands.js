/**
 * # Generate Ci command
 * 1. It will identify the affected projects
 * Example:
 * {"lint":["branding-logger","cutepuppies-admin"],"test":["branding-logger","cutepuppies-admin"],"build":["cutepuppies-admin"],"publish":["cutepuppies-admin"]}
 */
const execSync = require('child_process').execSync;
const isMaster = process.argv[2] === 'False';
const baseSha = isMaster ? 'origin/main~1' : 'origin/main';
const skipCache = process.argv[3] === 'True';

console.log(
  JSON.stringify({
    ...commands('lint'),
    ...commands('test'),
    ...commands('build'),
    ...affectedApps('publish'), // publish command for the apps
  })
);

function commands(target) {
  let script;

  if (skipCache) {
    console.log(`skip-nx-cache is enabled`)
    script = `npx nx print-affected --base=${baseSha} --target=${target} --skip-nx-cache`;
  } else {
    script = `npx nx print-affected --base=${baseSha} --target=${target}`;
  }

  const array = JSON.parse(execSync(script).toString().trim()).tasks.map(
    (t) => t.target.project
  );

  return { [target]: array };
}

function affectedApps(command) {
  const x = execSync(`npx nx affected:apps --base=${baseSha}`)
    .toString()
    .trim();

  let apps = x ? x.split('\n\n')[1].split(' - ').slice(1) : [];
  apps = apps.map((t) => t.replace('\n', '').trim());

  return { [command]: apps };
}
