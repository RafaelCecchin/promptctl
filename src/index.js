const { loadConfig } = require('./loadConfig');
const { loadPrompt } = require('./loadPrompt');
const { runCommands } = require('./runCommands');
const { buildPrompt } = require('./buildPrompt');
const { callGemini } = require('./gemini');
const { showMarkdown } = require('./showMarkdown');

async function run(name) {
  const config = loadConfig();

  if (!config.prompts || !config.prompts[name]) {
    console.error(`Prompt '${name}' não encontrado`);
    process.exit(1);
  }

  const promptCfg = config.prompts[name];
  const promptText = loadPrompt(promptCfg.prompt);
  const cmdOutput = runCommands(promptCfg.cmd || []);
  const finalPrompt = buildPrompt(promptText, cmdOutput, name);
  const answer = await callGemini(config, finalPrompt);

  showMarkdown(answer, name, promptCfg.codePath || 'code');
}

module.exports = { run };
