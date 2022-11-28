// function onListClick(e) {
//     if (e.target.parentElement.nodeName !== 'LI') {
//       return;
//     }
  
//     const currentMovieId = e.target.parentElement.dataset.id;
//     // ===========================================
  
//     API.fetchMovieDetails(currentMovieId)
//     .then(res => {
//       renderMovieDetailsMarkup(createMovieDetailsMarkup(res));
//       dataMovie = res;
//       console.log("dataMovie", dataMovie);
//       })
//     .catch(onFetchError);
    
//     toggleModal();

//--------------------------------------------------------------
//добавляем слушателя на Esc

// window.addEventListener('keydown', onEscKeyPress);

// //добавляем слушателя на backdrop

// refs.backdrop.addEventListener('click', onBackdropClick);
//--------------------------------------------------------------

// }


function toggleModal() {
    document.body.classList.toggle("modal-is-open")
    refs.backdrop.classList.toggle("is-hidden");
}

//функция закрытия модалки по Esc
function onEscKeyPress(e) {
    if (e.code === 'Escape') {
        toggleModal();
        window.removeEventListener('keydown', onEscKeyPress);
    }
}

//функция закрытия модалки по backdrop
function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
        toggleModal();
        window.removeEventListener('keydown', onEscKeyPress);
    }
}



