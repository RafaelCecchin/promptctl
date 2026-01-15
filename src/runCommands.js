const { execSync } = require('child_process');

function runCommands(cmds) {
  return cmds.map(cmd => {
    try {
      return {
        cmd,
        output: execSync(cmd, { encoding: 'utf-8' })
      };
    } catch (e) {
      return {
        cmd,
        output: e.message
      };
    }
  });
}

module.exports = { runCommands };
