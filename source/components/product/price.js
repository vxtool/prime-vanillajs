import {getObjectType, objectType, isUndefinedOrNull} from "../../utils/validations";

/**
 * Price format
 *
 * @param {number} price
 * @param {string} prefix
 * @param {number} toFixed
 * @param {string} thousandsSeparator
 * @param {string} centsSeparator
 * @returns {string} price
 *
 */
export const priceFormat = (price, prefix, toFixed, thousandsSeparator, centsSeparator) => {
  if (isUndefinedOrNull(price)) {
    return false;
  }

  if (getObjectType(price) === objectType('number')) {
    if (isUndefinedOrNull(toFixed)) {
      toFixed = 2;
    }

    price = price.toFixed(toFixed);

    if (centsSeparator === ',') {
       price = price.replace('.', ',');
    }

    if (thousandsSeparator !== ',') {
      thousandsSeparator = '.';
    }

    price = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1"+thousandsSeparator);

    if (prefix) {
      price = prefix + " " + price;
    }

    return price;
  } else {
    return false;
  }
};

/**
 * Price format to real
 *
 * @param {number} price
 * @returns {string} price
 *
 */
export const priceFormatToReal = (price) => {
  if(isUndefinedOrNull(price)){
    return false;
  }
  return priceFormat(price, 'R$', 2, '.', ',');
};

/**
 * Price unformat
 *
 * @param {number} price
 * @returns {number} price
 *
 */
export const priceUnformat = (price) => {
  if(isUndefinedOrNull(price)){
    return false;
  }

  if(getObjectType(price) === objectType('string')){
      price = price.replace(/[^0-9]/g, '');
      price = price.replace(/(\d*)(?=(\d{2}))/, "$1.");

      if (price.match('.00')) {
        return parseFloat(price).toFixed(2);
      } else {
        return parseFloat(price);
      }
  } else if(getObjectType(price) === objectType('number')){
    return price;
  } else {
    return false;
  }
};

/**
 * Product price
 *
 * @param {object} product
 * @param {number} price
 * @param {string} text
 * @returns {object} product
 *
 */
export const productPrice = (product, price, text) => {
  if (isUndefinedOrNull(product) || isUndefinedOrNull(price)) {
    return false;
  }

  if(getObjectType(product) === objectType('object')){
    product.sales_price = priceFormatToReal(price);
    product.textPrice   = text || 'por:';

    return product;
  } else {
    return false;
  }
}
