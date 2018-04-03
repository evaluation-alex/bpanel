// Looks at the git tags and sha to output the version.

const fs = require('fs');
const { execSync } = require('child_process');
let commit = '';
try {
  commit = execSync('git rev-parse HEAD').toString();
} catch(e) { };

fs.writeFileSync(
  'webapp/version.json',
  JSON.stringify({
    commit,
    version: require('../package.json').version
  })
);
