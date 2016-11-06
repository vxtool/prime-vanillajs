/**
 * Get object type
 *
 * @param {object} prop
 * @returns {string}
 *
 */
export function getObjectType(prop) {
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
export function objectType(prop) {
  let type;

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
export function isUndefinedOrNull(prop) {
  if (typeof prop === 'undefined' || prop === null) {
    return true;
  }

  return false;
}
