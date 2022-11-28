// const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '19011014b9b53c4fd496d37c25f2b619';

// // ====================================================
// export default class MoviesApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchMovieSearche() {
//     return fetch(
//       `${BASE_URL}search/movie?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`
//     )
//       .then(responce => responce.json())
//       .then(({results}) => {

//         return results;
//       });
//   }

//   resetPage(){
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery){
//     this.searchQuery = newQuery;
//   }

// //   ============Часть от Олега======================

// async searchGenres() {
//     const url = `${BASE_URL}genre/movie/list?api_key=${API_KEY}`;
//     try {
//       const response = await fetch(url);
//       const genres = await response.json();
//       return genres;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
