import axios from 'axios';
import fs from 'fs/promises';
import path from 'path';
import * as cheerio from 'cheerio';

const parseImageSrc = (directory, src) => {
  const imageURL = new URL(src);
  const ext = path.extname(src);
  const host = imageURL.hostname.replace(/\W/g, '-');
  let pathname = imageURL.pathname.replace(/\W/g, '-');
  pathname = pathname.replace('-jpg', ''); // подумать!!

  return path.resolve(directory, `${host}${pathname}${ext}`);
};

const findImageSrc = ($) => {
  const listOfSrc = [];

  $('img').each((i, elem) => listOfSrc.push($(elem).attr('src')));
  return listOfSrc;
};

const changeImageSrc = ($, listOfNewSrc) => {
  let i = 0;

  $('img').each(function change() {
    $(this).attr('src', listOfNewSrc[i]);
    console.log(`OK saved: ${listOfNewSrc[i]}`);
    i += 1;
  });

  return $.html();
};

const writeImages = (data, directory) => {
  const $ = cheerio.load(data);

  const listOfSrc = findImageSrc($);
  const listOfNewSrc = [];

  const promises = [];

  listOfSrc.forEach((src) => {
    const newSrc = parseImageSrc(directory, src);

    listOfNewSrc.push(newSrc);

    const promise = axios({
      method: 'GET',
      url: src,
      responseType: 'arraybuffer',
    })
      .then((response) => {
        fs.writeFile(newSrc, response.data);
      });

    promises.push(promise);
  });

  return Promise.all(promises)
    .then(() => changeImageSrc($, listOfNewSrc));
};

export default (data, directory) => fs.mkdir(directory)
  .catch(() => console.log(`\nfile '${directory}' already exists\n`))
  .then(() => writeImages(data, directory));
