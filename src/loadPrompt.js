import fs from 'fs';

export function loadPrompt(p) {
  return fs.readFileSync(p, 'utf-8');
}
