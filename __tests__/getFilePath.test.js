import { test, expect } from '@jest/globals';
import path from 'path';

import getFilePath from '../src/getFilePath.js';

const url = 'https://ru.hexlet.io/courses';
const expectedFilepath = path.resolve(process.cwd(), 'ru-hexlet-io-courses.html');

test('check filepath', () => {
  expect(getFilePath('./', url)).toEqual(expectedFilepath);
});
