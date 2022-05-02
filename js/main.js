/*modal 1*/
const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

/*modal 2*/
const open_2 = document.getElementById('open_2');
const modal_container_2 = document.getElementById('modal-container-2');
const close_2 = document.getElementById('close_2');

open_2.addEventListener('click', () => {
    modal_container_2.classList.add('show');
});

close_2.addEventListener('click', () => {
    modal_container_2.classList.remove('show');
});

/*modal 3*/
const open_3 = document.getElementById('open_3');
const modal_container_3 = document.getElementById('modal-container-3');
const close_3 = document.getElementById('close_3');

open_3.addEventListener('click', () => {
    modal_container_3.classList.add('show');
});

close_3.addEventListener('click', () => {
    modal_container_3.classList.remove('show');
});

/* Navegation menu */

const Toggle = document.querySelector(".nav-toggle");
const Menu = document.querySelector(".nav-menu");

Toggle.addEventListener("click", () => {
    Menu.classList.toggle("nav-menu_visible");
});

const close_nav = document.getElementById('.nav__link');

close_nav.addEventListener('click', () => {
    nav-menu-link.classList.remove('.nav-toggle');
});