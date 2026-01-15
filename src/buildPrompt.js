function buildPrompt(prompt, cmds, name) {
  let out = `# Prompt (${name})\n\n${prompt}\n\n---\n# Contexto\n`;

  for (const c of cmds) {
    out += `\n## $ ${c.cmd}\n`;
    out += '```\n' + c.output + '\n```\n';
  }

  return out;
}

module.exports = { buildPrompt };
