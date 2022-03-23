/*modal 1*/
const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () =>{
    modal_container.classList.add('show');
});

close.addEventListener('click', () =>{
    modal_container.classList.remove('show');
});

/*modal 2*/
const open_2 = document.getElementById('open_2');
const modal_container_2 = document.getElementById('modal-container-2');
const close_2 = document.getElementById('close_2');

open_2.addEventListener('click', () =>{
    modal_container_2.classList.add('show');
});

close_2.addEventListener('click', () =>{
    modal_container_2.classList.remove('show');
});

/*modal 3*/
const open_3 = document.getElementById('open_3');
const modal_container_3 = document.getElementById('modal-container-3');
const close_3 = document.getElementById('close_3');

open_3.addEventListener('click', () =>{
    modal_container_3.classList.add('show');
});

close_3.addEventListener('click', () =>{
    modal_container_3.classList.remove('show');
});

/* Navegation menu */

const Toggle = document.querySelector(".nav-toggle");
const Menu = document.querySelector(".nav-menu");

Toggle.addEventListener("click", () => {
    Menu.classList.toggle("nav-menu_visible");
});


/* Transition */

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});