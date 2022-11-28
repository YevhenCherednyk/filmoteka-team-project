

const refs = {
    searchForm: document.querySelector('.search-form'),
    articlesContainer: document.querySelector('.films-list'),
    // loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  };

  refs.searchForm.addEventListener('submit', onSearch);

  let page = 1;
console.log(555);
function onSearch(event) {
  event.preventDefault();

  clearArticlesContainer();
  fetchMovieSearche().then(results => {
    if(results.length === 0) {
      console.log('введите значение');
    }
    appendHitsMarkup(results);
  });
}

function fetchMovieSearche() {
  const searchQuery = event.currentTarget.elements.query.value;

  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=19011014b9b53c4fd496d37c25f2b619&query=${searchQuery}&page=${page}&genre`
  )
    .then(r => r.json())
    .then(data => {
      console.log(data.results[0]);

      return data.results;
    });
}

function appendHitsMarkup(results) {
  console.log('original_title', results[0].original_title);
  console.log('Жанр', results[0].genre_ids[0].name);
  refs.articlesContainer.insertAdjacentHTML('beforeend', createCard(results));
}

// function createCard(results) {
//   return results
//     .map(({ poster_path, 
//       original_title, 
//       id, 
//       popularity,
//       release_date,
//       vote_count,
//       genre_ids,
//      }) => {
//       return `
//     <div class="photo-card">
//     <h2> ${original_title} </h2>
//     <img class="gallery__image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="movie"/>
//     <div class="info">
    
//       <p class="info-item">
//         <b>Id</b>${id}
//       </p>
//       <p class="info-item">
//         <b>Popularity
//         </b>${popularity}
//       </p>
//       <p class="info-item">
//         <b>Release_date</b>${release_date.slice(0, 4)}
//       </p>
//       <p class="info-item">
//       <b>genre</b>${genre_ids[0]}
//       </p>
//     </div>
//   </div>
//   `;
//     })
//     .join('');
// }

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}