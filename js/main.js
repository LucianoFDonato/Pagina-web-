/* modal-1 */
const open1 = document.getElementById('open_1');
const modal_container_1 = document.getElementById('modal-container-1');
const close1 = document.getElementById('close-1');

open1.addEventListener('click', () => {
    modal_container_1.classList.add('show');
});

close1.addEventListener('click', () => {
    modal_container_1.classList.remove('show');
});

/* modal */
const open = document.getElementById('open.1');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

/* modal 2 */
const open_2 = document.getElementById('open_2');
const modal_container_2 = document.getElementById('modal-container-2');
const close_2 = document.getElementById('close_2');

open_2.addEventListener('click', () => {
    modal_container_2.classList.add('show');
});

close_2.addEventListener('click', () => {
    modal_container_2.classList.remove('show');
});

/* modal 3 */
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

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});


/* Chances bars */

let btn = document.querySelector(".nav-toggle");
let icon = btn.querySelector(".fa-bars");

btn.addEventListener("click", () => {
    if (icon.classList.contains("fa-bars")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }

});

$(document).ready(function () {
    hljs.highlightAll();
});

