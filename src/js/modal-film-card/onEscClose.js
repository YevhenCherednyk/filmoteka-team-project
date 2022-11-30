document.body.classList.toggle('modal-is-open');
refs.backdrop.classList.toggle('is-hidden');
const refs = {
  filmList: document.querySelector('.films-list'),
  backdrop: document.querySelector('[data-modal]'),
  modal: document.querySelector('.modal_movie'),
  modalCloseBtn: document.querySelector('button.btn-close'),
};
