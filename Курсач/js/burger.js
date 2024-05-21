const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menu.classList.add('active');
    
    menuOpen = true;
  } else {
    menu.classList.remove('active');
    
    menuOpen = false;
  }
});
