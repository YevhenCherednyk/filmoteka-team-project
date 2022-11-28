export default renderButtonsTwoArrow;
const divPaginationRef = document.querySelector(".pagination");

function renderButtonsTwoArrow(currentPage, numberOfPages) {
  let markupButtons = [];
  const arrowLeftImg = document.createElement("img");
  arrowLeftImg.src = "./arrow-left.svg";
  arrowLeftImg.alt = "Back";
  arrowLeftImg.classList.add("img-arrow");
  arrowLeftImg.width = "16";
  arrowLeftImg.height = "16";
  const arrowLeftBtn = document.createElement("button");
  arrowLeftBtn.innerText = "-1";
  arrowLeftBtn.type = "button";
  arrowLeftBtn.classList.add("btn-arrow");
  arrowLeftBtn.append(arrowLeftImg);
  markupButtons.push(arrowLeftBtn);

  const buttonOne = document.createElement("button");
  buttonOne.type = "button";
  buttonOne.innerText = 1;
  buttonOne.classList.add("pagination__btn");
  markupButtons.push(buttonOne);

  const pOne = document.createElement("p");
  pOne.innerText = "...";
  pOne.classList.add("inner-dotes");
  const divOne = document.createElement("div");
  divOne.classList.add("dotes");
  divOne.append(pOne);
  markupButtons.push(divOne);

  const buttonTwo = document.createElement("button");
  buttonTwo.type = "button";
  buttonTwo.innerText = currentPage - 2;
  buttonTwo.classList.add("pagination__btn");
  markupButtons.push(buttonTwo);

  const buttonThree = document.createElement("button");
  buttonThree.type = "button";
  buttonThree.innerText = currentPage - 1;
  buttonThree.classList.add("pagination__btn");
  markupButtons.push(buttonThree);

  const buttonFour = document.createElement("button");
  buttonFour.type = "button";
  buttonFour.innerText = currentPage;
  buttonFour.classList.add("pagination__btn");
  buttonFour.classList.add("current-btn");
  markupButtons.push(buttonFour);

  const buttonFive = document.createElement("button");
  buttonFive.type = "button";
  buttonFive.innerText = currentPage + 1;
  buttonFive.classList.add("pagination__btn");
  markupButtons.push(buttonFive);

  const buttonSix = document.createElement("button");
  buttonSix.type = "button";
  buttonSix.innerText = currentPage + 2;
  buttonSix.classList.add("pagination__btn");
  markupButtons.push(buttonSix);

  const pTwo = document.createElement("p");
  pTwo.innerText = "...";
  pTwo.classList.add("inner-dotes");
  const divTwo = document.createElement("div");
  divTwo.classList.add("dotes");
  divTwo.append(pTwo);
  markupButtons.push(divTwo);

  const buttonLast = document.createElement("button");
  buttonLast.type = "button";
  buttonLast.innerText = numberOfPages;
  buttonLast.classList.add("pagination__btn");
  markupButtons.push(buttonLast);

  const arrowRightImg = document.createElement("img");
  arrowRightImg.src = "./arrow-right.svg";
  arrowRightImg.alt = "Forward";
  arrowRightImg.classList.add("img-arrow");
  arrowRightImg.width = "16";
  arrowRightImg.height = "16";
  const arrowRightBtn = document.createElement("button");
  arrowRightBtn.innerText = "+1";
  arrowRightBtn.type = "button";
  arrowRightBtn.classList.add("btn-arrow");
  arrowRightBtn.append(arrowRightImg);
  markupButtons.push(arrowRightBtn);

  divPaginationRef.innerHTML = "";
  divPaginationRef.append(...markupButtons);
}
