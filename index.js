import axios from 'axios';
import fs from 'fs/promises';

import getFilePath from './src/getFilePath.js';
import findImages from './src/findImages.js';
// import changeLinks from './src/changeLinks.js';

export default (output, url) => {
  const fileName = getFilePath(output, url, '.html');
  const dirName = getFilePath(output, url, '_files');

  return axios.get(url)
    .then((res) => findImages(res.data, dirName))
    .then((data) => fs.writeFile(fileName, data))
    .then(console.log(`\nOK saved: ${fileName}`));
};
