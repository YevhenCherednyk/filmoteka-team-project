export default function picturePathPlace(path) {
  if (path == null) {
    return 'https://via.placeholder.com/800x1200.svg/000000/ffffff?text=Sorry+,+image+loading+is+failed';
  }

  return `https://image.tmdb.org/t/p/w500${path}`;
}
