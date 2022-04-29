[![Actions Status](https://github.com/mgrrtt/backend-project-lvl3/workflows/hexlet-check/badge.svg)](https://github.com/mgrrtt/backend-project-lvl3/actions)
[![Actions Status](https://github.com/mgrrtt/backend-project-lvl3/workflows/dev-checks/badge.svg)](https://github.com/mgrrtt/backend-project-lvl3/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/88a0a054978a0a1a0d00/maintainability)](https://codeclimate.com/github/mgrrtt/backend-project-lvl3/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/88a0a054978a0a1a0d00/test_coverage)](https://codeclimate.com/github/mgrrtt/backend-project-lvl3/test_coverage)

&nbsp;
&nbsp;

## Описание
*PageLoader* – утилита командной строки, которая скачивает страницы из интернета и сохраняет их на компьютере. Вместе со страницей она скачивает все ресурсы (картинки, стили и js) давая возможность открывать страницу без интернета.

Утилита скачивает ресурсы параллельно и показывает прогресс по каждому ресурсу в терминале.

&nbsp;
&nbsp;

## Пример использования:

```
page-loader --output /var/tmp https://ru.hexlet.io/courses

✔ https://ru.hexlet.io/lessons.rss
✔ https://ru.hexlet.io/assets/application.css
✔ https://ru.hexlet.io/assets/favicon.ico
✔ https://ru.hexlet.io/assets/favicon-196x196.png
✔ https://ru.hexlet.io/assets/favicon-96x96.png
✔ https://ru.hexlet.io/assets/favicon-32x32.png
✔ https://ru.hexlet.io/assets/favicon-16x16.png
✔ https://ru.hexlet.io/assets/favicon-128.png

Page was downloaded as 'ru-hexlet-io-courses.html'
```
