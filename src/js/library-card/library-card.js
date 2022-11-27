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
                <div class="wrapper">
                    <img src="http://image.tmdb.org/t/p/w500${poster_path}" alt="${optimizer(
          title,
          name
        )}" />
                </div>
                <div class="text-wrapper">
                    <h2 class="films-list__title">${optimizer(title, name)}</h2>
                    <p class="films-list__text"><span class="films-list__ganre">${findGenres(
                      genres,
                      genre_ids
                    )}</span> &#10072; <span class="release-date">${dateOptimizer(
          release_date,
          first_air_date
        )}</span><span class="films-rating">${vote_average.toFixed(1)}</span>
                    </p>
                </div>
            </li>`;
      }
    )
    .join('');
  return card;
}