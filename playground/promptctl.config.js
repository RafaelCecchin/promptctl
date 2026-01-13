module.exports = {
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-4.1',

  prompts: {
    test: {
      prompt: 'prompts\\test.txt',
      cmd: [
        'echo teste funcionando'
      ]
    }
  }
};
