import path from 'path';

export default (output, url, ext) => {
  const parsedUrl = new URL(url);

  const host = parsedUrl.hostname.replace(/\W/g, '-');
  const pathname = parsedUrl.pathname !== '/' ? parsedUrl.pathname.replace(/\W/g, '-') : '';

  const fileName = `${host}${pathname}${ext}`;

  return path.resolve(output, fileName);
};
