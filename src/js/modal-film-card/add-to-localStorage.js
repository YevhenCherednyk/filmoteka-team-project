import Notiflix from 'notiflix';

let newStorageMovie = [];

export function addToLocalStorage(event, dataMovie) {  
    const typeBtn = event.target.id
    let storageMovie = localStorage.getItem(typeBtn)
    storageMovie = JSON.parse(storageMovie);

    if (storageMovie) {
      const check = storageMovie.find(item => item.id === dataMovie.id);
      console.log(dataMovie);
      
      if (check) {
        return Notiflix.Notify.warning(`Good choice! however, the movie has already been added to ${typeBtn}`);
      }

        storageMovie.push(dataMovie);     
        localStorage.setItem(typeBtn, JSON.stringify(storageMovie)); 
        Notiflix.Notify.info(`Good choice! "${dataMovie.original_title}" added to ${typeBtn}`);
        return
    }

    newStorageMovie.push(dataMovie);
    localStorage.setItem(typeBtn, JSON.stringify(newStorageMovie));       
    newStorageMovie = [];           
    return
}

Notiflix.Notify.init({
position: 'center-center'});