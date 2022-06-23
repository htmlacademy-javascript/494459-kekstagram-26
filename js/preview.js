import { mockDataGenerate } from './mock/data.js';
import { showsPopup } from './popup.js';

const SIMILAR_PHOTO_DATA_COUNT = 25;

const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

/**
 *
 * @param {number} count - принимает необходимое количество объектов для отрисовки.
 * @return .....
 */

const showUsersPreview = (count) => {
  const similarPreviewPhotoList = mockDataGenerate(count);

  const previewPhotoListFragmet = document.createDocumentFragment();

  const onCurrentPreviewClick = (url, comments, likes) => () => {
    showsPopup(url, comments, likes);
  };

  similarPreviewPhotoList.forEach(({ url, likes, comments }) => {
    const preview = pictureTemplate.cloneNode(true);

    const currentPreview = preview.querySelector('.picture__img');
    const currentComments = preview.querySelector('.picture__comments');
    const currentLikes = preview.querySelector('.picture__likes');

    currentPreview.src = url;
    currentComments.textContent = comments.length;
    currentLikes.textContent = likes;

    previewPhotoListFragmet.append(preview);

    currentPreview.addEventListener('click', onCurrentPreviewClick(url, comments, likes));
  });
  pictures.append(previewPhotoListFragmet);
  return similarPreviewPhotoList;
};

const getUserPreviewList = showUsersPreview(SIMILAR_PHOTO_DATA_COUNT);

export { getUserPreviewList };
