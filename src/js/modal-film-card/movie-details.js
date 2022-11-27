import './vketov';
import API from '../api-service/fetch-movie-details';

const refs = {
  filmCardItem: document.querySelector('.films-list__item'),
  backdrop: document.querySelector("[data-modal]"),
  mainSection: document.querySelector("main"),
  li: document.querySelectorAll(".films__item"),
  modal: document.querySelector(".modal_movie"),
};
const KEY = "19011014b9b53c4fd496d37c25f2b619";

refs.mainSection.addEventListener("click", onListClick);

function onListClick(e) {
  console.log(e.target.parentElement);

  if (e.target.parentElement.nodeName !== 'LI') {
    return;
  }

  const currentMovieId = e.target.parentElement.dataset.id;
  console.log(currentMovieId);

  API.fetchMovieDetails(currentMovieId)
  .then(res => {
    renderMovieDetailsMarkup(createMovieDetailsMarkup(res));
    })
  .catch(onFetchError);
  
  toggleModal();
}

// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>
// src="https://api.themoviedb.org/3/movie/${id}/images?api_key=${KEY}${poster_path}"

function createMovieDetailsMarkup(res) {
  console.log(res)

  const { id, poster_path, title, vote_average, vote_count, popularity, original_title, genres, overview } = res;
  const genresList = []
  
  for (const genre of genres) {
    genresList.push(genre.name)
  }

  return `
    <button class="btn-close" type="button">
      <svg class="btn-close_icon" width="14" height="14">
        <use href="#"></use>
      </svg>
    </button>
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
          <td><span class="modal-table_vote">${vote_average}</span> / ${vote_count}</td>
        </tr>
        <tr>
          <th>Popularity</th>
          <td>${popularity}</td>
        </tr>
        <tr>
          <th>Original Title</th>
          <td class="uppercase">${original_title}</td>
        </tr>
        <tr>
          <th>Genre</th>
          <td>${genresList.join(", ")}</td>
        </tr>
      </table>
      <h3 class="modal-info_about">About</h3>
      <p>${overview}</p>
      <div class="modal_btnbox">
        <button id="#" class="modal_btn" type="button">add to Watched</button>
        <button id="#" class="modal_btn" type="button">add to queue</button>
      </div>
    </div>
  `;
}

function renderMovieDetailsMarkup(data) {
  refs.modal.innerHTML = data;
}

function onFetchError(error) {
  console.error("Oops");
}

function toggleModal() {
  // document.body.classList.toggle("modal-open")
  refs.backdrop.classList.toggle("is-hidden");
}