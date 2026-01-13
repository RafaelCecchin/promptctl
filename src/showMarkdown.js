import fs from 'fs';
import os from 'os';
import path from 'path';
import { exec } from 'child_process';

export function showMarkdown(md, name) {
  const file = path.join(os.tmpdir(), `promptctl-${name}.md`);
  fs.writeFileSync(file, md);
  exec(`code --reuse-window --preview ${file}`);
}
