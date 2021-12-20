import { test, expect } from '@jest/globals';
import nock from 'nock';
// import fs from 'fs/promises';
// import path from 'path';
// import os from 'os';

import pageLoader from '../index.js';

const url = 'https://ru.hexlet.io/courses';

// beforeAll(() => {

// });

// beforeEach(async () => {
//   await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
// });

test('get html', async () => {
  nock('https://ru.hexlet.io')
    .get('/courses')
    .reply(200, '<!DOCTYPE html>');

  const data = await pageLoader('./', url);

  expect(data).toBe('<!DOCTYPE html>');
});
