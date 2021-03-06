import { getRandomNumber } from '../mock/util.js';

const Numbers = {
  ZERO: 0,
  MIN_RANDOM_NUMBER: 1,
  MAX_NUMBER_FOR_AVATAR: 6,
  MIN_NUMBER_FOR_LIKES: 15,
  MAX_RANDOM_NUMBER: 25,
  MAX_STR_LENGTH: 140,
  MAX_NUMBER_FOR_LIKES: 200,
};

const PHOTO_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const AUTHOR_NAME = ['Артём', 'Анна', 'Саша', 'Маша', 'Паша', 'Рома', 'Яна'];

const photoComments = () => [
  {
    id: getRandomNumber(Numbers.MIN_RANDOM_NUMBER, Numbers.MAX_RANDOM_NUMBER),
    avatar: `img/avatar-${getRandomNumber(Numbers.MIN_RANDOM_NUMBER, Numbers.MAX_NUMBER_FOR_AVATAR)}.svg`,
    message: PHOTO_MESSAGE[getRandomNumber(Numbers.ZERO, PHOTO_MESSAGE.length - Numbers.MIN_RANDOM_NUMBER)],
    name: AUTHOR_NAME[getRandomNumber(Numbers.ZERO, AUTHOR_NAME.length - Numbers.MIN_RANDOM_NUMBER)],
  }
];

/**
 * Функция getPhotoData - генерирует набор случайных данных.
 *
 * @return {string} - возвращает набор сгенерированных данных.
 */

const getPhotoData = () => ({
  id: getRandomNumber(Numbers.MIN_RANDOM_NUMBER, Numbers.MAX_RANDOM_NUMBER),
  url: `photos/${getRandomNumber(Numbers.MIN_RANDOM_NUMBER, Numbers.MAX_RANDOM_NUMBER)}.jpg`,
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  likes: getRandomNumber(Numbers.MIN_NUMBER_FOR_LIKES, Numbers.MAX_NUMBER_FOR_LIKES),
  comments: Array.from({ length: getRandomNumber(Numbers.MIN_RANDOM_NUMBER, Numbers.MAX_RANDOM_NUMBER) }, photoComments)
});

const mockDataGenerate = (count) => Array.from({ length: count}, getPhotoData);

export { mockDataGenerate, Numbers };
