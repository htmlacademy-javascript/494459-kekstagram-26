import { renderPopup } from './popup.js';

const thumbnailTemplate = document.querySelector('#picture').content;
const thumbnails = document.querySelector('.pictures');

/**
 *
 * @param {number} count - принимает необходимое количество объектов для отрисовки.
 */

const renderThumbnails = (count) => {
  const thumbnailsListFragmet = document.createDocumentFragment();

  const onCurrentThumbnailClick = (url, comments, likes, description) => () => renderPopup(url, comments, likes, description);

  count.forEach(({ url, likes, comments, description }) => {
    const thumbnail = thumbnailTemplate.cloneNode(true);

    const currentThumbnail = thumbnail.querySelector('.picture__img');
    const currentComments = thumbnail.querySelector('.picture__comments');
    const currentLikes = thumbnail.querySelector('.picture__likes');

    currentThumbnail.src = url;
    currentComments.textContent = comments.length;
    currentLikes.textContent = likes;

    thumbnailsListFragmet.append(thumbnail);

    currentThumbnail.addEventListener('click', onCurrentThumbnailClick(url, comments, likes, description));
  });
  thumbnails.append(thumbnailsListFragmet);
};

export { renderThumbnails };
