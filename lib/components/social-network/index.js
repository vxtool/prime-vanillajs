"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = abbreviateLargeNumbers;

var _validations = require("../../utils/validations");

/**
 * Abbreviate Large Numbers
 * @param {number} num
 * @property {boolean} isNegative
 * @property {string} formattedNumber
 * @property {number} thousand
 * @property {number} million
 * @property {number} billion
 * @returns {string} formattedNumber
 */
function abbreviateLargeNumbers(numValue) {
  if ((0, _validations.getObjectType)(numValue) !== (0, _validations.objectType)('number') || (0, _validations.isUndefinedOrNull)(numValue)) {
    return false;
  }

  var isNegative = false;
  var formattedNumber;
  var num = numValue;
  var thousand = 1000;
  var million = 1000000;
  var billion = 1000000000;

  var formatterOfNumber = (numberValue, minNumber, letter) => (numberValue / minNumber).toFixed(1).replace(/\.0$/, '') + letter;

  if (num < 0) {
    isNegative = true;
  }

  num = Math.abs(num);

  if (num >= billion) {
    formattedNumber = formatterOfNumber(num, billion, 'G');
  } else if (num >= million) {
    formattedNumber = formatterOfNumber(num, million, 'M');
  } else if (num >= thousand) {
    formattedNumber = formatterOfNumber(num, thousand, 'K');
  } else {
    formattedNumber = num;
  }

  if (isNegative) {
    formattedNumber = "-".concat(formattedNumber);
  }

  return formattedNumber;
}