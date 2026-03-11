'use strict';

const asideBar = document.querySelector('.header__aside')
const burgerOpen = document.querySelectorAll('.icon--burger, .icon--close' )
const topBar = document.querySelector('.top-bar__menu')
const heroSection = document.querySelector('.hero')


let currentState = false

function changeState(state) {
return !state
}

function addClass() {

  if (currentState === true) {
    asideBar.classList.add('header__aside--active') 
    topBar.classList.add('top-bar--hidden')
    heroSection.classList.add('hero--hidden')
  }
  else {
    asideBar.classList.remove('header__aside--active')
    topBar.classList.remove('top-bar--hidden')
    heroSection.classList.remove('hero--hidden')
  }
}

burgerOpen.forEach(btn => {
     btn.addEventListener('click', () => {
  currentState = changeState(currentState)
  addClass()
})
})

