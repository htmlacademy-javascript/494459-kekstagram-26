import { mockDataGenerate } from '/js/mock/data.js';

const pictureTemplate = document.querySelector('#picture').content;
const SIMILAR_PHOTO_DATA_COUNT = 25;

const showUsersPreview = () => {
  const similarPreviewPhotoList = mockDataGenerate(SIMILAR_PHOTO_DATA_COUNT);

  const previewPhotoListFragmet = document.createDocumentFragment();

  similarPreviewPhotoList.forEach(({ url, likes, comments }) => {
    const photoPreview = pictureTemplate.cloneNode(true);

    photoPreview.querySelector('.picture__img')['src'] = url;
    photoPreview.querySelector('.picture__comments').textContent = comments.length;
    photoPreview.querySelector('.picture__likes').textContent = likes;
    previewPhotoListFragmet.append(photoPreview);
  });

  const pictures = document.querySelector('.pictures');

  pictures.append(previewPhotoListFragmet);
};

export { showUsersPreview };
