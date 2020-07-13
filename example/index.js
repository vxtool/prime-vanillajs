import { hasClass, addClass, removeClass } from "../lib/utils/manipulation";
// import makeRequest from '../lib/utils/request';
import { priceUnformat } from "../lib/components/product/price";

const $element = document.querySelector("body");

addClass($element, "test");
hasClass($element, "test");
removeClass($element, "test");

// makeRequest({ url: '/' }, () => {});

priceUnformat("R$ 123,00");
