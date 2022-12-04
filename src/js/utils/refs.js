export const refs = {
  // searcheAndRender
  searchForm: document.querySelector('.search-form'),
  articlesContainer: document.querySelector('.films-list'),
  txt: document.querySelector('.errorText'),

  // library-card
  libraryUl: document.querySelector('#library'),
  BtnWatched: document.querySelector('#watched1'),
  BtnQueue: document.querySelector('#queue1'),

  // movie-details
  body: document.querySelector('body'),
  filmList: document.querySelector('.films-list'),
  modal: document.querySelector('.modal_movie'),
  posterbox: document.querySelector('.modal_posterbox'),
  movieTrailerbox: document.querySelector('.modal-box__movieTrailer'),

  // theme
  body: document.querySelector('body'),
  darkModeToggle: document.querySelector('#darkmode-toggle'),

  // modal_oc
  body: document.querySelector('body'),
  backdropMovie: document.querySelector("[data-modal='movie']"),
  modalCloseBtnMovie: document.querySelector("[data-modalCloseBtn='movie']"),

  backdropTeam: document.querySelector("[data-modal='team']"),
  modalOpenBtnTeam: document.querySelector("[data-modalOpenBtn='team']"),
  modalCloseBtnTeam: document.querySelector("[data-modalCloseBtn='team']"),

  movieTrailerbox: document.querySelector('.modal-box__movieTrailer'),
};
