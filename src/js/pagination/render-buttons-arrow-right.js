export default renderButtonsArrowRight;
const divPaginationRef = document.querySelector('.pagination');

function renderButtonsArrowRight(currentPage, numberOfButtons) {
  let markupButtons = [];
  for (let i = 1; i <= numberOfButtons; i += 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = i;
    button.classList.add('pagination__btn');
    if (i === currentPage) {
      button.classList.add('current-btn');
    }
    markupButtons.push(button);
  }
  const arrowImg = document.createElement('img');
  arrowImg.src = './arrow-right.svg';
  arrowImg.alt = 'Forward';
  arrowImg.classList.add('img-arrow');
  arrowImg.width = '16';
  arrowImg.height = '16';
  const arrowBtn = document.createElement('button');
  arrowBtn.innerText = '+1';
  arrowBtn.type = 'button';
  arrowBtn.classList.add('btn-arrow');
  arrowBtn.append(arrowImg);
  markupButtons.push(arrowBtn);
  divPaginationRef.innerHTML = '';
  divPaginationRef.append(...markupButtons);
}
