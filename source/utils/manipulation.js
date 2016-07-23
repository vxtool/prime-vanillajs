/**
 * Find the class in the element
 *
 * @param {DOM} element Id of element
 * @param {string} className Id of class
 * @returns {boolean} result Validation
 *
 */
export function hasClass(element, className) {
  let result;
  if (element.classList) {
    result = element.classList.contains(className);
  }

  else {
    result = !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
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
export function addClass(element, className) {
  try {
    if (element.classList) {
      element.classList.add(className);
    }
    else if (!hasClass(element, className)) {
      element.className = element.className + ' ' + className;
    }
    return true;
  }

  catch(error) {
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
export function removeClass(element, className) {
  try {
    if (element.classList) {
      element.classList.remove(className);
    }
    else if (hasClass(element, className)) {
      const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      element.className = element.className.replace(reg, ' ');
    }
    return true;
  }

  catch(error) {
    return false;
  }
}
