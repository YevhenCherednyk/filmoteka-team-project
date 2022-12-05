import Notiflix from 'notiflix';
Notiflix.Notify.init({ position: 'center-center' });

let newStorageMovie = [];

export function addToLocalStorage(event, dataMovie) {
  if (!localStorage.getItem('status')) {
    Notiflix.Notify.failure(
      `You are logged out. Please log in to use the library functions!`
    );
    return;
  }
  const typeBtn = event.target.id;
  const btnAddToWatchedRef = document.querySelector('#watched');
  const btnAddToQueueRef = document.querySelector('#queue');

  let storageMovie = localStorage.getItem(typeBtn);
  storageMovie = JSON.parse(storageMovie);

  if (storageMovie) {
    const check = storageMovie.find(item => item.id === dataMovie.id);
    if (check) {
      for (let i = 0; i < storageMovie.length; i += 1) {
        if (storageMovie[i].id === dataMovie.id) {
          storageMovie.splice(i, 1);
          localStorage.setItem(typeBtn, JSON.stringify(storageMovie));
          Notiflix.Notify.info(
            `"${dataMovie.original_title}" removed from ${typeBtn}`
          );
        }
      }

      if (typeBtn === 'queue') {
        btnAddToQueueRef.textContent = 'add to Queue';
        // btnAddToQueueRef.classList.remove('modal_btn--selected');
      }

      if (typeBtn === 'watched') {
        btnAddToWatchedRef.textContent = 'add to Watched';
        // btnAddToWatchedRef.classList.remove('modal_btn--selected');
      }

      return;
    }
    storageMovie.push(dataMovie);
    localStorage.setItem(typeBtn, JSON.stringify(storageMovie));
    Notiflix.Notify.info(
      `Good choice! "${dataMovie.original_title}" added to ${typeBtn}`
    );
    if (typeBtn === 'queue') {
      btnAddToQueueRef.textContent = 'remove from queued';
      // btnAddToQueueRef.classList.add('modal_btn--selected');
    }

    if (typeBtn === 'watched') {
      btnAddToWatchedRef.textContent = 'remove from watched';
      // btnAddToWatchedRef.classList.add('modal_btn--selected');
    }
    checkQueue(typeBtn, dataMovie);
    return;
  }

  // newStorageMovie.push(dataMovie);
  // localStorage.setItem(typeBtn, JSON.stringify(newStorageMovie));
  // Notiflix.Notify.info(
  //   `Good choice! "${dataMovie.original_title}" added to ${typeBtn}`
  // );

  // if (typeBtn === 'queue') {
  //   btnAddToQueueRef.textContent = 'remove from queued';
  //   // btnAddToQueueRef.classList.add('modal_btn--selected');
  // }

  // if (typeBtn === 'watched') {
  //   btnAddToWatchedRef.textContent = 'remove from watched';
  //   // btnAddToWatchedRef.classList.add('modal_btn--selected');
  // }

  newStorageMovie = [];
  return;
}

function checkQueue(typeBtn, dataMovie) {
  if (typeBtn == 'watched') {
    let storageMovieQueue = localStorage.getItem('queue');
    storageMovieQueue = JSON.parse(storageMovieQueue);
    if (storageMovieQueue) {
      for (let i = 0; i < storageMovieQueue.length; i += 1) {
        if (storageMovieQueue[i].id === dataMovie.id) {
          storageMovieQueue.splice(i, 1);
          localStorage.setItem('queue', JSON.stringify(storageMovieQueue));
        }
      }
    }
  }
}
