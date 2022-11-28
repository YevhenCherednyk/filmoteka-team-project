import markupCard from '../card/card-murkup-main';
import MoviesApiService from './searchMovie';

const refs = {
  searchForm: document.querySelector('.search-form'),
  articlesContainer: document.querySelector('.films-list'),
  errorText: document.querySelector('.errorText'),
  // loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};
const moviesApiService = new MoviesApiService();
const text = refs.errorText.textContent;

console.log('errorText', text);

console.log('moviesApiService', moviesApiService);

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  moviesApiService.query = e.currentTarget.elements.query.value;

  if (moviesApiService.query === '') {
    return alert('Enter films name');
    // add text Search result not successful. Enter the correct movie name and
  }

  moviesApiService.resetPage();
  moviesApiService.fetchMovieSearche().then(results => {
    if (results.length === 0) {
      return alert('Enter films name');
      // add text Search result not successful. Enter the correct movie name and
    }
    clearArticlesContainer();
    // markupRenderer(results);

    appendHitsMarkup(results);
  });
}

function appendHitsMarkup(results) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', createCard(results));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

// =============Часть от Олега===================================
// async function markupRenderer() {
//     const genres = await moviesApiService.searchGenres();
//     const trendings = await moviesApiService.fetchMovieSearche();
//     console.log(trendings);
//     console.log(genres);
//     const markup = markupCard(trendings.results, genres);
//     refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
//   }

// ================================================

function createCard(results) {
  return results
    .map(
      ({
        poster_path,
        original_title,
        id,
        popularity,
        release_date,
        vote_count,
        genre_ids,
      }) => {
        return `
        <li class="films-list__item" data-id="${id}">
        <div class="wrapper">
            <img src="http://image.tmdb.org/t/p/w500${poster_path}" alt="movie"/>
        </div>
        <div class="text-wrapper">
            <h2 class="films-list__title">${original_title}</h2>
            <p class="films-list__text"><span class="films-list__ganre">'In progress'</span> &#10072; <span class="release-date">${release_date.slice(0, 4)}</span>
            </p>
        </div>
    </li>
  `;
      }
    )
    .join('');
}


