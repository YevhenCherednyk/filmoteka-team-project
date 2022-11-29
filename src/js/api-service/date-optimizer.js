export default function dateOptimizer(releaseDate, firstDate) {
  if (releaseDate) {
    return releaseDate.slice(0, 4);
  }

  if (firstDate) {
    return firstDate.slice(0, 4);
  }

  return 'Coming soon! :)';
}
