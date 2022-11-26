export default function markupCard(data) {
  // Хочу зробити деструктуризацію змінних. потрібно знати який обєкт буде приходити
  const card = data
    .map(
      ({
        id,
        src = '../images/сard-films/movie-poster-coming-soon.jpg',
        name,
        genre,
      }) =>
        `      <li class="films-list__item" data-id=${id}>
        <div class="wrapper">
            <img
              src=${src}
              alt=${name}
            />
          </div>
          <div class="text-wrapper">
            <h2 class="films-list__title">${name}</h2>
            <p class="films-list__text">${genre}</p>
          </div>
      </li>`
    )
    .join('');
  return card;
}
