import API from '../api-service/fetch-movie-details';

import { addToLocalStorage } from './add-to-localStorage';
import spinnerControls from '../spinner/spinner';
import { toggleModalMovie } from '../modal_oc';

const refs = {
  filmList: document.querySelector('.films-list'),
  modal: document.querySelector('.modal_movie'),
};

refs.filmList.addEventListener('click', onListClick);

function onListClick(e) {
  if (e.target.parentElement.nodeName !== 'LI') {
    return;
  }

  const currentMovieId = e.target.parentElement.dataset.id;

  spinnerControls.showSpinner();
  API.fetchMovieDetails(currentMovieId)
    .then(res => {
      console.log(res);
      renderMovieDetailsMarkup(createMovieDetailsMarkup(res), res);
      toggleModalMovie();
      spinnerControls.hideSpinner();
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
  } = res;
  const genresList = [];

  for (const genre of genres) {
    genresList.push(genre.name);
  }

  return `
    <div class="modal_posterbox">
      <img
        class="modal_poster"
        src="https://image.tmdb.org/t/p/w500${poster_path}"
        alt="${title}"
        width="375"
        height="478"
      />
    </div>
    <div class="modal-info">
      <h2 class="modal-info_title">${title}</h2>
      <table class="modal-info_table">
        <tr>
          <th>Vote / Votes</th>
          <td><span class="modal-table_vote">${vote_average.toFixed(1)}</span> / <span class="modal-table_votes">${vote_count}</span></td>
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
      <p>${overview}</p>
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
}

function onFetchError(res) {
  toggleModalMovie();
  clearModal();
  spinnerControls.hideSpinner();
}

function clearModal() {
  refs.modal.innerHTML = "<p>Sorry, this movie have't details yet</p>";
}

function renderMainMarkup() {
  const mainMarkup = `
    <div class="modal_posterbox">
      <img
        class="modal_poster"
        src="./images/сard-films/movie-poster-coming-soon.jpg"
        alt="Poster"
        width="375"
        height="478"
      />
    </div>
    <div class="modal-info">
      <h2 class="modal-info_title">Title</h2>
      <table class="modal-info_table">
        <tr>
          <th>Vote / Votes</th>
          <td><span class="modal-table_vote"></span> / </td>
        </tr>
        <tr>
          <th>Popularity</th>
          <td></td>
        </tr>
        <tr>
          <th>Original Title</th>
          <td class="uppercase"></td>
        </tr>
        <tr>
          <th>Genre</th>
          <td></td>
        </tr>
      </table>
      <h3 class="modal-info_about">About</h3>
      <p></p>
      <div class="modal_btnbox">
          <button id="watched" class="modal_btn" type="button">
            add to Watched
          </button>
          <button id="queue" class="modal_btn" type="button">
            add to Queue
          </button>
        </div>
    </div>
  `;

  refs.modal.innerHTML = mainMarkup;
}