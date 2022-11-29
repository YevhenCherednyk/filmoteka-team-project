function toggleModal() {
    document.body.classList.toggle("modal-is-open")
    refs.backdrop.classList.toggle("is-hidden");
    window.addEventListener('keydown', onEscKeyPress); 
}


// window.addEventListener('keydown', onEscKeyPress); 
refs.backdrop.addEventListener('click', onBackdropClick);
 

function onEscKeyPress(e) {
    if (e.code === 'Escape') {
        toggleModal();
        window.removeEventListener('keydown', onEscKeyPress);
    }
}

function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
        toggleModal();
        window.removeEventListener('keydown', onEscKeyPress);
    }
}