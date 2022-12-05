import createMovieLibraryMarkup from './create-movie-library-markup';
import paginationManager from '../pagination/pagination-manager';

const refs = {
  libraryUl: document.querySelector('#library'),
  BtnWatched: document.querySelector('#watchedFilterBtn'),
  BtnQueue: document.querySelector('#queueFilterBtn'),
};

const paginationRef = document.querySelector('.pagination');
const moviesOnPage = 20;
let movies;

export function onWindowLoad() {
  paginationRef.classList.add('hide-pagination');
  refs.BtnWatched.classList.add('library-filter-btn--active');
  refs.BtnQueue.classList.remove('library-filter-btn--active');
  movies = JSON.parse(localStorage.getItem('watched'));
  if (!movies) {
    refs.libraryUl.innerHTML = '';
    return;
  }
  const arrMovies = movies.slice(0, moviesOnPage);
  refs.libraryUl.innerHTML = createMovieLibraryMarkup(arrMovies);
  const numberOfPages = Math.ceil(movies.length / moviesOnPage);
  paginationManager(1, numberOfPages);
}

refs.BtnWatched.addEventListener('click', () => {
  paginationRef.classList.add('hide-pagination');
  refs.BtnWatched.classList.add('library-filter-btn--active');
  refs.BtnQueue.classList.remove('library-filter-btn--active');
  movies = JSON.parse(localStorage.getItem('watched'));
  if (!movies) {
    refs.libraryUl.innerHTML = '';
    return;
  }
  const arrMovies = movies.slice(0, moviesOnPage);
  refs.libraryUl.innerHTML = createMovieLibraryMarkup(arrMovies);
  const numberOfPages = Math.ceil(movies.length / moviesOnPage);
  paginationManager(1, numberOfPages);
});

refs.BtnQueue.addEventListener('click', () => {
  paginationRef.classList.add('hide-pagination');
  refs.BtnWatched.classList.remove('library-filter-btn--active');
  refs.BtnQueue.classList.add('library-filter-btn--active');
  movies = JSON.parse(localStorage.getItem('queue'));
  if (!movies) {
    refs.libraryUl.innerHTML = '';
    return;
  }
  const arrMovies = movies.slice(0, moviesOnPage);
  refs.libraryUl.innerHTML = createMovieLibraryMarkup(arrMovies);
  const numberOfPages = Math.ceil(movies.length / moviesOnPage);
  paginationManager(1, numberOfPages);
});

paginationRef.addEventListener('click', e => {
  if (e.target.innerText === '' || e.target.type !== 'button') {
    return;
  }
  const currentButton = document.querySelector('.current-btn');
  let page = currentButton.innerText;
  if (e.target.innerText === '+1') {
    page = parseInt(page) + 1;
  } else if (e.target.innerText === '-1') {
    page = parseInt(page) - 1;
  } else {
    page = e.target.innerText;
  }

  const currentPageMovies = [];
  const startIterator = page * moviesOnPage - moviesOnPage;
  const endIterator = startIterator + moviesOnPage;
  for (let i = startIterator; i < endIterator; i += 1) {
    if (!movies[i]) {
      break;
    }
    currentPageMovies.push(movies[i]);
  }
  refs.libraryUl.innerHTML = createMovieLibraryMarkup(currentPageMovies);
  const numberOfPages = Math.ceil(movies.length / moviesOnPage);
  paginationManager(parseInt(page), numberOfPages);
  window.scrollTo({
    top: 270,
    behavior: 'smooth',
  });
});
