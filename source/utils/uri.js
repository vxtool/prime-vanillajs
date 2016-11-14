/**
 * Get Query Variable
 *
 * @param {string} variable
 * @returns {string}
 *
 */
export function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");

  for (let i = 0, len = vars.length; i < len; i++) {
    let pair = vars[i].split("=");
    if(pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}
