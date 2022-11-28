export default function findGenres(genres, genreIds) {
  const genresArray = [];

  for (let id of genreIds) {
    let item = genres.genres.find(genre => genre.id === id);
    if (item == undefined) {
      continue;
    } else {
      genresArray.push(item.name);
    }
  }

  if (genresArray.length === 0) {
    genresArray.push('Other');
  }

  if (genresArray.length > 3) {
    return [genresArray[0], genresArray[1], 'Other'].join(', ');
  }

  return genresArray.join(', ');
}
