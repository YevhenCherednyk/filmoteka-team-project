import './vketov';
import API from '../api-service/fetch-movie-details';

const refs = {
  filmList: document.querySelector(".films-list"),
  backdrop: document.querySelector("[data-modal]"),
  modal: document.querySelector(".render-movie"),
  modalCloseBtn: document.querySelector("button.btn-close")
};

export let dataMovie = {};
console.log("dataMovie", dataMovie);

refs.filmList.addEventListener("click", onListClick);
refs.modalCloseBtn.addEventListener("click", toggleModal);

function onListClick(e) {
  if (e.target.parentElement.nodeName !== 'LI') {
    return;
  }

  const currentMovieId = e.target.parentElement.dataset.id;
  // ===========================================

  API.fetchMovieDetails(currentMovieId)
  .then(res => {
    renderMovieDetailsMarkup(createMovieDetailsMarkup(res));
    dataMovie = res;
    console.log("dataMovie", dataMovie);
    })
  .catch(onFetchError);
  
  toggleModal();
}

function createMovieDetailsMarkup(res) {
  const { poster_path, title, vote_average, vote_count, popularity, original_title, genres, overview } = res;
  const genresList = []
  
  for (const genre of genres) {
    genresList.push(genre.name)
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