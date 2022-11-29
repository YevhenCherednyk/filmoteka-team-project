export default function optimizer(title, name) {
  if (title) {
    return title;
  }

  if (name) {
    return name;
  }

  return 'The best film in your life! :)';
}
