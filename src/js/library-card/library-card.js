import createMovieLibraryMarkup from './createMovieLibraryMarkup';
import paginationManager from '../pagination/paginationManager';

const refs = {
  libraryUl: document.querySelector('#library'),
  BtnWatched: document.querySelector('#watched'),
  BtnQueue: document.querySelector('#queue'),
};

const paginationRef = document.querySelector('.pagination');
const moviesOnPage = 20;
let movies;

window.onload = () => {
  movies = JSON.parse(localStorage.getItem('watched'));
  refs.libraryUl.innerHTML = createMovieLibraryMarkup(movies);
  const numberOfPages = Math.ceil(movies.length / moviesOnPage);
  paginationManager(1, numberOfPages);
};

refs.BtnWatched.addEventListener('click', () => {
  movies = JSON.parse(localStorage.getItem('watched'));
  refs.libraryUl.innerHTML = createMovieLibraryMarkup(movies);
  const numberOfPages = Math.ceil(movies.length / moviesOnPage);
  paginationManager(1, numberOfPages);
});

refs.BtnQueue.addEventListener('click', () => {
  movies = JSON.parse(localStorage.getItem('queue'));
  refs.libraryUl.innerHTML = createMovieLibraryMarkup(movies);
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
  getDataAndPutToRender(PathHendler.path, page);
});
