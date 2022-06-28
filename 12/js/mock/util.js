import { Numbers } from './data.js';

/**
 * Функция getRandomNumber - генерирует случайное положительное число.
 *
 * @param {number} min - минимальное положительное число.
 * @param {number} max - максимальное положительное число.
 * @return {integer} - случайное целое число.
 */

const getRandomNumber = (min, max) => {
  if (min < Numbers.ZERO || max < Numbers.ZERO) {
    return Numbers.ZERO;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  const result = (Math.random() * (max +  Numbers.MIN_RANDOM_NUMBER - min) + min);
  return Math.floor(result);
};

/**
 * Функция checkMaxLength - проверяет длинну строки.
 *
 * @param {string} str - строка для проверки.
 * @param {number} strLength - число для проверки длинны строки.
 * @return {boolean} - вовзращает true/false.
 */

const checkMaxLength = (str, strLength = Numbers.MAX_STR_LENGTH) => str.length <= strLength;

/**
 *
 * @param {object} evt - событие.
 * @return {boolean} - вовзращает true/false.
 */

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export { getRandomNumber, checkMaxLength, isEscapeKey };
