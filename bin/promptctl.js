#!/usr/bin/env node
import { run } from '../src/index.js';

const name = process.argv[2];
if (!name) {
  console.error('Uso: promptctl <nome-do-prompt>');
  process.exit(1);
}

run(name);
