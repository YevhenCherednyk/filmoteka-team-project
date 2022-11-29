import paginationManager from './paginationManager';
import markupCard from '../card/card-murkup-main';
import fetchData from './fetchData';

const container = document.querySelector('.films-list');
const pathToGanres =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=19011014b9b53c4fd496d37c25f2b619';

async function getDataAndPutToRender(basePath, page) {
  const movies = await fetchData(`${basePath}&page=${page}`);
  const genres = await fetchData(pathToGanres);
  const markupListOfMovies = await markupCard(movies.results, genres);
  container.innerHTML = markupListOfMovies;
  paginationManager(movies.page, movies.total_pages);
  window.scrollTo({
    top: 270,
    behavior: 'smooth',
  });
}

export default getDataAndPutToRender;
