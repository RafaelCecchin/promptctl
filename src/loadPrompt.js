const fs = require('fs');

function loadPrompt(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

module.exports = { loadPrompt };
