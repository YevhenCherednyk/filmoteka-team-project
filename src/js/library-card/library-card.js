export default function libraryCardMarkup(data) {
  // Змінні у деструктуризації привести у відповідність до отриманих з  АРІ

  const card = data
    .map(
      ({
        id,
        name,
        genre,
        rating,
        src = '../images/сard-films/movie-poster-coming-soon.jpg',
      }) => `<li class="films-list__item" data-id="${id}">
                <div class="wrapper">
                    <img src="${src}" alt="${name}" />
                </div>
                <div class="text-wrapper">
                    <h2 class="films-list__title">${name}</h2>
                    <p class="films-list__text">${genre}<span class="films-rating">${rating}</span>
                    </p>
                </div>
            </li>`
    )
    .join('');
  return card;
}
