import renderLinearButtons from './renderLinearButtons';
import renderButtonsArrowRight from './renderButtonsArrowRight';
import renderButtonsTwoArrow from './renderButtonsTwoArrow';
import renderButtonsArrowLeft from './renderButtonsArrowLeft';

export default paginationManager;
let maxPageForLinearBatton = 7;
const divPaginationRef = document.querySelector('.pagination');
// =============================================================
var x = window.matchMedia('(max-width: 768px)');

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.body.style.backgroundColor = 'yellow';
    maxPageForLinearBatton = 7;
  } else {
    // document.body.style.backgroundColor = 'pink';
    maxPageForLinearBatton = 10;
  }
}
x.addListener(myFunction); // Attach listener function on state changes
myFunction(x); // Call listener function at run time

// =========================================================
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
    renderButtonsArrowRight(currentPage);
    divPaginationRef.classList.remove('hide-pagination');
    return;
  }
  if (
    numberOfPages > maxPageForLinearBatton &&
    currentPage >= 5 &&
    numberOfPages - currentPage >= 5
  ) {
    renderButtonsTwoArrow(currentPage, numberOfPages);
    divPaginationRef.classList.remove('hide-pagination');
    return;
  }
  if (
    numberOfPages > maxPageForLinearBatton &&
    currentPage >= 5 &&
    numberOfPages - currentPage < 5
  ) {
    renderButtonsArrowLeft(currentPage, numberOfPages);
    divPaginationRef.classList.remove('hide-pagination');
    return;
  }
}
