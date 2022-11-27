import axios from 'axios';

const refs = {
  filmCardItem: document.querySelector('.films-list__item'),
  backdrop: document.querySelector("[data-modal]"),
  ul: document.querySelector(".films__list"),
  li: document.querySelectorAll(".films__item"),
  modal: document.querySelector(".modal_movie"),
};

refs.backdrop.style.display = "none";

fetchMovieTrending()
  .then(res => {
  renderMovieListMarkup(createMovieListMarkup(res.results));
  })
  .catch(onFetchError);

async function fetchMovieTrending() {
  const BASE_URL = "https://api.themoviedb.org/3/";
  const KEY = "19011014b9b53c4fd496d37c25f2b619";
  const options = `trending/all/day?api_key=${KEY}`
  
  return await axios.get(`${BASE_URL}${options}`).then(res => res.data);
}

function onFetchError(error) {
  console.error("Oops");
}

function createMovieListMarkup(data) {
  return data
    .map(({ id, poster_path, title, vote_average, release_date, genre_ids }) => {
      // const genreList = genre_ids[0];
      // console.log(genreList);

      // genre_ids.forEach(function(number, index) {
      //   console.log(`Індекс ${index}, значення ${number}`);
      // });

      return `
        <li class="films__item" data-id="${id}" >
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg" alt="${title}" class="films__img" width="375" height="574">
          <h2 class="films__title">${title}</h2>
          <span class="films__genre">${title}</span>
          <span class="films__year">${release_date}</span>
          <span class="films__rate">${vote_average}</span>
        </li>
      `;
    })
    .join('');
}

function renderMovieListMarkup(data) {
  refs.ul.innerHTML = data;
}
// ==================================================

refs.ul.addEventListener("click", onListClick);

function onListClick(e) {
  console.log(e.target.parentElement);

  if (e.target.parentElement.nodeName !== 'LI') {
    return;
  }

  const currentMovieId = e.target.parentElement.dataset.id;
  // console.log(currentMovieId);
  openModalMovieDetails(currentMovieId);

  fetchMovieDetails(currentMovieId)
  .then(res => {
    console.log(res.title);
    // console.log(currentMovieId);

    console.log(createMovieDetailsMarkup(res));

    renderMovieDetailsMarkup(createMovieDetailsMarkup(res));
  })
  .catch(onFetchError);
}

function openModalMovieDetails(currentMovieId) {
  // console.log(currentMovieId);

  // refs.backdrop.style.display = "block";
}

async function fetchMovieDetails(id) {
  const BASE_URL = "https://api.themoviedb.org/3/";
  const KEY = "19011014b9b53c4fd496d37c25f2b619";
  const options = `movie/${id}?api_key=${KEY}&language=en-US`
  
  return await axios.get(`${BASE_URL}${options}`).then(res => res.data);
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

function createMovieDetailsMarkup(res) {
  console.log(res);

  const { title } = res;

      return `
        <button class="btn-close" type="button">
          <svg class="btn-close_icon" width="14" height="14">
            <use href="#"></use>
          </svg>
        </button>
        <div class="modal_posterbox">
          <img
            class="modal_poster"
            src="./images/сard-films/movie-poster-coming-soon.jpg"
            alt="${title}"
            width="375"
            height="478"
          />
        </div>
        <div class="modal-info">
        <h2 class="modal-info_title">${title}</h2>
        <h3 class="modal-info_about">About</h3>
        </div>
      `;
}

function renderMovieDetailsMarkup(data) {
  refs.modal.innerHTML = data;
}

// ==================================================

// refs.filmCardItem.addEventListener('click', onFilmCardItemClick);

// function onFilmCardItemClick(e) {
//   const currentMovieId = e.target.dataset.id;

//   toggleModal();

//   fetchMovieDetails(currentMovieId)
//     .then(res => {
//       renderPhotoCardMarkup(createPhotoCardMarkup(res.hits));
//     })
//     .catch(onFetchError)
// }

// async function fetchMovieDetails(idMovie) {
//   const BASE_URL = "https://api.themoviedb.org/3/movie/";
//   const KEY = "19011014b9b53c4fd496d37c25f2b619";
//   const options = `${idMovie}?api_key=${KEY}`
  
//   return await axios.get(`${BASE_URL}${options}`).then(res => res.data);
// }

function toggleModal() {
  // document.body.classList.toggle("modal-open")
  refs.backdrop.classList.toggle("is-hidden");
}