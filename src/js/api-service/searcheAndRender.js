// import MoviesApiService from './searchMovie';
import GetTrendingMovies from './trendingAndGenres';
import markupCard from '../card/card-murkup-main';
import spinnerControls from '../spinner/spinner';
// ====== Добавил Толик Шулика =========
import paginationManager from '../pagination/paginationManager';
import PathHendler from '../pagination/RequestHendler';
// ====== Добавил Толик Шулика =========

const refs = {
  searchForm: document.querySelector('.search-form'),
  articlesContainer: document.querySelector('.films-list'),
  txt: document.querySelector('.errorText'),
};

const moviesApiService = new GetTrendingMovies();
const text = refs.txt.textContent;

// console.log('errorText', text);
refs.txt.textContent = ' ';
// console.log('moviesApiService', moviesApiService);

refs.searchForm.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
  // ====== Добавил Толик Шулика =========
  const divPaginationRef = document.querySelector('.pagination');
  divPaginationRef.classList.add('hide-pagination');
  // ====== Добавил Толик Шулика =========

  moviesApiService.query = e.currentTarget.elements.query.value;

  const genres = await moviesApiService.searchGenres();
  const searchedMovies = await moviesApiService.fetchMovieSearch();
  clearArticlesContainer();
  if (moviesApiService.query === '' || searchedMovies.results.length === 0) {
    refs.txt.style.color = '#ff001b';
    refs.txt.textContent =
      'Search result not successful. Enter the correct movie name and try again!';
    refs.searchForm.reset();
    return;
  }

  refs.txt.textContent = ' ';

  spinnerControls.showSpinner();
  moviesApiService.resetPage();
  appendHitsMarkup(searchedMovies.results, genres);
  refs.searchForm.reset();
  refs.txt.style.color = 'green';
  refs.txt.textContent = `Search result for: ${capitalizeQuery(
    moviesApiService.query
  )}`;
  // ====== Добавил Толик Шулика =========
  paginationManager(searchedMovies.page, searchedMovies.total_pages);
  PathHendler.path = moviesApiService.GetMovieSearcPath();
  // ====== Добавил Толик Шулика =========
}

function appendHitsMarkup(results, genres) {
  refs.articlesContainer.insertAdjacentHTML(
    'beforeend',
    markupCard(results, genres)
  );
  // message.hidenError();
  spinnerControls.hideSpinner();
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

function capitalizeQuery(text) {
  return text[0].toUpperCase() + text.slice(1);
}

// function messageError() {
//   refs.txt.classList.remove('visually-hidden');
// }

// function hidenError() {
//   refs.txt.classList.add('visually-hidden');
// }
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

// function createCard(results) {
//   return results
//     .map(
//       ({
//         poster_path,
//         original_title,
//         id,
//         popularity,
//         release_date,
//         vote_count,
//         genre_ids,
//       }) => {
//         return `
//         <li class="films-list__item" data-id="${id}">
//         <div class="wrapper">
//             <img src="http://image.tmdb.org/t/p/w500${poster_path}" alt="movie"/>
//         </div>
//         <div class="text-wrapper">
//             <h2 class="films-list__title">${original_title}</h2>
//             <p class="films-list__text"><span class="films-list__ganre">'In progress'</span> &#10072; <span class="release-date">${release_date.slice(
//               0,
//               4
//             )}</span>
//             </p>
//         </div>
//     </li>
//   `;
//       }
//     )
//     .join('');
// }
