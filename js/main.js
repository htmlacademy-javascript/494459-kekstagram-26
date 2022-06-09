const ZERO_NUMBER = 0;
const MIN_NUMBER = 1;
const MAX_NUMBER = 25;

/**
* Функция getRandomNumber - генерирует случайное положительное число.
*
* @param {number} min - положительное число.
* @param {number} max - положительное число.
*/


const getRandomNumber = (min, max) => {
  if (min < ZERO_NUMBER || max < ZERO_NUMBER) {
    return ZERO_NUMBER;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  const result = (Math.random() * (max + MIN_NUMBER - min) + min);
  return Math.floor(result);
};

/**
* Функция checkMaxLength - проверяет длинну строки.
*
* @param {string} str - принимает строку для проверки.
* @param {number} strLength - принимает число.
*/

const checkMaxLength = (str, strLength = 140) => str.length <= strLength;


const PHOTO_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const AUTHOR_NAME = ['Артём', 'Анна', 'Саша', 'Маша', 'Паша', 'Рома', 'Яна'];

/**
* Функция getData - генерирует набор случайных данных.
*
* @return {string} - возвращает набор сгенерированных данных.
*/

const getData = () => ({
  id: getRandomNumber(MIN_NUMBER, MAX_NUMBER),
  url: `photos/${getRandomNumber(MIN_NUMBER, MAX_NUMBER)}.jpg`,
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  likes: getRandomNumber(15, 200),
  comments: [
    {
      id: getRandomNumber(MIN_NUMBER, MAX_NUMBER),
      avatar: `img/avatar-${getRandomNumber(MIN_NUMBER, 6)}`.svg,
      message: PHOTO_MESSAGE[getRandomNumber(ZERO_NUMBER, PHOTO_MESSAGE.length - MIN_NUMBER)],
      name: AUTHOR_NAME[getRandomNumber(ZERO_NUMBER, AUTHOR_NAME.length - MIN_NUMBER)],
    }
  ],
});

