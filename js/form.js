import { isEscapeKey } from './mock/util.js';

const overlay = document.querySelector('.img-upload__overlay');
const uploadBtn = document.querySelector('#upload-file');
const closeUploadForm = document.querySelector('#upload-cancel');
const uploadForm = document.querySelector('.img-upload__form');
const hashTagInput = document.querySelector('.text__hashtags');
const uploadPhotoComment = document.querySelector('.text__description');

const onUploadFormChange = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addUploadFileListners();
};

const onCloseUploadFormClick = () => {
  overlay.classList.add('hidden');
  removeUploadFileListners();
};

const onCloseUploadFormKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    overlay.classList.add('hidden');
    removeUploadFileListners();
  }
};

function addUploadFileListners() {
  closeUploadForm.addEventListener('click', onCloseUploadFormClick);
  document.addEventListener('keydown', onCloseUploadFormKeydown);
}

function removeUploadFileListners() {
  document.removeEventListener('keydown', onCloseUploadFormKeydown);
  closeUploadForm.removeEventListener('click', onCloseUploadFormClick);
  document.body.classList.remove('modal-open');
  uploadForm.reset();
}

const pristine = new Pristine(uploadForm, {
  classTo: 'input-text__validate',
  errorTextParent: 'input-text__validate'
});

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  return isValid ? 'ok' : 'err'; //FIXME: При отправке пустой формы возвращает --> err
});

const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;

const HASH_TAG_QUANITY = 5;

const hashTagsValidator = () => hashTagInput.value.toLowerCase().split(' ').every((str, index, arr) => arr.indexOf(str) === index);
const hashTagQuanityCheck = () => hashTagInput.value.split(' ').length <= HASH_TAG_QUANITY;
const hashTagInputValidate = () => hashTagInput.value.split(' ').every((str) => re.test(str.toString()));

pristine.addValidator(hashTagInput, hashTagsValidator, 'Хэштеги не должны повтяряться.');
pristine.addValidator(hashTagInput, hashTagQuanityCheck, 'Количество хэштегов не может быть > 5.');
pristine.addValidator(hashTagInput, hashTagInputValidate, 'Хэштег должен начинаться - #. Длинна от 2 до 20 символов.');


uploadPhotoComment.addEventListener('keydown', (evt) => evt.stopPropagation());
hashTagInput.addEventListener('keydown', (evt) => evt.stopPropagation());

uploadBtn.addEventListener('change', onUploadFormChange);
closeUploadForm.addEventListener('click', onCloseUploadFormClick);
document.addEventListener('keydown', onCloseUploadFormKeydown);

export { uploadBtn };
