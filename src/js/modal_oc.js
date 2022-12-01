const refs = {
  body: document.querySelector("body"),
  // ===== for movie modal =====
  backdropMovie: document.querySelector("[data-modal='movie']"),
  modalCloseBtnMovie: document.querySelector("[data-modalCloseBtn='movie']"),

  // ===== for team modal =====
  backdropTeam: document.querySelector("[data-modal='team']"),
  modalOpenBtnTeam: document.querySelector("[data-modalOpenBtn='team']"), 
  modalCloseBtnTeam: document.querySelector("[data-modalCloseBtn='team']"),

  movieTrailerbox: document.querySelector('.modal-box__movieTrailer'),
};

window.addEventListener('keydown', onEscKeyPress);
// ===== for movie modal =====
refs.backdropMovie.addEventListener('click', onBackdropClick);
refs.modalCloseBtnMovie.addEventListener('click', closeModalMovie);
// ===== for team modal =====
refs.backdropTeam.addEventListener('click', onBackdropClick);
refs.modalOpenBtnTeam.addEventListener("click", toggleModalTeam);
refs.modalCloseBtnTeam.addEventListener("click", toggleModalTeam);
// ===========================

export function toggleModalMovie() {
  refs.body.classList.toggle("modal-is-open");
  refs.backdropMovie.classList.toggle('is-hidden');
}

function closeModalMovie() {
  if (document.body.classList.contains("showMovieTrailer")) {
    document.body.classList.remove("showMovieTrailer");
  } else {
    refs.body.classList.remove("modal-is-open");
    refs.backdropMovie.classList.add('is-hidden');
  }
}

function toggleModalTeam() {
  refs.body.classList.toggle("modal-is-open");
  refs.backdropTeam.classList.toggle('is-hidden');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    if (document.body.classList.contains("showMovieTrailer")) {
      document.body.classList.remove("showMovieTrailer");
    } else {
      closeModal();
    }
  }
}

function onEscKeyPress(e) {
  if (!document.body.classList.contains("modal-is-open")) {
    return;
  }

  if (e.code === 'Escape') {
    if (document.body.classList.contains("showMovieTrailer")) {
      document.body.classList.remove("showMovieTrailer");
    } else {
      closeModal();
    }
  }
}

function closeModal() {
  refs.body.classList.remove("modal-is-open");
  refs.backdropTeam.classList.add('is-hidden');
  refs.backdropMovie.classList.add('is-hidden');
}