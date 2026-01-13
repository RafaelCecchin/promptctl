import OpenAI from 'openai';

export async function callOpenAI(config, content) {
  const client = new OpenAI({ apiKey: config.apiKey });
  const res = await client.chat.completions.create({
    model: config.model || 'gpt-4.1',
    messages: [{ role: 'user', content }]
  });
  return res.choices[0].message.content;
}
