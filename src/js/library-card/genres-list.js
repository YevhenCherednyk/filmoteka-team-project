export default function genresList(genres) {
  const genreList = genres.map(({ name }) => name);

  if (!genreList.length) {
    genreList.push('Other');
  }

  if (genreList.length > 2) {
    return [genreList[0], genreList[1], 'Other'].join(', ');
  }

  return genreList.join(', ');
}