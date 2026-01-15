require('dotenv').config();
const path = require('path');

function loadConfig() {
  const cfgPath = path.join(process.cwd(), 'promptctl.config.js');
  
  try {
    return require(cfgPath);
  } catch (err) {
    console.error('Erro ao carregar promptctl.config.js');
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = { loadConfig };
