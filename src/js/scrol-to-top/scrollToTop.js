import throttle from "lodash.throttle";

const scrollBtn = document.querySelector('.to-top');
const filmListRef = document.querySelector('.films-list');

if (scrollBtn)
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

filmListRef.addEventListener('click', hideToTopBtn);

document.addEventListener('scroll', throttle(btnVisibility, 250));

function hideToTopBtn() {
  scrollBtn.classList.add('is-hidden');
}

function btnVisibility() {

  window.scrollY > 150
    ? scrollBtn.classList.remove('is-hidden')
    : scrollBtn.classList.add('is-hidden');

  if (document.querySelector('body').classList.contains('modal-is-open')) {
    scrollBtn.classList.add('is-hidden');
  }
}