/**
 * Find the class in the element
 *
 * @param {DOM} element -
 * @param {string} className -
 * @returns {boolean}
 *
 */
export default function hasClass(element, className) {
  if (element.classList) {
    return element.classList.contains(className);
  }
  else {
    return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
}

/**
 * Add the class of element
 *
 * @param {DOM} element -
 * @param {string} className -
 *
 */
export default function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  }
  else if (!hasClass(element, className)) {
    element.className += " " + className;
  }
}

/**
 * Remove the class of element
 *
 * @param {DOM} element -
 * @param {string} className -
 *
 */
export default function removeClass(element, className) {
  if (element.classList){
    element.classList.remove(className);
  }
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    element.className = element.className.replace(reg, ' ');
  }
}
