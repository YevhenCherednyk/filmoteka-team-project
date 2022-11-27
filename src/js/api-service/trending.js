const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '19011014b9b53c4fd496d37c25f2b619';

function getTrendingMovies() {
  fetch(`${BASE_URL}trending/all/week?api_key=${API_KEY}`).then(response => {
    return response.json();
  });
}

export default getTrendingMovies;
