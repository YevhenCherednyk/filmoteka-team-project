class RequestHendler {
  constructor() {
    this.requst = '';
  }
  get path() {
    return this.requst;
  }

  set path(newPath) {
    this.requst = newPath;
  }
}

const pathToTrandingMovies =
  'https://api.themoviedb.org/3/trending/movie/week?api_key=19011014b9b53c4fd496d37c25f2b619';

const PathHendler = new RequestHendler();
PathHendler.path = pathToTrandingMovies;
export default PathHendler;
