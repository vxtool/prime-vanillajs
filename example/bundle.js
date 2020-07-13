(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _manipulation = require("../lib/utils/manipulation");

var _price = require("../lib/components/product/price");

// import makeRequest from '../lib/utils/request';
var $element = document.querySelector("body");
(0, _manipulation.addClass)($element, "test");
(0, _manipulation.hasClass)($element, "test");
(0, _manipulation.removeClass)($element, "test"); // makeRequest({ url: '/' }, () => {});

(0, _price.priceUnformat)("R$ 123,00");

},{"../lib/components/product/price":2,"../lib/utils/manipulation":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.priceFormat = priceFormat;
exports.priceFormatToReal = priceFormatToReal;
exports.priceUnformat = priceUnformat;
exports.productPrice = productPrice;

var _validations = require("../../utils/validations");

/**
 * Price format
 *
 * @param {number} price
 * @param {string} prefix
 * @param {number} toFixed
 * @param {string} thousandsSeparator
 * @param {string} centsSeparator
 * @returns {string} newPrice
 *
 */
function priceFormat(price, prefix, toFixed, thousandsSeparator, centsSeparator) {
  if ((0, _validations.isUndefinedOrNull)(price)) {
    return false;
  }

  var newPrice = price;
  var newThousandsSeparator = thousandsSeparator;
  var newToFixed = toFixed;

  if ((0, _validations.getObjectType)(newPrice) === (0, _validations.objectType)('number')) {
    if ((0, _validations.isUndefinedOrNull)(newToFixed)) {
      newToFixed = 2;
    }

    newPrice = newPrice.toFixed(newToFixed);

    if (centsSeparator === ',') {
      newPrice = newPrice.replace('.', ',');
    }

    if (newThousandsSeparator !== ',') {
      newThousandsSeparator = '.';
    }

    newPrice = newPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1".concat(newThousandsSeparator));

    if (prefix) {
      newPrice = "".concat(prefix, " ").concat(newPrice);
    }

    return newPrice;
  }

  return false;
}
/**
 * Price format to real
 *
 * @param {number} price
 * @returns {string} price
 *
 */


function priceFormatToReal(price) {
  if ((0, _validations.isUndefinedOrNull)(price)) {
    return false;
  }

  return priceFormat(price, 'R$', 2, '.', ',');
}
/**
 * Price unformat
 *
 * @param {number} price
 * @returns {number} newPrice
 *
 */


function priceUnformat(price) {
  if ((0, _validations.isUndefinedOrNull)(price)) {
    return false;
  }

  var newPrice = price;

  if ((0, _validations.getObjectType)(newPrice) === (0, _validations.objectType)('string')) {
    newPrice = newPrice.replace(/[^0-9]/g, '');
    newPrice = newPrice.replace(/(\d*)(?=(\d{2}))/, '$1.');

    if (newPrice.includes('.00')) {
      newPrice = parseFloat(newPrice).toFixed(2);
      return newPrice;
    }

    return parseFloat(newPrice);
  }

  if ((0, _validations.getObjectType)(newPrice) === (0, _validations.objectType)('number')) {
    return newPrice;
  }

  return false;
}
/**
 * Product price
 *
 * @param {object} product
 * @param {number} price
 * @param {string} text
 * @returns {object} newProduct
 *
 */


function productPrice(product, price) {
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'por:';

  if ((0, _validations.isUndefinedOrNull)(product) || (0, _validations.isUndefinedOrNull)(price)) {
    return false;
  }

  var newProduct = product;

  if ((0, _validations.getObjectType)(newProduct) === (0, _validations.objectType)('object')) {
    newProduct.sales_price = priceFormatToReal(price);
    newProduct.textPrice = text;
    return newProduct;
  }

  return false;
}
},{"../../utils/validations":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;

/**
 * Find the class in the element
 *
 * @param {DOM} element Id of element
 * @param {string} className Id of class
 * @returns {boolean} result Validation
 *
 */
function hasClass(element, className) {
  var result;

  if (element.classList) {
    result = element.classList.contains(className);
  } else {
    result = !!element.className.match(new RegExp("(\\s|^)".concat(className, "(\\s|$)")));
  }

  return result;
}
/**
 * Add the class of element
 *
 * @param {DOM} element Id of element
 * @param {string} className Id of class
 * @returns {boolean} For to have a return
 *
 */


function addClass(target, className) {
  var element = target;

  try {
    if (element.classList) {
      element.classList.add(className);
    } else if (!hasClass(element, className)) {
      var newValue = "".concat(element.className, " ").concat(className);
      element.className = newValue;
    }

    return true;
  } catch (error) {
    return false;
  }
}
/**
 * Remove the class of element
 *
 * @param {DOM} element Id of element
 * @param {string} className Id of class
 * @returns {boolean} For to have a return
 *
 */


function removeClass(target, className) {
  var element = target;

  try {
    if (element.classList) {
      element.classList.remove(className);
    } else if (hasClass(element, className)) {
      var reg = new RegExp("(\\s|^)".concat(className, "(\\s|$)"));
      var newValue = element.className.replace(reg, ' ');
      element.className = newValue;
    }

    return true;
  } catch (error) {
    return false;
  }
}
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectType = getObjectType;
exports.objectType = objectType;
exports.isUndefinedOrNull = isUndefinedOrNull;

/**
 * Get object type
 *
 * @param {object} prop
 * @returns {string}
 *
 */
function getObjectType(prop) {
  return Object.prototype.toString.call(prop);
}
/**
 * Object type
 *
 * @param {object} prop
 * @property {string} type
 * @returns {string} type
 *
 */


function objectType(prop) {
  var type;

  switch (prop) {
    case 'object':
      type = '[object Object]';
      break;

    case 'array':
      type = '[object Array]';
      break;

    case 'string':
      type = '[object String]';
      break;

    case 'boolean':
      type = '[object Boolean]';
      break;

    case 'number':
      type = '[object Number]';
      break;

    default:
      type = false;
      break;
  }

  return type;
}
/**
 * Is undefined or null
 *
 * @param {object} prop
 * @returns {boolean}
 *
 */


function isUndefinedOrNull(prop) {
  if (typeof prop === 'undefined' || prop === null) {
    return true;
  }

  return false;
}
},{}]},{},[1]);
