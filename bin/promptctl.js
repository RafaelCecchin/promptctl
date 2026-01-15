#!/usr/bin/env node

const { run } = require('../src/index');

const name = process.argv[2];

if (!name) {
  console.error('Uso: promptctl <nome-do-prompt>');
  process.exit(1);
}

run(name);
