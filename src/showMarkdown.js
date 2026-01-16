const fs = require('fs');
const os = require('os');
const path = require('path');
const { exec } = require('child_process');

function showMarkdown(md, name, codePath) {
  const file = path.join(os.tmpdir(), `promptctl-${name}.md`);
  fs.writeFileSync(file, md);
  cmd = `${codePath} --reuse-window "${file}"`;
  console.log(cmd);
  exec(cmd);
}

module.exports = { showMarkdown };
