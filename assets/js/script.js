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



/*
   *Header
 */


  const header = document.querySelector("[data-header]")
  
  let lastScrollPos = 0


  const hideHeader = function (){
    const isScrollBottom = lastScrollPos <= window.scrollY

    if(isScrollBottom){
      header.classList.add('hide')
    }else{
      header.classList.remove('hide')
    }

    lastScrollPos = window.scrollY;
  }

   

  window.addEventListener('scroll' , function (){
    if(window.scrollY >= 50){
      header.classList.add("active")
      hideHeader()
    }else{
      header.classList.remove("active")
    }
  })



  /*
     *HERO SLIDER 
  */



  const heroSlider = document.querySelector("[data-hero-slider]")
  const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]")
  const heroSliderPrevBtn = document.querySelector("[data-prev-btn]")
  const heroSliderNextBtn = document.querySelector("[data-next-btn]")


  let currentSliderPos = 0
  let lastActiveSliderItem = heroSliderItems[0]

  const updateSliderPos = function (){
    lastActiveSliderItem.classList.remove("actvie")
    heroSliderItems[currentSliderPos].classList.add("active")
    lastActiveSliderItem = heroSliderItems[currentSliderPos]
  }

  const slideNext = function (){
    if(currentSliderPos >= heroSliderItems.length - 1){
      currentSliderPos = 0
    }else{
      currentSliderPos++;
    }

    updateSliderPos()
  }

  heroSliderNextBtn.addEventListener("click" , slideNext)


  const slidePrev = function (){
    if(currentSliderPos <= 0){
      currentSliderPos = heroSliderItems.length - 1
    }else{
      currentSliderPos--
    }
    updateSliderPos()
  }

  heroSliderPrevBtn.addEventListener("click" , slidePrev)



  /*
      *Auto Slide 
   */



  let autoSliderInterval;

  const autoSlide = function (){
    autoSliderInterval = setInterval(function(){
      slideNext()
    },7000)
  }

  addEventOnElements([heroSliderNextBtn , heroSliderPrevBtn] , "mouseover" , function () {
    clearInterval(autoSliderInterval)
  })


  addEventOnElements([heroSliderNextBtn , heroSliderPrevBtn] , "mouseout" ,autoSlide)


  window.addEventListener("load" , autoSlide)