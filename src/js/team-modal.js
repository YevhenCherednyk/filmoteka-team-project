const refs = {
    modalCloseBtn: document.querySelector("[data-modal-close]"),
    modalOpenBtn: document.querySelector("#open-modal-team"),
    backdrop: document.querySelector("#team-modal")
};

refs.modalOpenBtn.addEventListener("click", toggleModal);
refs.modalCloseBtn.addEventListener("click", toggleModal);

function toggleModal() {
  document.body.classList.toggle("modal-is-open")
  refs.backdrop.classList.toggle("is-hidden");
}