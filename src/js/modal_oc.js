// const refs = {
//     //  ========== команда ==========
//     modalCloseBtn: document.querySelector("[data-modal-close]"),
//     modalOpenBtn: document.querySelector("#open-modal-team"),
//     backdrop: document.querySelector("#team-modal"),
//     // ========== фільм ==========
//     backdrop: document.querySelector("[data-modal]"),
//     modalCloseBtn: document.querySelector("button.btn-close"),
//     modalPoster: document.querySelector(".modal_poster"),
// };










// // ========== фільм ==========
// function toggleModal() {
//     document.body.classList.toggle("modal-is-open")
//     refs.backdrop.classList.toggle("is-hidden");
// }

// //функция закрытия модалки по Esc
// function onEscKeyPress(e) {
//     if (e.code === 'Escape') {
//         toggleModal();
//         window.removeEventListener('keydown', onEscKeyPress);
//     }
// }

// //функция закрытия модалки по backdrop
// function onBackdropClick(e) {
//     if (e.currentTarget === e.target) {
//         toggleModal();
//         window.removeEventListener('keydown', onEscKeyPress);
//     }
// }

// // ========== команда ==========
// window.addEventListener('keydown', onEscKeyPress);
// refs.backdrop.addEventListener('click', onBackdropClick);
 

// function onEscKeyPress(e) {
//     if (e.code === 'Escape') {
//         toggleModal();
//         window.removeEventListener('keydown', onEscKeyPress);
//     }
// }

// function onBackdropClick(e) {
//     if (e.currentTarget === e.target) {
//         toggleModal();
//         window.removeEventListener('keydown', onEscKeyPress);
//     }
// }