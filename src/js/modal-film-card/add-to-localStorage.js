import Notiflix from 'notiflix';
Notiflix.Notify.init({position: 'center-center'});

let newStorageMovie = [];

export function addToLocalStorage(event, dataMovie) {  
  const typeBtn = event.target.id
  
  let storageMovie = localStorage.getItem(typeBtn)
  storageMovie = JSON.parse(storageMovie);
  checkQueue(typeBtn, dataMovie);
  
    if (storageMovie) {
      const check = storageMovie.find(item => item.id === dataMovie.id);
      if (check) {
        return Notiflix.Notify.warning(`Good choice! however, the movie has already been added to ${typeBtn}`);
      }
        storageMovie.push(dataMovie);     
        localStorage.setItem(typeBtn, JSON.stringify(storageMovie)); 
        Notiflix.Notify.info(`Good choice! "${dataMovie.original_title}" added to ${typeBtn}`);
        checkQueue(typeBtn, dataMovie);
        return
    }

    newStorageMovie.push(dataMovie);
    localStorage.setItem(typeBtn, JSON.stringify(newStorageMovie));
    Notiflix.Notify.info(`Good choice! "${dataMovie.original_title}" added to ${typeBtn}`);
    newStorageMovie = [];           
    return
}

function checkQueue (typeBtn, dataMovie) {
  if (typeBtn == 'watched') {
    let storageMovieQueue = localStorage.getItem('queue')
    storageMovieQueue = JSON.parse(storageMovieQueue);
    if (storageMovieQueue) {
      for (let i = 0; i < storageMovieQueue.length; i += 1) {
      if (storageMovieQueue[i].id === dataMovie.id) {
        storageMovieQueue.splice(i, 1);
        localStorage.setItem('queue', JSON.stringify(storageMovieQueue))
      }
    }
    }
  }
}