const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return 0;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  const result = (Math.random() * (max + 1 - min) + min);
  return Math.floor(result);
};

const checkMaxLength = (str, strLength = 140) => str.length <= strLength;

const PHOTO_MESSAGE = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const AUTHOR_NAME = ['Артём', 'Анна', 'Саша', 'Маша', 'Паша', 'Рома', 'Яна'];

const getData = {
  id: getRandomNumber(1, 25),
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  likes: getRandomNumber(15, 200),
  comments: [
    {
      id: getRandomNumber(1, 500),
      avatar: `img/avatar-${getRandomNumber(1, 6)}`.svg,
      message: PHOTO_MESSAGE[getRandomNumber(0, PHOTO_MESSAGE.length)],
      name: AUTHOR_NAME[getRandomNumber(0, AUTHOR_NAME.length)],
    }
  ],
};
