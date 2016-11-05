import { hasClass, addClass, removeClass } from './utils/manipulation';
import makeRequest from './utils/request';

const $element = document.querySelector('body');

addClass($element, 'test');
hasClass($element, 'test');
removeClass($element, 'test');

makeRequest({ url: '/' }, () => {});
