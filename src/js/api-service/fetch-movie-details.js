import axios from 'axios';

async function fetchMovieDetails(id) {
  const BASE_URL = "https://api.themoviedb.org/3/";
  const KEY = "19011014b9b53c4fd496d37c25f2b619";
  const options = `movie/${id}?api_key=${KEY}`
  
  return await axios.get(`${BASE_URL}${options}`).then(res => res.data);
}

export default { fetchMovieDetails };