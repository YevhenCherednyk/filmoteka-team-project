const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '19011014b9b53c4fd496d37c25f2b619';
import spinnerControls from '../spinner/spinner';
// import libraryCardMarkup from '../library-card/library-card';
import markupCard from '../card/card-murkup-main';
// ====== Добавил Толик Шулика =========
import paginationManager from '../pagination/paginationManager';
// ====== Добавил Толик Шулика =========

export class getTrendingMovies {
  constructor() {
    this.page = 1;
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
}

const GetMovies = new getTrendingMovies();
const container = document.querySelector('.films-list');
window.addEventListener('load', () => {
  spinnerControls.showSpinner();
  setTimeout(markupRenderer, 1000);
});

async function markupRenderer() {
  const genres = await GetMovies.searchGenres();
  const trendings = await GetMovies.searchTrendingFilms();
  console.log(trendings);
  console.log(genres);
  const markup = markupCard(trendings.results, genres);
  container.innerHTML = markup;
  // ====== Добавил Толик Шулика =========
  paginationManager(trendings.page, trendings.total_pages);
  // ====== Добавил Толик Шулика =========

  spinnerControls.hideSpinner();
}

export default getTrendingMovies;
