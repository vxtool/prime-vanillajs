"use strict";

var _manipulation = require("../lib/utils/manipulation");

var _price = require("../lib/components/product/price");

// import makeRequest from '../lib/utils/request';
var $element = document.querySelector("body");
(0, _manipulation.addClass)($element, "test1");
(0, _manipulation.addClass)($element, "test2");

if ((0, _manipulation.hasClass)($element, "test1")) {
  console.log("has class test1");
}

(0, _manipulation.removeClass)($element, "test1"); // makeRequest({ url: '/' }, () => {});

document.querySelector('[data-js="main"]').innerHTML = (0, _price.priceUnformat)("R$ 123,00");
