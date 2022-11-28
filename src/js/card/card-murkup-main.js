import dateOptimizer from '../api-service/date-optimizer';
import titleOptimizer from '../api-service/title-optimizer';
import findGenres from '../all-genres/find-genres';

export default function markupCard(data, genres) {
  const card = data
    .map(
      ({
        id,
        title,
        name,
        genre_ids,
        release_date,
        first_air_date,
        poster_path = '../images/сard-films/movie-poster-coming-soon.jpg',
      }) => {
        return `<li class="films-list__item" data-id="${id}">
                    <img class="films-list__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${titleOptimizer(
          title,
          name
        )}" />
                    <h2 class="films-list__title">${titleOptimizer(
                      title,
                      name
                    )}</h2>
                    <span class="films-list__info films-list__ganre">${findGenres(
                      genres,
                      genre_ids
                    )}</span> <span class="films-list__info">&#10072;</span> <span class="films-list__info release-date">${dateOptimizer(
          release_date,
          first_air_date
        )}</span>
            </li>`;
      }
    )
    .join('');
  return card;
}
