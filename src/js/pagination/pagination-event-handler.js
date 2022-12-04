import getDataAndPutToRender from './get-data-and-put-to-render';
import PathHendler from './request-hendler';

const paginationRef = document.querySelector('.pagination');

paginationRef.addEventListener('click', e => {
  if (e.target.innerText === '' || e.target.type !== 'button') {
    return;
  }
  const currentButton = document.querySelector('.current-btn');
  let page = currentButton.innerText;
  if (e.target.innerText === '+1') {
    page = parseInt(page) + 1;
  } else if (e.target.innerText === '-1') {
    page = parseInt(page) - 1;
  } else {
    page = e.target.innerText;
  }
  getDataAndPutToRender(PathHendler.path, page);
});
