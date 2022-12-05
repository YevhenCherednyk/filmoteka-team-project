import { renderMovieTrailerBox } from './modal-film-card/movie-details';
// ===== for new rendering =====
import createMovieLibraryMarkup from './library-card/create-movie-library-markup';
import paginationManager from './pagination/pagination-manager';

const refs = {
  body: document.querySelector('body'),
  // ===== for movie modal =====
  backdropMovie: document.querySelector("[data-modal='movie']"),
  modalCloseBtnMovie: document.querySelector("[data-modalCloseBtn='movie']"),

  // ===== for team modal =====
  backdropTeam: document.querySelector("[data-modal='team']"),
  modalOpenBtnTeam: document.querySelector("[data-modalOpenBtn='team']"),
  modalCloseBtnTeam: document.querySelector("[data-modalCloseBtn='team']"),
  // ===== for new rendering =====
};

window.addEventListener('keydown', onEscKeyPress);
// ===== for movie modal =====
refs.backdropMovie.addEventListener('click', onBackdropClick);
refs.modalCloseBtnMovie.addEventListener('click', closeModalMovie);
// ===== for team modal =====
refs.backdropTeam.addEventListener('click', onBackdropClick);
refs.modalOpenBtnTeam.addEventListener('click', toggleModalTeam);
refs.modalCloseBtnTeam.addEventListener('click', toggleModalTeam);
// ===========================

export function toggleModalMovie() {
  refs.body.classList.toggle('modal-is-open');
  refs.backdropMovie.classList.toggle('is-hidden');
}

function closeModalMovie() {
  if (document.body.classList.contains('showMovieTrailer')) {
    document.body.classList.remove('showMovieTrailer');
    closeMovieTrailer();
  } else {
    if (document.querySelector('.library-filter')) {
      const paginationRef = document.querySelector('.pagination');
      const moviesOnPage = 20;
      let movies;
      paginationRef.classList.add('hide-pagination');
      document
        .querySelector('#watchedFilterBtn')
        .classList.add('library-filter-btn--active');
      const queueStatus = document.querySelector('#queueFilterBtn').classList;
      if (queueStatus.contains('library-filter-btn--active')) {
        document
          .querySelector('#queueFilterBtn')
          .classList.remove('library-filter-btn--active');
      }
      movies = JSON.parse(localStorage.getItem('watched'));
      if (!movies) {
        refs.libraryUl.innerHTML = '';
        return;
      }
      const arrMovies = movies.slice(0, moviesOnPage);
      document.querySelector('#library').innerHTML =
        createMovieLibraryMarkup(arrMovies);
      const numberOfPages = Math.ceil(movies.length / moviesOnPage);
      paginationManager(1, numberOfPages);
    }
    refs.body.classList.remove('modal-is-open');
    refs.backdropMovie.classList.add('is-hidden');
  }
}

function toggleModalTeam() {
  refs.body.classList.toggle('modal-is-open');
  refs.backdropTeam.classList.toggle('is-hidden');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    if (document.body.classList.contains('showMovieTrailer')) {
      document.body.classList.remove('showMovieTrailer');
      closeMovieTrailer();
    } else {
      closeModal();
    }
  }
}

function onEscKeyPress(e) {
  if (!document.body.classList.contains('modal-is-open')) {
    return;
  }

  if (e.code === 'Escape') {
    if (document.body.classList.contains('showMovieTrailer')) {
      document.body.classList.remove('showMovieTrailer');
      closeMovieTrailer();
    } else {
      closeModal();
    }
  }
}

function closeModal() {
  refs.body.classList.remove('modal-is-open');
  refs.backdropTeam.classList.add('is-hidden');
  refs.backdropMovie.classList.add('is-hidden');
  if (document.querySelector('.library-filter')) {
    const paginationRef = document.querySelector('.pagination');
    const moviesOnPage = 20;
    let movies;
    paginationRef.classList.add('hide-pagination');
    document
      .querySelector('#watchedFilterBtn')
      .classList.add('library-filter-btn--active');
    const queueStatus = document.querySelector('#queueFilterBtn').classList;
    if (queueStatus.contains('library-filter-btn--active')) {
      document.querySelector('#queueFilterBtn').classList.remove('library-filter-btn--active');
    }
    movies = JSON.parse(localStorage.getItem('watched'));
    if (!movies) {
      refs.libraryUl.innerHTML = '';
      return;
    }
    const arrMovies = movies.slice(0, moviesOnPage);
    document.querySelector('#library').innerHTML =
      createMovieLibraryMarkup(arrMovies);
    const numberOfPages = Math.ceil(movies.length / moviesOnPage);
    paginationManager(1, numberOfPages);
  }
}

function closeMovieTrailer() {
  const movieTrailerPlayBtn = document.querySelector('.movieTrailerPlayBtn');
  const videokey = movieTrailerPlayBtn.dataset.videokey;

  renderMovieTrailerBox(videokey);
}
