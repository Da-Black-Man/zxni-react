const APP_NAME = 'zxni';
const DATA_API_KEY = '.data-api';

const html = document.documentElement;
const { body } = document;
const isDebug = !!html.getAttribute('data-debug');

export { APP_NAME, DATA_API_KEY, html, body, isDebug };
