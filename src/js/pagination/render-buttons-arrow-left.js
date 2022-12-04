export default renderButtonsArrowLeft;
const divPaginationRef = document.querySelector('.pagination');

function renderButtonsArrowLeft(currentPage, numberOfPages, numberOfButtons) {
  let markupButtons = [];

  const arrowImg = document.createElement('img');
  arrowImg.src = './arrow-left.svg';
  arrowImg.alt = 'Back';
  arrowImg.classList.add('img-arrow');
  arrowImg.width = '16';
  arrowImg.height = '16';
  const arrowBtn = document.createElement('button');
  arrowBtn.innerText = '-1';
  arrowBtn.type = 'button';
  arrowBtn.classList.add('btn-arrow');
  arrowBtn.append(arrowImg);
  markupButtons.push(arrowBtn);

  for (let i = numberOfButtons; i >= 1; i -= 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = numberOfPages - i + 1;
    button.classList.add('pagination__btn');
    if (numberOfPages - i + 1 === currentPage) {
      button.classList.add('current-btn');
    }
    markupButtons.push(button);
  }

  divPaginationRef.innerHTML = '';
  divPaginationRef.append(...markupButtons);
}
