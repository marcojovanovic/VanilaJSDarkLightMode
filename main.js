// variables

const navInput = document.querySelector('.nav-input')
const icon = document.querySelector('#icon')
const modeName = document.querySelector('.mode-name')
const navMode = document.querySelector('.nav-mode')
const nav = document.querySelector('.nav')


// event Listener
navInput.addEventListener('change', changeTheme)

// toggle dark/light theme

function changeTheme(e){

 

  if(e.target.checked === true){

    document.documentElement.setAttribute('data-theme', 'dark')
    navMode.children[1].classList.replace('fa-sun', 'fa-moon')
    nav.style.backgroundColor = 'rgba(0,0,0,0.8)'
    modeName.textContent = 'Dark Mode'

 

  } else {

    document.documentElement.setAttribute('data-theme', 'light')
    navMode.children[1].classList.replace('fa-moon', 'fa-sun')
    modeName.textContent = 'Light Mode'
    nav.style.backgroundColor = 'rgba(0,0,0,0)'
   
  }

    

}




