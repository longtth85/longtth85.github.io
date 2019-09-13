//Selectors for the slider
const imgContainer = document.querySelector('.img-container');
const slider = document.querySelector('.slider');
const nav = document.querySelector('nav');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

//Combining different effects to the slider
tl.fromTo(imgContainer,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
    .fromTo(imgContainer, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})
    .fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(headline, 0.5, {opacity: "0"}, {opacity: 1, ease: Power2.easeInOut}, "-=0.5")
    .fromTo(nav, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2");


//Function for text appearing on scroll
const scrollAppear = () => {
    const introText = document.querySelector('.intro-text');
    const introPosition = introText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if(introPosition < screenPosition){
        introText.classList.add('intro-text-appear');
        console.log("scrolled");
    }
};

//Starting the function
window.addEventListener('scroll', scrollAppear);