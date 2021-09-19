const body = document.querySelector('body');
const menu = document.querySelector('.burger-menu');
const button = document.querySelector('.burger-menu-btn');
const links = document.querySelector('.burger-menu-link');
const overlay = document.querySelector('.burger-menu-overlay');


const toggleMenu = () => {
  menu.classList.toggle('burger-menu-active');
  if (menu.classList.contains('burger-menu-active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'visible';
  }
}

const burgerMenu = () => {
  button.addEventListener('click', (e) => { e.preventDefault(), toggleMenu() });
  links.addEventListener('click', (e) => { toggleMenu() });
  overlay.addEventListener('click', (e) => { toggleMenu() });
}


burgerMenu()
