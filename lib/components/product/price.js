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