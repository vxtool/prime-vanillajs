/**
 * Get object type
 *
 * @param {object} prop
 * @returns {string}
 *
 */
export const getObjectType = (prop) => {
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
export const objectType = (prop) => {
  let type;

  switch(prop){
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
export const isUndefinedOrNull = (prop) => {
  if (typeof(prop) === "undefined" || prop === null) {
    return true;
  } else {
    return false;
  }
}
