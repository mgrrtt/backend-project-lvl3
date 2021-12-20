import axios from 'axios';
import fs from 'fs/promises';

import getFilePath from './src/getFilePath.js';

export default (output, url) => {
  const fileName = getFilePath(output, url);

  return axios.get(url)
    .then((res) => {
      fs.writeFile(fileName, res.data);
      return res.data;
    })
    .then(console.log(fileName));
};
