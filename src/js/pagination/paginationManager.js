import renderLinearButtons from './renderLinearButtons';
import renderButtonsArrowRight from './renderButtonsArrowRight';
import renderButtonsTwoArrow from './renderButtonsTwoArrow';
import renderButtonsTwoArrowMobile from './renderButtonsTwoArrowMobile';
import renderButtonsArrowLeft from './renderButtonsArrowLeft';

export default paginationManager;
let maxPageForLinearBatton = 7;
let numberOfButtons = 6;
const divPaginationRef = document.querySelector('.pagination');
const screenWidth = window.matchMedia('(max-width: 768px)');

function wathcScreen(screenWidth) {
  if (screenWidth.matches) {
    maxPageForLinearBatton = 7;
    numberOfButtons = 6;
  } else {
    maxPageForLinearBatton = 10;
    numberOfButtons = 9;
  }
}
screenWidth.addListener(wathcScreen);
wathcScreen(screenWidth);

function paginationManager(currentPage, numberOfPages) {
  if (numberOfPages < 2) {
    return;
  }
  if (numberOfPages <= maxPageForLinearBatton) {
    renderLinearButtons(currentPage, numberOfPages);
    divPaginationRef.classList.remove('hide-pagination');
    return;
  }
  if (numberOfPages > maxPageForLinearBatton && currentPage < 5) {
    renderButtonsArrowRight(currentPage, numberOfButtons);
    divPaginationRef.classList.remove('hide-pagination');
    return;
  }
  if (
    numberOfPages > maxPageForLinearBatton &&
    currentPage >= 5 &&
    numberOfPages - currentPage >= 5
  ) {
    function wathcScreen(screenWidth) {
      if (screenWidth.matches) {
        renderButtonsTwoArrowMobile(currentPage, numberOfPages);
        divPaginationRef.classList.remove('hide-pagination');
        return;
      } else {
        renderButtonsTwoArrow(currentPage, numberOfPages);
        divPaginationRef.classList.remove('hide-pagination');
        return;
      }
    }
    screenWidth.addListener(wathcScreen);
    wathcScreen(screenWidth);
  }
  if (
    numberOfPages > maxPageForLinearBatton &&
    currentPage >= 5 &&
    numberOfPages - currentPage < 5
  ) {
    renderButtonsArrowLeft(currentPage, numberOfPages, numberOfButtons);
    divPaginationRef.classList.remove('hide-pagination');
    return;
  }
}
