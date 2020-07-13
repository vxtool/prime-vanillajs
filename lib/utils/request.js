"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeRequest;

/**
 * Request to the json type using XMLHttpRequest
 *
 * @param {string} url Address for the request
 * @param {function} successHandler For success in the request
 * @param {function} errorHandler For failed requests
 * @returns {function} callback
 *
 */
function makeRequest(url, successHandler, errorHandler) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, true);
  xmlhttp.responseType = 'json';

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === xmlhttp.DONE) {
      if (xmlhttp.status === 200) {
        if (successHandler) {
          successHandler(xmlhttp.response);
        }
      } else if (errorHandler) {
        errorHandler(xmlhttp.status);
      }
    }
  };

  xmlhttp.send();
}