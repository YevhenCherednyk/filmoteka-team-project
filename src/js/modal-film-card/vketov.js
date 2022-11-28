import axios from 'axios';

const refs = {
  filmCardItem: document.querySelector('.films-list__item'),
  backdrop: document.querySelector("[data-modal]"),
  mainSection: document.querySelector("main"),
  li: document.querySelectorAll(".films__item"),
  modal: document.querySelector(".modal_movie"),
};

// ==================================================

// fetchMovieTrending()
//   .then(res => {
//     (createMovieListMarkup(res.results));
//     // renderMovieListMarkup(createMovieListMarkup(res.results));
//   })
//   .catch(onFetchError);

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
      return `
        <li class="films__item" data-id="${id}" >
          <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" class="films__img" width="375" height="574">
          <h2 class="films__title">${title}</h2>
          <span class="films__genre">${genre_ids}</span>
          <span class="films__year">${release_date}</span>
          <span class="films__rate">${vote_average}</span>
        </li>
      `;
    })
    .join('');
}

function renderMovieListMarkup(data) {
  refs.mainSection.innerHTML = data;
}