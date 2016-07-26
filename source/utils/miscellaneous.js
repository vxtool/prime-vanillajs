/**
 * Abbreviate Large Numbers
 * @param {number} num
 * @property {boolean} isNegative
 * @property {string} formattedNumber
 * @property {number} thousand
 * @property {number} million
 * @property {number} billion
 * @returns {string} formattedNumber
 */
export function abbreviateLargeNumbers(num) {
  if(typeof num !== 'number' || typeof num === 'undefined' ) { return false; }

  let isNegative  = false;
  let formattedNumber;

  const thousand  = 1000;
  const million   = 1000000;
  const billion   = 1000000000;

  const formatterOfNumber = function(num, minNumber, letter){
    return (num / minNumber).toFixed(1).replace(/\.0$/, '') + letter;
  }

  if (num < 0) {
    isNegative = true;
  }

  num = Math.abs(num);

  if (num >= billion) {
    formattedNumber = formatterOfNumber(num, billion, 'G');
  } else if (num >= million) {
    formattedNumber = formatterOfNumber(num, million, 'M');
  } else  if (num >= thousand) {
    formattedNumber = formatterOfNumber(num, thousand, 'K');
  } else {
    formattedNumber = num;
  }

  if(isNegative) {
    formattedNumber = '-' + formattedNumber;
  }

  return formattedNumber;
}
