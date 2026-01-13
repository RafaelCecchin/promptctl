export function buildPrompt(prompt, cmds, name) {
  let out = `# Prompt (${name})\n\n${prompt}\n\n---\n# Contexto\n`;
  for (const c of cmds) {
    out += `\n## $ ${c.cmd}\n\n\
${c.output}\
\n`;
  }
  return out;
}
