const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '19011014b9b53c4fd496d37c25f2b619';
import markupCard from '../card/card-murkup-main';

const refs = {
  searchForm: document.querySelector('.search-form'),
  articlesContainer: document.querySelector('.films-list'),
  // loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', onSearch);
let page = 1;

function onSearch(e) {
  e.preventDefault();

  clearArticlesContainer();
  fetchMovieSearche().then(results => {
    if (results.length === 0) {
      console.log('введите значение');
    }
    appendHitsMarkup(results);
  });
}

function fetchMovieSearche() {
  const searchQuery = event.currentTarget.elements.query.value;

  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
  )
    .then(r => r.json())
    .then(data => {
      console.log(data.results[0]);

      return data.results;
    });
}

function appendHitsMarkup(results) {
  console.log('original_title', results[0].original_title);
  console.log('Жанр', results[0].genre_ids[0].name);
  refs.articlesContainer.insertAdjacentHTML('beforeend', createCard(results));
}

function createCard(results) {
  return results
    .map(({ poster_path, 
      original_title, 
      id, 
      popularity,
      release_date,
      vote_count,
      genre_ids,
     }) => {
      return `
    <div class="photo-card">
    <h2> ${original_title} </h2>
    <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="movie"/>
    <div class="info">
    
      <p class="info-item">
        <b>Id</b>${id}
      </p>
      <p class="info-item">
        <b>Popularity
        </b>${popularity}
      </p>
      <p class="info-item">
        <b>Release_date</b>${release_date.slice(0, 4)}
      </p>
      <p class="info-item">
      <b>genre</b>${genre_ids[0]}
      </p>
    </div>
  </div>
  `;
    })
    .join('');
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}



// export class getSearcheMovies {
//   constructor() {
//     this.page = 1;
//     this.searchQuery = '';
//   }
//   // ${this.searchQuery}
//   async searchFilms() {
//     const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=car&page=${this.page}`;
//     this.pageIncrement();
//     try {
//       const response = await fetch(url);
//       const searcheMovie = await response.json();
//       return searcheMovie;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async searchGenres() {
//     const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}`;
//     try {
//       const response = await fetch(url);
//       const genres = await response.json();
//       return genres;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   pageIncrement() {
//     this.page += 1;
//   }

//   pageDecrement() {
//     this.page -= 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }
// const GetMovies = new getSearcheMovies();

// const container = document.querySelector('.films-list');

// async function markupRenderer() {
//   const genres = await GetMovies.searchGenres();
//   const trendings = await GetMovies.searchFilms();
//   console.log(trendings);
//   console.log(genres);
//   const markup = markupCard(trendings.results, genres);
//   container.insertAdjacentHTML('beforeend', markup);
// }

// export default getSearcheMovies;

// markupRenderer();
