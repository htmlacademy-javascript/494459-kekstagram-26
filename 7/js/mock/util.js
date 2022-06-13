const Numbers = {
  ZERO: 0,
  MIN_RANDOM_NUMBER: 1,
  MAX_NUMBER_FOR_AVATAR: 6,
  MIN_NUMBER_FOR_LIKES: 15,
  MAX_RANDOM_NUMBER: 25,
  MAX_STR_LENGTH: 140,
  MAX_NUMBER_FOR_LIKES: 200,
};

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

export { getRandomNumber, checkMaxLength, Numbers };
