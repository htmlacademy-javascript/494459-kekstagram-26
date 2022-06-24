import { isEscapeKey } from './mock/util.js';

const popup = document.querySelector('.big-picture');
const popupCloseBtn = popup.querySelector('.big-picture__cancel');

/**
 *
 * @param {string} avatar - ссылка на изображение аватара.
 * @param {string} name - имя пользователя оставившего комментарий.
 * @param {string} message - комментарий пользователя под фотографией.
 *
 */

const commentsList = ({ avatar, name, message }) =>
  `<li class="social__comment">
    <img class="social__picture"
      src= ${avatar}
      alt= ${name}
      width="35" height="35">
    <p class="social__text">${message}</p>
  </li>`;

/**
 *
 * @param {string} url - ссылка на изображение по которому кликнули.
 * @param {object} comments - объект массивов с комментариями пользователей.
 * @param {number} likes - количество лайков фотографии.
 *
 */

const renderPopup = (url, comments, likes, description) => {
  popup.querySelector('.big-picture__img img').src = url;
  popup.querySelector('.comments-count').textContent = comments.length;
  popup.querySelector('.likes-count').textContent = likes;
  popup.querySelector('.social__caption').textContent = description;

  const socialComments = popup.querySelector('.social__comments');
  socialComments.innerHTML = '';

  comments.forEach((comment) => {
    socialComments.innerHTML += commentsList(...comment);
  });

  document.querySelector('.social__comment-count').classList.add('hidden'); // TODO: Удалить позже.
  document.querySelector('.comments-loader').classList.add('hidden'); // TODO: Удалить позже.

  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const closePopup = () => {
    popup.classList.add('hidden');
    removeListners();
  };

  const onCloseBtnClick = () => {
    popup.classList.add('hidden');
    removeListners();
  };

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closePopup();
    }
  };

  function removeListners() {
    popupCloseBtn.removeEventListener('click', onCloseBtnClick);
    document.removeEventListener('keydown', onPopupEscKeydown);
    document.body.classList.remove('modal-open');
  }

  document.addEventListener('keydown', onPopupEscKeydown);
  popupCloseBtn.addEventListener('click', onCloseBtnClick);
};

export { renderPopup };
