'use strict';

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

elemArr.forEach( el => {
    el.addEventListener("click", () => {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    })
})

/**
 * toggle navbar when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]")

navbarLinks.forEach( el => {
    el.addEventListener("click", () => {
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    })
}) 

/**
 * header & go top active when windows scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", () => {
    if( window.scrollY >= 400) {
        header.classList.add('active');
        goTopBtn.classList.add('active');
    } else {
        header.classList.remove('active');
        goTopBtn.classList.remove('active');
    }
});

/*
* Hide and Unhide Home Text
*/

const hiddenText = document.querySelectorAll("[data-hidden-text]");
const hideButton = document.querySelector("[data-hide-text]");

hideButton.addEventListener('click', () => {
    if(hideButton.innerHTML === 'Show More'){
        hideButton.innerHTML = 'Show Less'
    }else{
        hideButton.innerHTML = 'Show More'
    }
    hiddenText.forEach(el => {
        el.classList.toggle('hidden');
    })
});
