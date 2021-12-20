#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import { createRequire } from 'module';

import pageLoader from '../index.js';

const require = createRequire(import.meta.url);
const config = require('../package.json');

const program = new Command();

program
  .description('Page loader utility')
  .arguments('<url>')
  .option('-o, --output [dir]', 'output dir', './')
  .version(config.version)
  .action(
    (url) => {
      pageLoader(program.opts().output, url);
    },
  )
  .parse();
