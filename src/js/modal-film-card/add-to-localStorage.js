  let newStorageMovie = [];

export function addToLocalStorage(event, dataMovie) {  
    const typeBtn = event.target.id
    let storageMovie = localStorage.getItem(typeBtn)
    storageMovie = JSON.parse(storageMovie);

    if (storageMovie) {
      const check = storageMovie.find(item => item.id === dataMovie.id);
      if (check) { return }

        storageMovie.push(dataMovie);     
        localStorage.setItem(typeBtn, JSON.stringify(storageMovie)); 
        return
    }

    newStorageMovie.push(dataMovie);
    localStorage.setItem(typeBtn, JSON.stringify(newStorageMovie));       
    newStorageMovie = [];           
    return
}