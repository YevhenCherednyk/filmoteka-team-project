import GetTrendingMovies from './trending-and-genres';
import markupCard from '../card/card-murkup-main';
import spinnerControls from '../spinner/spinner';
import paginationManager from '../pagination/pagination-manager';
import PathHendler from '../pagination/request-hendler';


const refs = {
  searchForm: document.querySelector('.search-form'),
  articlesContainer: document.querySelector('.films-list'),
  txt: document.querySelector('.errorText'),
};

const moviesApiService = new GetTrendingMovies();
const text = refs.txt.textContent;

refs.txt.textContent = ' ';

refs.searchForm.addEventListener('submit', onSearch);

async function onSearch(e) {
  e.preventDefault();
 
  const divPaginationRef = document.querySelector('.pagination');
  divPaginationRef.classList.add('hide-pagination');
 
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
  
  paginationManager(searchedMovies.page, searchedMovies.total_pages);
  PathHendler.path = moviesApiService.GetMovieSearcPath();
}

function appendHitsMarkup(results, genres) {
  refs.articlesContainer.insertAdjacentHTML(
    'beforeend',
    markupCard(results, genres)
  );
  spinnerControls.hideSpinner();
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

function capitalizeQuery(text) {
  return text[0].toUpperCase() + text.slice(1);
}