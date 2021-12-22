import { test, expect } from '@jest/globals';
import nock from 'nock';
import fs from 'fs/promises';
import path from 'path';
// import os from 'os';

import pageLoader from '../index.js';

import before from '../__fixtures__/before.js';
import after from '../__fixtures__/after.js';

const url = 'https://ru.hexlet.io/courses';
const filepath = path.resolve(process.cwd(), 'ru-hexlet-io-courses.html');
const dirpath = path.resolve(process.cwd(), 'ru-hexlet-io-courses_files');
const filename = 'cdn2-hexlet-io-assets-team-you-bc72575a0e6eb39de3e28e54a8df1138beaa57cd5300061ecb5c202773131f9e.jpg';

// beforeAll(() => {

// });

// beforeEach(async () => {
//   await fs.mkdtemp(path.join(os.tmpdir(), 'page-loader-'));
// });

test('get html', async () => {
  nock('https://ru.hexlet.io')
    .get('/courses')
    .reply(200, before);

  await pageLoader('./', url);
  const html = await fs.readFile(filepath, 'utf-8');
  const names = await fs.readdir(dirpath);

  expect(html).toBe(after);
  expect(names).toHaveLength(1);
  expect(names[0]).toEqual(filename);
});
