'use strict';

/*
   *PRELOAD
   *loading will be end after document is loaded
*/
const preloader = document.querySelector("[data-preaload]")

window.addEventListener("load" ,  () => {
    preloader.classList.add("loaded")
    document.body.classList.add("loaded")
})




/*

  * Add event listener on multiple elements

*/


const addEventOnElements = function (elements , eventType , callBack) {
    for(let i = 0 , len = elements.length ; i < len ; i++){
        elements[i].addEventListener(eventType , callBack)
    }
}


/*

  * NAVBAR

*/


const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")

const toggleNavbar = function () {
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.classList.toggle("nav-active")
}

addEventOnElements(navTogglers , "click" , toggleNavbar)