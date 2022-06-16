
  // menu 

  const toggleBtn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu-container");

toggleBtn.addEventListener("click",()=>{
  menu.classList.toggle("show");
})




// might leavve this functionality aside for the reason that links obviously dont change
// styling when fullpage scroll is applied, other then that it works

// navLink has to be queried every time there is click from inside the function
// navLink = document.querySelectorAll('.menu-items .menu-item .fa-solid.active');
// navLinks =document.querySelectorAll('.menu-items .menu-item .fa-solid');

// navLinks.forEach(link=>{
//   link.addEventListener("click", ()=>{
//     navLink = document.querySelectorAll('.menu-items .menu-item .fa-solid.active');
//     if(navLink.length) 
//     {
//         navLink[0].classList.remove('active');
//     }

//     link.classList.add('active');
//   })
// })
