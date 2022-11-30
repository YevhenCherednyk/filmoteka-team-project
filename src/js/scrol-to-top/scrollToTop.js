const scrollBtn = document.querySelector(".to-top");

if (scrollBtn) scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function btnVisibility() {
    window.scrollY > 50 ? scrollBtn.style.visibility = "visible" : scrollBtn.style.visibility = "hidden";

    if (document.querySelector('body').classList.contains('modal-is-open')){
        scrollBtn.style.visibility = "hidden";
    }

    // if (window.scrollY > 50) {
    //     scrollBtn.style.visibility = "visible";
    // } else {
    //     scrollBtn.style.visibility = "hidden";
    // }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});


// function setBlackThemeScrollBtn() {
//   if (document.querySelector('body').classList.contains('black')) {
//     scrollBtn.classList.add('to-top--styleDark');
//   } else {
//     scrollBtn.classList.remove('to-top--styleDark');
//   }
// }

