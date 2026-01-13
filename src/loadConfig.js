import path from 'path';
import { fileURLToPath } from 'url';

export function loadConfig() {
  const cwd = process.cwd();
  const cfgPath = path.join(cwd, 'promptctl.config.js');
  return require(cfgPath);
}
