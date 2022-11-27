export default function libraryCardMarkup(data) {
  // Змінні у деструктуризації привести у відповідність до отриманих з  АРІ

  const card = data
    .map(
      ({
        id,
        name,
        genre,
        rating,
        src = '../images/сard-films/movie-poster-coming-soon.jpg',
      }) => `<li class="films-list__item" data-id="${id}">
  <div class="wrapper">
    <img src="${src}" alt="${name}" />
  </div>
  <div class="text-wrapper">
    <h2 class="films-list__title">${name}</h2>
    <p class="films-list__text">
      ${genre}<span class="films-rating">${rating}</span>
    </p>
  </div>
</li>`
    )
    .join('');
  return card;
}
export function libraryCardMarkup(data, genres) {
  // Змінні у деструктуризації привести у відповідність до отриманих з  АРІ
  // console.log(genres.genres[0].id);
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
                    <p class="films-list__text"><span>${findGenres(
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

function findGenres(genres, genreIds) {
  const genresArray = [];

  for (let id of genreIds) {
    let item = genres.genres.find(genre => genre.id === id);
    if (item == undefined) {
      continue;
    } else {
      genresArray.push(item.name);
    }
  }

  if (genresArray.length === 0) {
    genresArray.push('Other');
  }

  if (genresArray.length > 3) {
    return [genresArray[0], genresArray[1], 'Other'].join(', ');
  }
  return genresArray.join(', ');
}

function optimizer(title, name) {
  if (title) {
    return title;
  }

  return name;
}

function dateOptimizer(releaseDate, firstDate) {
  if (releaseDate) {
    return releaseDate.slice(0, 4);
  }

  return firstDate.slice(0, 4);
}
