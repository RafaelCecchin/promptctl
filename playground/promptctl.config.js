module.exports = {
  apiKey: process.env.GEMINI_API_KEY,
  model: 'gemini-2.5-flash',
  prompts: {
    test: {
      prompt: 'prompts\\test.txt',
      cmd: [
        'echo teste funcionando'
      ]
    }
  }
};
