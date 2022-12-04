import dateOptimizer from '../api-service/date-optimizer';
import titleOptimizer from '../api-service/title-optimizer';
import genresList from './genres-list';
import picturePathPlace from '../api-service/placeholder';

export default function createMovieLibraryMarkup(data) {
  if (!data && !data.length) {
    return;
  }

  return data
    .map(
      ({
        id,
        poster_path,
        title,
        name,
        vote_average,
        original_title,
        genres,
        overview,
        release_date,
        first_air_date,
      }) => {
        return `<li class="films-list__item" data-id="${id}">
  <img class="films-list__img" src="${picturePathPlace(
    poster_path
  )}" alt="${titleOptimizer(title, name)}" />
  <div class="film-list__data">
  <h2 class="films-list__title">${titleOptimizer(original_title, name)}</h2>
    <span class="films-list__info films-list__ganre">${genresList(genres)}
  </span> <span class="films-list__info">&#10072;</span> <span class="films-list__info release-date">${dateOptimizer(
    release_date,
    first_air_date
  )}
<span class="films-list__info films-rating "> ${vote_average.toFixed(
          1
        )}</span></div>
</li>`;
      }
    )
    .join('');
}
