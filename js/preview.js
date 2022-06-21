import { mockDataGenerate } from './mock/data.js';

const SIMILAR_PHOTO_DATA_COUNT = 25;

const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

const showUsersPreview = (count) => {
  const similarPreviewPhotoList = mockDataGenerate(count);

  const previewPhotoListFragmet = document.createDocumentFragment();

  similarPreviewPhotoList.forEach(({ url, likes, comments }) => {
    const photoPreview = pictureTemplate.cloneNode(true);

    photoPreview.querySelector('.picture__img')['src'] = url;
    photoPreview.querySelector('.picture__comments').textContent = comments.length;
    photoPreview.querySelector('.picture__likes').textContent = likes;
    previewPhotoListFragmet.append(photoPreview);
  });
  pictures.append(previewPhotoListFragmet);
  return similarPreviewPhotoList;
};

const getUserPreviewList = showUsersPreview(SIMILAR_PHOTO_DATA_COUNT);


const bigPicture = document.querySelector('.big-picture');
const picture = pictures.querySelectorAll('.picture');
const bigPictureCloseBtn = bigPicture.querySelector('.big-picture__cancel');

const onPictureClick = () => {
  bigPicture.classList.remove('hidden');
};

const onBigPictureCloseBtnClick = () => {
  bigPicture.classList.add('hidden');
  // bigPictureCloseBtn.removeEventListener('click', onBigPictureCloseBtnClick);
};

bigPictureCloseBtn.addEventListener('click', onBigPictureCloseBtnClick);

picture.forEach((pic) => {
  pic.addEventListener('click', onPictureClick);
});

export { getUserPreviewList };
