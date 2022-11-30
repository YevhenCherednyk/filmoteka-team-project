const scrollBtn = document.querySelector(".to-top");
const filmListRef = document.querySelector('.films-list');

if (scrollBtn) scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

filmListRef.addEventListener('click', hideToTopBtn)

document.addEventListener("scroll", () => {
    btnVisibility();
});

function hideToTopBtn() {
    scrollBtn.classList.add('is-hidden')
}

function btnVisibility() {

    window.scrollY > 150 ? scrollBtn.classList.remove('is-hidden') : scrollBtn.classList.add('is-hidden');

    if (document.querySelector('body').classList.contains('modal-is-open')) {
        scrollBtn.classList.add('is-hidden');
    }

    // window.scrollY > 150 ? scrollBtn.classList.remove('visually-hidden') : scrollBtn.classList.add('visually-hidden');

    // if (window.scrollY > 50) {
    //     scrollBtn.style.visibility = "visible";
    // } else {
    //     scrollBtn.style.visibility = "hidden";
    // }
};

// function setBlackThemeScrollBtn() {
//   if (document.querySelector('body').classList.contains('black')) {
//     scrollBtn.classList.add('to-top--styleDark');
//   } else {
//     scrollBtn.classList.remove('to-top--styleDark');
//   }
// }

