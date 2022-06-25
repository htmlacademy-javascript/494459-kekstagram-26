import { isEscapeKey } from './mock/util.js';

const popup = document.querySelector('.big-picture');
const popupCloseBtn = popup.querySelector('.big-picture__cancel');
const commentTemplate = document.querySelector('#comment').content;

/**
 *
 * @param {string} url - ссылка на изображение по которому кликнули.
 * @param {object} comments - объект массивов с комментариями пользователей.
 * @param {number} likes - количество лайков фотографии.
 * @param {string} description - описание фотографии.
 *
 */

const renderPopup = (url, comments, likes, description) => {
  popup.querySelector('.big-picture__img img').src = url;
  popup.querySelector('.comments-count').textContent = comments.length;
  popup.querySelector('.likes-count').textContent = likes;
  popup.querySelector('.social__caption').textContent = description;

  const socialComments = popup.querySelector('.social__comments');
  socialComments.innerHTML = '';

  const commentListFragment = document.createDocumentFragment();

  comments.flat().forEach(({ avatar, name, message }) => {
    const commentData = commentTemplate.cloneNode(true);

    commentData.querySelector('img').src = avatar;
    commentData.querySelector('img').alt = name;
    commentData.querySelector('p').textContent = message;

    commentListFragment.append(commentData);
  });

  socialComments.append(commentListFragment);

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
