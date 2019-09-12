const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    // Toggle Nav
    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active')

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        // Burger Animation
        burger.classList.toggle('toggle');
    })
};

const imgContainer = document.querySelector('.img-container');
const slider = document.querySelector('.slider');
const nav = document.querySelector('nav');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(imgContainer,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
    .fromTo(imgContainer, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})
    .fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(headline, 0.5, {opacity: "0"}, {opacity: 1, ease: Power2.easeInOut}, "-=0.5")
    .fromTo(nav, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2");

navSlide();