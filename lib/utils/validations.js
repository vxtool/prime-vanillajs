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