export default renderLinearButtons;
const divPaginationRef = document.querySelector(".pagination");

function renderLinearButtons(currentPage, numberOfPages) {
  let markupButtons = [];
  for (let i = 1; i <= numberOfPages; i += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.innerText = i;
    button.classList.add("pagination__btn");
    if (i === currentPage) {
      button.classList.add("current-btn");
    }
    markupButtons.push(button);
  }
  divPaginationRef.innerHTML = "";
  divPaginationRef.append(...markupButtons);
}
