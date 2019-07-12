import { getObjectType, objectType, isUndefinedOrNull } from '../../utils/validations';

/**
 * Price format
 *
 * @param {number} price
 * @param {string} prefix
 * @param {number} toFixed
 * @param {string} thousandsSeparator
 * @param {string} centsSeparator
 * @returns {string} newPrice
 *
 */
export function priceFormat(price, prefix, toFixed, thousandsSeparator, centsSeparator) {
  if (isUndefinedOrNull(price)) {
    return false;
  }

  let newPrice = price;
  let newThousandsSeparator = thousandsSeparator;
  let newToFixed = toFixed;

  if (getObjectType(newPrice) === objectType('number')) {
    if (isUndefinedOrNull(newToFixed)) {
      newToFixed = 2;
    }

    newPrice = newPrice.toFixed(newToFixed);

    if (centsSeparator === ',') {
      newPrice = newPrice.replace('.', ',');
    }

    if (newThousandsSeparator !== ',') {
      newThousandsSeparator = '.';
    }

    newPrice = newPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${newThousandsSeparator}`);

    if (prefix) {
      newPrice = `${prefix} ${newPrice}`;
    }

    return newPrice;
  }

  return false;
}

/**
 * Price format to real
 *
 * @param {number} price
 * @returns {string} price
 *
 */
export function priceFormatToReal(price) {
  if (isUndefinedOrNull(price)) {
    return false;
  }
  return priceFormat(price, 'R$', 2, '.', ',');
}

/**
 * Price unformat
 *
 * @param {number} price
 * @returns {number} newPrice
 *
 */
export function priceUnformat(price) {
  if (isUndefinedOrNull(price)) {
    return false;
  }

  let newPrice = price;

  if (getObjectType(newPrice) === objectType('string')) {
    newPrice = newPrice.replace(/[^0-9]/g, '');
    newPrice = newPrice.replace(/(\d*)(?=(\d{2}))/, '$1.');

    if (newPrice.includes('.00')) {
      newPrice = parseFloat(newPrice).toFixed(2);
      return newPrice;
    }

    return parseFloat(newPrice);
  } if (getObjectType(newPrice) === objectType('number')) {
    return newPrice;
  }

  return false;
}

/**
 * Product price
 *
 * @param {object} product
 * @param {number} price
 * @param {string} text
 * @returns {object} newProduct
 *
 */
export function productPrice(product, price, text = 'por:') {
  if (isUndefinedOrNull(product) || isUndefinedOrNull(price)) {
    return false;
  }

  const newProduct = product;

  if (getObjectType(newProduct) === objectType('object')) {
    newProduct.sales_price = priceFormatToReal(price);
    newProduct.textPrice = text;

    return newProduct;
  }

  return false;
}
