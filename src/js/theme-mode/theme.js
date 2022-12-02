const refs = {
    body: document.querySelector('body'),
    // lightModeBtn: document.querySelector(''),
    // darkModeBtn: document.querySelector(''),
    darkModeChekBox: document.querySelector('#dark-mode'),
    filmTitle: document.querySelector('.films-list__title'),
}

const colorMode = {
    light: 'light-mode',
    dark: 'dark-mode',
}

// const { light, dark } = mode;

function getThemeMode(){
    let actualMode = localStorage.getItem('actualMode');

if (!actualMode) {
    actualMode = light;
    localStorage.setItem('actualMode', light)
} else {
    refs.body.classList.add(actualMode)
}
}

function setThemeMode(){
    localStorage.setItem('actualMode', )
}

// refs.lightModeBtn.addEventListener('click', setThemeMode);
// refs.darkModeBtn.addEventListener('click', setThemeMode);

refs.darkModeChekBox.addEventListener('click', makeDarkTheme);
let checkbox = refs.darkModeChekBox.checked;

function makeDarkTheme() {
    if (refs.darkModeChekBox.checked) {
        refs.body.classList.add('dark-mode');
        refs.filmTitle.classList.add('dark-mode-txt');
        console.log(filmTitle);
    } else {
        refs.body.classList.remove('dark-mode');
        refs.filmTitle.classList.remove('dark-mode-txt');
    }
}

