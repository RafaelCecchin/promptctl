import { execSync } from 'child_process';

export function runCommands(cmds) {
  return cmds.map(c => {
    try {
      return { cmd: c, output: execSync(c, { encoding: 'utf-8' }) };
    } catch (e) {
      return { cmd: c, output: e.message };
    }
  });
}
