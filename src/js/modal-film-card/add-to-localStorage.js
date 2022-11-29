// Перенеси цей імпорт в індекс  >>>  import './js/modal-film-card/add-to-localStorage.js';

// const dataMovie = {
//   id: 436270,
//   adult: false,
//   backdrop_path: '/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg',
//   belongs_to_collection: null,
//   budget: 200000000,
//   genres: [
//     {
//       id: 28,
//       name: 'Action',
//     },
//     {
//       id: 14,
//       name: 'Fantasy',
//     },
//     {
//       id: 878,
//       name: 'Science Fiction',
//     },
//   ],
//   homepage: 'https://www.dc.com/BlackAdam',
//   id: 436270,
//   imdb_id: 'tt6443346',
//   original_language: 'en',
//   original_title: 'Black Adam',
//   overview:
//     'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
//   popularity: 15075.276,
//   poster_path: '/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
//   production_companies: [
//     {
//       id: 12,
//       logo_path: '/iaYpEp3LQmb8AfAtmTvpqd4149c.png',
//       name: 'New Line Cinema',
//       origin_country: 'US',
//     },
//     {
//       id: 34081,
//       logo_path: null,
//       name: 'Flynn Picture Company',
//       origin_country: 'US',
//     },
//     {
//       id: 73669,
//       logo_path: '/7tmSGstK3KwgcDIuBYLTAayjit9.png',
//       name: 'Seven Bucks Productions',
//       origin_country: 'US',
//     },
//     {
//       id: 128064,
//       logo_path: '/13F3Jf7EFAcREU0xzZqJnVnyGXu.png',
//       name: 'DC Films',
//       origin_country: 'US',
//     },
//   ],
//   production_countries: [
//     {
//       iso_3166_1: 'US',
//       name: 'United States of America',
//     },
//   ],
//   release_date: '2022-10-19',
//   revenue: 368000000,
//   runtime: 125,
//   spoken_languages: [
//     {
//       english_name: 'Danish',
//       iso_639_1: 'da',
//       name: 'Dansk',
//     },
//     {
//       english_name: 'English',
//       iso_639_1: 'en',
//       name: 'English',
//     },
//   ],
//   status: 'Released',
//   tagline: 'The world needed a hero. It got Black Adam.',
//   title: 'Black Adam',
//   video: false,
//   vote_average: 7.258,
//   vote_count: 1951,
// };

const btnAddToWatchedRef = document.querySelector('#watched');
const btnAddToQueueRef = document.querySelector('#queue');

btnAddToWatchedRef.addEventListener('click', addToLocalStorage);
btnAddToQueueRef.addEventListener('click', addToLocalStorage);

let newStorageMovie = [];
let check = '';

export function addToLocalStorage(event, data) {
  const typeBtn = event.target.id;
  console.log(typeBtn);
  console.log(data);

  if (localStorage.getItem(typeBtn)) {
    const parsedArray = JSON.parse(localStorage.getItem(typeBtn));
    const check = parsedArray.find(item => item.id === data.id);

    if (check) {
      alert('This film is already in stock');
      return;
    }

    if (!check) {
      const newArray = [...parsedArray, data];
      localStorage.setItem(typeBtn, JSON.stringify(newArray));
    }
  }

  if (!localStorage.getItem(typeBtn)) {
    localStorage.setItem(typeBtn, JSON.stringify([data]));
  }

  // let storageMovie = localStorage.getItem(typeBtn); // дає масив черги чи переглянуто
  // storageMovie = JSON.parse(storageMovie); // парсить цей масив. навіщо??

  // if (storageMovie) {
  //   uniquenessCheck(storageMovie);
  //   if (check === 'repetition') {
  //     return;
  //   }
  //   storageMovie.push(dataMovie);
  //   localStorage.setItem(typeBtn, JSON.stringify(storageMovie));
  //   return;
  // }

  // newStorageMovie.push(dataMovie);
  // localStorage.setItem(typeBtn, JSON.stringify(newStorageMovie));
  // newStorageMovie = [];
  // return;
}

// function uniquenessCheck(storageMovie) {
//   for (movie of storageMovie) {
//     console.log(movie);
//     if (movie.id === dataMovie.id) {
//       check = 'repetition';
//       return check;
//     }
//   }
// }
