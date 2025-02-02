/* Toggle Icon Navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* Scroll Section Active Link*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)  {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav [href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* STICKY NAVBAR */
    let navbar = document.querySelector('header');
    Headers.classList.toggle('sticky', window.scrollY > 100)

    /* REMOVE TOGGLE ICON AND NAVBAR */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* SCROLL REVEAL */
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/* TYPED JS */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Full Stack Web Developer'],
    typeSpeed: 70,
    backspeed: 70,
    backDelay: 1000,
    loop: true,
});
