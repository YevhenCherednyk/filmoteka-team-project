import renderLinearButtons from "./renderLinearButtons";
import renderButtonsArrowRight from "./renderButtonsArrowRight";
import renderButtonsTwoArrow from "./renderButtonsTwoArrow";
import renderButtonsArrowLeft from "./renderButtonsArrowLeft";

export default paginationManager;
const maxPageForLinearBatton = 10;
const divPaginationRef = document.querySelector(".pagination");

function paginationManager(currentPage, numberOfPages) {
  if (numberOfPages <= maxPageForLinearBatton) {
    renderLinearButtons(currentPage, numberOfPages);
    divPaginationRef.classList.remove("hide-pagination");
    return;
  }
  if (numberOfPages > maxPageForLinearBatton && currentPage < 5) {
    renderButtonsArrowRight(currentPage);
    divPaginationRef.classList.remove("hide-pagination");
    return;
  }
  if (
    numberOfPages > maxPageForLinearBatton &&
    currentPage >= 5 &&
    numberOfPages - currentPage >= 5
  ) {
    renderButtonsTwoArrow(currentPage, numberOfPages);
    divPaginationRef.classList.remove("hide-pagination");
    return;
  }
  if (
    numberOfPages > maxPageForLinearBatton &&
    currentPage >= 5 &&
    numberOfPages - currentPage < 5
  ) {
    renderButtonsArrowLeft(currentPage, numberOfPages);
    divPaginationRef.classList.remove("hide-pagination");
    return;
  }
}
