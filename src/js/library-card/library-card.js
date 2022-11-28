import findGenres from '../all-genres/find-genres';
import dateOptimizer from './date-optimizer';

export default function libraryCardMarkup(data, genres) {
  const card = data
    .map(
      ({
        id,
        title,
        name,
        genre_ids,
        vote_average,
        release_date,
        first_air_date,
        poster_path = '../images/сard-films/movie-poster-coming-soon.jpg',
      }) => {
        return `<li class="films-list__item" data-id="${id}">
                    <img src="http://image.tmdb.org/t/p/w500${poster_path}" alt="${optimizer(
          title,
          name
        )}" />
                    <h2 class="films-list__title">${optimizer(title, name)}</h2>
                    <span class="films-list__info films-list__ganre">${findGenres(
                      genres,
                      genre_ids
                    )}</span> <span class="films-list__info">&#10072;</span> <span class="films-list__info release-date">${dateOptimizer(
          release_date,
          first_air_date
        )}</span><span class="films-list__info films-rating">${vote_average.toFixed(1)}</span>
                </div>
            </li>`;
      }
    )
    .join('');
  return card;
}