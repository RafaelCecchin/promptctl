import { loadConfig } from './loadConfig.js';
import { loadPrompt } from './loadPrompt.js';
import { runCommands } from './runCommands.js';
import { buildPrompt } from './buildPrompt.js';
import { callOpenAI } from './openai.js';
import { showMarkdown } from './showMarkdown.js';

export async function run(name) {
  const config = loadConfig();
  const promptCfg = config.prompts[name];

  if (!promptCfg) {
    throw new Error(`Prompt '${name}' não encontrado`);
  }

  const promptText = loadPrompt(promptCfg.prompt);
  const cmdOutput = runCommands(promptCfg.cmd || []);
  const finalPrompt = buildPrompt(promptText, cmdOutput, name);
  const answer = await callOpenAI(config, finalPrompt);
  showMarkdown(answer, name);
}
