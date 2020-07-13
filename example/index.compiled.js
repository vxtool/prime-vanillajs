"use strict";

var _manipulation = require("../lib/utils/manipulation");

var _price = require("../lib/components/product/price");

// import makeRequest from '../lib/utils/request';
var $element = document.querySelector("body");
(0, _manipulation.addClass)($element, "test");
(0, _manipulation.hasClass)($element, "test");
(0, _manipulation.removeClass)($element, "test"); // makeRequest({ url: '/' }, () => {});

(0, _price.priceUnformat)("R$ 123,00");
