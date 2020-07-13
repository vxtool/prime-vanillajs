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