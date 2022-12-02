export default function picturePathPlace(path) {
  if (path == null) {
    return 'https://img.freepik.com/free-vector/coming-soon-display-background-with-focus-light_1017-33741.jpg';
  }

  return `https://image.tmdb.org/t/p/w500${path}`;
}
