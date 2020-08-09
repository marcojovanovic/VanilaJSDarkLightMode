// variables

const navInput = document.querySelector('.nav-input');
const icon = document.querySelector('#icon');
const modeName = document.querySelector('.mode-name');
const navMode = document.querySelector('.nav-mode');
const imgOne = document.querySelector('#image-1');
const imgTwo = document.querySelector('#image-2');
const imgThree = document.querySelector('#image-3');

// event Listener
navInput.addEventListener('change', changeTheme);

document.addEventListener('DOMContentLoaded', () => {
  let local = localStorage.getItem('data-theme');

  document.documentElement.setAttribute('data-theme', local);

  if (local === 'dark') {
    modeName.textContent = 'Dark Mode';
    navInput.checked = true;
    changePictureOnDarkMode('dark');
  }
});

// toggle dark/light theme

function changePictureOnDarkMode(mode) {
  imgOne.src = `img/undraw_conceptual_idea_${mode}.svg`;
  imgTwo.src = `img/undraw_feeling_proud_${mode}.svg`;
  imgThree.src = `img/undraw_proud_coder_${mode}.svg`;
}

function changeTheme(e) {
  if (e.target.checked === true) {
    document.documentElement.setAttribute('data-theme', 'dark');
    navMode.children[1].classList.replace('fa-sun', 'fa-moon');
    modeName.textContent = 'Dark Mode';
    changePictureOnDarkMode('dark');
    localStorage.setItem('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    let mode = 'light';
    navMode.children[1].classList.replace('fa-moon', 'fa-sun');
    modeName.textContent = 'Light Mode';
    changePictureOnDarkMode('light');
    localStorage.setItem('data-theme', 'light');
  }
}
