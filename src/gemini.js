const { GoogleGenerativeAI } = require('@google/generative-ai');

async function callGemini(config, content) {
  if (!config.apiKey) {
    console.error('\n❌ GEMINI_API_KEY não definida');
    console.error('👉 Defina a variável de ambiente antes de rodar:\n');
    console.error('   export GEMINI_API_KEY="sua-chave-aqui"\n');
    process.exit(1);
  }

  const genAI = new GoogleGenerativeAI(config.apiKey);

  const model = genAI.getGenerativeModel({
    model: config.model || 'gemini-1.5-pro'
  });

  try {
    const result = await model.generateContent(content);
    const response = result.response;

    return response.text();
  } catch (err) {
    if (err.message?.includes('API key')) {
      console.error('\n❌ Erro de autenticação com o Gemini');
      console.error('👉 Sua API key é inválida ou expirou');
      console.error('👉 Verifique GEMINI_API_KEY\n');
      process.exit(1);
    }

    if (err.message?.includes('quota') || err.message?.includes('429')) {
      console.error('\n❌ Rate limit excedido');
      console.error('👉 Aguarde alguns segundos e tente novamente\n');
      process.exit(1);
    }

    console.error('\n❌ Erro ao chamar Gemini API');
    console.error(err.message || err);
    process.exit(1);
  }
}

module.exports = { callGemini };
