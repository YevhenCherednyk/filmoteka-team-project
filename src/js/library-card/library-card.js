import dateOptimizer from '../api-service/date-optimizer';
import titleOptimizer from '../api-service/title-optimizer';

const refs = {
  libraryUl: document.querySelector("#library")
}

const libraryMovies = localStorage.getItem('watched');
console.log(libraryMovies);

function createMovieLibraryMarkup() {
  const watched = JSON.parse(libraryMovies);
  
  if (!watched || !watched.length) {
    return
  } 

  return watched.map(({id, poster_path, title, name, vote_average, genres, release_date, first_air_date}) =>{ 
  // console.log(poster_path, title, vote_average, vote_count, popularity, original_title, overview)
  return `<li class="films-list__item" data-id="${id}">
  <img class="films-list__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${titleOptimizer(
title,
name
)}" />
  <h2 class="films-list__title">${titleOptimizer(
    title,
    name
    )}</h2>
  <span class="films-list__info films-list__ganre">${genresList(genres)}</span> <span class="films-list__info">&#10072;</span> <span class="films-list__info release-date">${dateOptimizer(
release_date,
first_air_date
)}
<span class="films-list__info films-rating "> ${vote_average.toFixed(1)}</span>
</li>`
  }).join("");
}

function renderMovieDetailsMarkup(data) {
  refs.libraryUl.innerHTML = data;
}

renderMovieDetailsMarkup(createMovieLibraryMarkup(watched));

function genresList (genres) {
const genreList = genres.map(({name}) =>  
  name)

  if (genreList.length === 0) {
    genreList.push('Other');
  }

  if (genreList.length > 2) {
    return [genreList[0], genreList[1], 'Other'].join(', ');
  }

  return genreList.join(', ');
}
