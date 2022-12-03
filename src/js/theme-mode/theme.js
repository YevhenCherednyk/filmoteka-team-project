const refs = {
    body: document.querySelector('body'),
    darkModeToggle: document.querySelector('#darkmode-toggle'),
}

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
    refs.body.classList.add('darkmode');
    refs.darkModeToggle.checked=true;
    localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  refs.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

refs.darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');

  if (refs.darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});