import path from 'path';

export default (output, url) => {
  const parsedUrl = new URL(url);

  const host = parsedUrl.hostname.replace(/\W/g, '-');
  const pathname = parsedUrl.pathname.replace(/\W/g, '-');
  const fileName = `${host}${pathname}.html`;

  return path.resolve(output, fileName);
};
