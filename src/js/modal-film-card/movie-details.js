import API from '../api-service/fetch-movie-details';
import APIvideo from '../api-service/fetch-movie-video';

import { addToLocalStorage } from './add-to-localStorage';
import spinnerControls from '../spinner/spinner';
import { toggleModalMovie } from '../modal-oc';

const refs = {
  body: document.querySelector('body'),
  filmList: document.querySelector('.films-list'),
  modal: document.querySelector('.modal_movie'),
  posterbox: document.querySelector('.modal_posterbox'),
  movieTrailerbox: document.querySelector('.modal-box__movieTrailer'),
};
let alt = null;

refs.filmList.addEventListener('click', onListClick);

function onListClick(e) {
  if (e.target.parentElement.nodeName !== 'LI') {
    return;
  }

  if (e.target.parentElement.nodeName !== 'IMG') {
    alt = e.target.getAttribute('alt');
  }

  const currentMovieId = e.target.parentElement.dataset.id;

  spinnerControls.showSpinner();

  API.fetchMovieDetails(currentMovieId)
    .then(res => {
      renderMovieDetailsMarkup(createMovieDetailsMarkup(res), res);
      toggleModalMovie();
      spinnerControls.hideSpinner();
      checkAlt(res);
    })
    .catch(onFetchError);
}

function createMovieDetailsMarkup(res) {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
    name,
    id,
  } = res;
  const genresList = [];
  let poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  let filmTitle = title;

  if (title === null) {
    filmTitle = name;
  }

  if (poster_path === null) {
    poster =
      'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';
  }

  for (const genre of genres) {
    genresList.push(genre.name);
  }

  return `
    <div class="modal_posterbox">
      <img
        class="modal_poster"
        src="${poster}"
        alt="${filmTitle}"
        width="375"
        height="478"
      />
      <button class="movieTrailerPlayBtn hide" type="button" data-id="${id}" data-modalOpenBtn="movieTrailer">
        <svg class="movieTrailerPlayIcon" width="60" height="60">
          <use href="./icons.svg#youtube"></use>
        </svg>
      </button>
    </div>
    <div class="modal-info">
      <h2 class="modal-info_title">${filmTitle}</h2>
      <table class="modal-info_table">
        <tr>
          <th>Vote / Votes</th>
          <td><span class="modal-table_vote">${vote_average.toFixed(
            1
          )}</span> / <span class="modal-table_votes">${vote_count}</span></td>
        </tr>
        <tr>
          <th>Popularity</th>
          <td>${popularity.toFixed(1)}</td>
        </tr>
        <tr>
          <th>Original Title</th>
          <td class="uppercase">${original_title}</td>
        </tr>
        <tr>
          <th>Genre</th>
          <td>${genresList.join(', ')}</td>
        </tr>
      </table>
      <div>
        <h3 class="modal-info_about">About</h3>
        <p class="modal-info_description">${overview}</p>
      </div>
      <div class="modal_btnbox">
        <button id="watched" class="modal_btn" type="button">
          add to Watched
        </button>
        <button id="queue" class="modal_btn" type="button">
          add to Queue
        </button>
      </div>
    </div>
    <div class="modal-box__movieTrailer hide"></div>
  `;
}

function renderMovieDetailsMarkup(data, fromBackend) {
  refs.modal.innerHTML = data;
  const btnAddToWatchedRef = document.querySelector('#watched');
  const btnAddToQueueRef = document.querySelector('#queue');

  btnAddToWatchedRef.addEventListener('click', event =>
    addToLocalStorage(event, fromBackend)
  );
  btnAddToQueueRef.addEventListener('click', event =>
    addToLocalStorage(event, fromBackend)
  );

  if (!localStorage.getItem('status')) {
    return;
  }

  let filmId = fromBackend.id;
  if (localStorage.getItem('queue')) {
    let storageIdCheckQueue = JSON.parse(localStorage.getItem('queue'));
    if (storageIdCheckQueue.find(item => item.id === filmId)) {
      btnAddToQueueRef.textContent = 'remove from queued';
      btnAddToQueueRef.classList.add('modal_btn--selected');
    }
  }
  if (localStorage.getItem('watched')) {
    let storageIdCheckWatched = JSON.parse(localStorage.getItem('watched'));
    if (storageIdCheckWatched.find(item => item.id === filmId)) {
      btnAddToWatchedRef.textContent = 'remove from watched';
      btnAddToWatchedRef.classList.add('modal_btn--selected');
    }
  }

  addMovieTrailer(fromBackend.id);
}

function onFetchError(res) {
  toggleModalMovie();
  clearModal();
  spinnerControls.hideSpinner();
}

function clearModal() {
  refs.modal.innerHTML = `
    <div class="modal_posterbox">
      <img
        class="modal_poster"
        src="https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg"
        alt="Poster"
        width="375"
        height="478"
      />
    </div>
    <div class="modal-info">
      <h2 class="modal-info_title"> Sorry, this movie have't details yet</h2>
    </div>
    <div class="modal-box__movieTrailer hide"></div>`;
}

function addMovieTrailer(id) {
  const movieTrailerPlayBtn = document.querySelector('.movieTrailerPlayBtn');

  APIvideo.fetchMovieVideo(id).then(resVideo => {
    if (!resVideo.results.length) {
      // console.log('videoKey is underfind');
      return;
    } else {
    const videoKey = resVideo.results[0].key;

    movieTrailerPlayBtn.classList.toggle('hide');
    movieTrailerPlayBtn.addEventListener('click', showMovieTrailer);
    movieTrailerPlayBtn.setAttribute('data-videoKey', videoKey);

    renderMovieTrailerBox(videoKey);
    }
  });
}

export function renderMovieTrailerBox(movieKey) {
  const movieTrailerbox = document.querySelector('.modal-box__movieTrailer');
  const movieTrailerModalMarkup = `<iframe class="movieTrailer" width="560" height="315" src="https://www.youtube.com/embed/${movieKey}?rel=0&showinfo=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  movieTrailerbox.innerHTML = movieTrailerModalMarkup;
}

function showMovieTrailer() {
  refs.body.classList.toggle('showMovieTrailer');
}

function checkAlt(res) {
  if (res.title !== alt) {
    clearModal();
  }
}