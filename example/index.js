import { hasClass, addClass, removeClass } from "../lib/utils/manipulation";
// import makeRequest from '../lib/utils/request';
import { priceUnformat } from "../lib/components/product/price";

const $element = document.querySelector("body");

addClass($element, "test1");
addClass($element, "test2");
if (hasClass($element, "test1")) {
  console.log("has class test1");
}
removeClass($element, "test1");

// makeRequest({ url: '/' }, () => {});

document.querySelector('[data-js="main"]').innerHTML = priceUnformat(
  "R$ 123,00"
);
