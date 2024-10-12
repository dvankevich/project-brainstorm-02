const mpLoadMoreBtn = document.querySelector('.mp-load-more-button');
const mpListItems = document.querySelectorAll('.mp-list-item');
let mpVisibleItems = 3; //current visible elements
let mpVisibleItemsEndIndex = 6;
const mpVisibleItemsStep = 3;

function mpSetHidden(element) {
  element.classList.add('visually-hidden');
}

function mpSetVisible(element) {
  element.classList.remove('visually-hidden');
}

mpLoadMoreBtn.addEventListener('click', mpLoadMoreBtnHandler);

function mpLoadMoreBtnHandler() {
  for (let index = mpVisibleItems; index < mpVisibleItemsEndIndex; index++) {
    mpSetVisible(mpListItems[index]);
  }
  if (mpVisibleItemsEndIndex === mpListItems.length) {
    mpSetHidden(mpLoadMoreBtn);
  }
  mpVisibleItems += mpVisibleItemsStep;
  mpVisibleItemsEndIndex += mpVisibleItemsStep;
  if (mpVisibleItemsEndIndex > mpListItems.length) {
    mpVisibleItemsEndIndex = mpListItems.length;
  }
}
