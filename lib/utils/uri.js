"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Get Query Variable
 *
 * @param {string} variable
 * @returns {string}
 *
 */
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0, len = vars.length; i < len; i + 1) {
    var pair = vars[i].split('=');

    if (pair[0] === variable) {
      return pair[1];
    }
  }

  return false;
}

var _default = {
  getQueryVariable
};
exports.default = _default;