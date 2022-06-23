const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseBtn = bigPicture.querySelector('.big-picture__cancel');

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

const showsPopup = (url, comments, likes) => {
  bigPicture.querySelector('.big-picture__img img')['src'] = url;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.likes-count').textContent = likes;

  const socialComments = bigPicture.querySelector('.social__comments');
  socialComments.innerHTML = '';

  comments.forEach((comment) => {
    socialComments.innerHTML += commentsList(...comment);
  });

  document.querySelector('.social__comment-count').classList.add('hidden'); // TODO: Удалить позже.
  document.querySelector('.comments-loader').classList.add('hidden'); // TODO: Удалить позже.

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const onPopupCloseBtnClick = () => {
    bigPicture.classList.add('hidden');
    removesPopupCloseBtnListner();
  };

  function removesPopupCloseBtnListner() {
    bigPictureCloseBtn.removeEventListener('click', onPopupCloseBtnClick);
    document.body.classList.remove('modal-open');
  }

  const onBigPictureKeydown = (evt) => {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');
    }
  };

  document.addEventListener('keydown', onBigPictureKeydown);
  bigPictureCloseBtn.addEventListener('click', onPopupCloseBtnClick);
};

export { showsPopup };
