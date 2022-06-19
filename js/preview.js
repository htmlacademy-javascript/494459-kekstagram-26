import { mockDataGenerate } from './mock/data.js';

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
};

export { showUsersPreview };
