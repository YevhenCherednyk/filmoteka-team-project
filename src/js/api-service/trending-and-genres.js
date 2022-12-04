const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '19011014b9b53c4fd496d37c25f2b619';
import spinnerControls from '../spinner/spinner';
import markupCard from '../card/card-murkup-main';
import paginationManager from '../pagination/pagination-manager';
import PathHendler from '../pagination/request-hendler';

export class GetTrendingMovies {
  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  async searchTrendingFilms() {
    const url = `${BASE_URL}trending/all/week?api_key=${API_KEY}&page=${this.page}`;
    try {
      const response = await fetch(url);
      const trendings = await response.json();
      return trendings;
    } catch (error) {
      console.log(error);
    }
  }

  async searchGenres() {
    const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}`;
    try {
      const response = await fetch(url);
      const genres = await response.json();
      return genres;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieSearch() {
    try {
      const response = await fetch(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`
      );
      const searchedMovies = await response.json();
      return searchedMovies;
    } catch (error) {
      console.log(error);
    }
  }


  GetMovieSearcPath() {
    return `${BASE_URL}search/movie?api_key=${API_KEY}&query=${this.searchQuery}`;
  }
  GetTrendingSearcPath() {
    return `${BASE_URL}trending/all/week?api_key=${API_KEY}`;
  }

  pageIncrement() {
    this.page += 1;
  }

  pageDecrement() {
    this.page -= 1;
  }

  resetPage() {
    this.page = 1;
  }

  set currentPage(newPage) {
    this.page = newPage;
  }

  get currentPage() {
    return this.page;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

const GetMovies = new GetTrendingMovies();

const container = document.querySelector('.films-list');
window.addEventListener('load', () => {
  spinnerControls.showSpinner();
  setTimeout(markupRenderer, 500);
});

async function markupRenderer() {
  const genres = await GetMovies.searchGenres();
  const trendings = await GetMovies.searchTrendingFilms();
  const markup = markupCard(trendings.results, genres);
  container.innerHTML = markup;

  paginationManager(trendings.page, trendings.total_pages);
  PathHendler.path = GetMovies.GetTrendingSearcPath();

  spinnerControls.hideSpinner();
}

export default GetTrendingMovies;
