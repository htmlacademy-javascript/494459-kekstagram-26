import { renderPopup } from './popup.js';

const thumbnailTemplate = document.querySelector('#picture').content;
const thumbnails = document.querySelector('.pictures');

/**
 *
 * @param {number} count - принимает необходимое количество объектов для отрисовки.
 */

const renderThumbnails = (count) => {
  const thumbnailsListFragmet = document.createDocumentFragment();

  const onCurrentThumbnailClick = (url, comments, likes) => () => renderPopup(url, comments, likes);

  count.forEach(({ url, likes, comments }) => {
    const thumbnail = thumbnailTemplate.cloneNode(true);

    const currentThumbnail = thumbnail.querySelector('.picture__img');
    const currentComments = thumbnail.querySelector('.picture__comments');
    const currentLikes = thumbnail.querySelector('.picture__likes');

    currentThumbnail.src = url;
    currentComments.textContent = comments.length;
    currentLikes.textContent = likes;

    thumbnailsListFragmet.append(thumbnail);

    currentThumbnail.addEventListener('click', onCurrentThumbnailClick(url, comments, likes));
  });
  thumbnails.append(thumbnailsListFragmet);
};

export { renderThumbnails };
