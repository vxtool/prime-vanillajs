import { hasClass, addClass, removeClass } from './utils/manipulation';
// import makeRequest from './utils/request';
import { priceUnformat } from './components/product/price';

const $element = document.querySelector('body');

addClass($element, 'test');
hasClass($element, 'test');
removeClass($element, 'test');

// makeRequest({ url: '/' }, () => {});

priceUnformat('R$ 123,00');
