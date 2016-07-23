/**
 * Request to the json type using XMLHttpRequest
 *
 * @param {string} url Address for the request
 * @param {function} successHandler For success in the request
 * @param {function} errorHandler For failed requests
 * @returns {function} callback
 *
 */
export function makeRequest(url, successHandler, errorHandler) {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.open('GET', url, true);
  xmlhttp.responseType = 'json';

  xmlhttp.onreadystatechange = () => {
    if (xmlhttp.readyState === xmlhttp.DONE) {
      if (xmlhttp.status === 200) {
        successHandler && successHandler(xmlhttp.response);
      }

      else {
        errorHandler && errorHandler(xmlhttp.status);
      }
    }
  };

  xmlhttp.send();
}
