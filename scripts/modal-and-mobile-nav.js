let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
let mobileNavItems = document.querySelectorAll(".mobile-nav__item a")
let backdrop = document.querySelector(".backdrop");

let modal;
var modalTwo = document.querySelector(".modal--two");
var projectTwo = document.querySelector(".image-box--two");
var modalThree = document.querySelector(".modal--three");
var projectThree = document.querySelector(".image-box--three");
var modalFour = document.querySelector(".modal--four");
var projectFour = document.querySelector(".image-box--four");
var modalFive = document.querySelector(".modal--five");
var projectFive = document.querySelector(".image-box--five");
var modalSix = document.querySelector(".modal--six");
var projectSix = document.querySelector(".image-box--six");
var modalNoButtons = document.querySelectorAll(".modal__action");



// logic for menu:
toggleButton.addEventListener("click", function() {
    mobileNav.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10);
  });


  mobileNavItems.forEach(item=>{
    item.addEventListener("click", ()=>{
      mobileNav.classList.remove("open");
      backdrop.classList.remove("open");
      setTimeout(function() {
        backdrop.style.display = "none";
      }, 200);
    });
    
  })


  // logic for modal:

  projectTwo.addEventListener("click",()=>{
      modalTwo.style.display = "block";  
      backdrop.style.display = "block";
      // class open adds opacity
      setTimeout(function() {
        modalTwo.classList.add("open");
        backdrop.classList.add("open");
      }, 10);
  })
  projectThree.addEventListener("click",()=>{
    modalThree.style.display = "block";  
    backdrop.style.display = "block";
    setTimeout(function() {
      modalThree.classList.add("open");
      backdrop.classList.add("open");
    }, 10);
  })
  projectFour.addEventListener("click",()=>{
    modalFour.style.display = "block";  
    backdrop.style.display = "block";
    setTimeout(function() {
      modalFour.classList.add("open");
      backdrop.classList.add("open");
    }, 10);
  })
  projectFive.addEventListener("click",()=>{
    modalFive.style.display = "block";  
    backdrop.style.display = "block";
    setTimeout(function() {
      modalFive.classList.add("open");
      backdrop.classList.add("open");
    }, 10);
  })
  projectSix.addEventListener("click",()=>{
    modalSix.style.display = "block";  
    backdrop.style.display = "block";
    setTimeout(function() {
      modalSix.classList.add("open");
      backdrop.classList.add("open");
    }, 10);
  })

  if (modalNoButtons) {
    modalNoButtons.forEach(button=>{
    button.addEventListener("click", closeModal);}
    )
  }
  
  
  
  // logic for closing backdrop:
  backdrop.addEventListener("click", closeModal)

  function closeModal() {
    if(mobileNav){
        mobileNav.classList.remove("open");
    }
    
    if (modalTwo) {
         modalTwo.classList.remove("open");
         modalTwo.style.display="none";
    }
    if (modalThree) {
      modalThree.classList.remove("open");
      modalThree.style.display="none";
    }
    if (modalFour) {
      modalFour.classList.remove("open");
      modalFour.style.display="none";
    }
    if (modalFive) {
      modalFive.classList.remove("open");
      modalFive.style.display="none";
    }
    if (modalSix) {
      modalSix.classList.remove("open");
      modalSix.style.display="none";
    }
   
    backdrop.classList.remove("open");
    setTimeout(function() {
      backdrop.style.display = "none";
    }, 200);
  }

// logic for having link highlighted on current page



let mobileLinks =document.querySelectorAll('.link');
//  so basically click eventlisteners are added to all links
// then when link is clicked first we check for ANY
// link that has 'current' class and we remove that class, 
// secondly we add 'current' class to link that has been clicked
mobileLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    // items have to be queried from inside teh function every click
    // if the queried outsied of the function styling is not removed
    let items = document.querySelectorAll('.link.current');
    if(items.length) 
    {
        items[0].classList.remove('current');
    }

    link.classList.add('current');
  })
})

