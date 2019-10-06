//Selectors for the slider
const imgContainer = document.querySelector('.img-container');
const slider = document.querySelector('.slider');
const nav = document.querySelector('nav');

const tl = new TimelineMax();

//Combining different effects to the slider
tl.fromTo(imgContainer,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
    .fromTo(imgContainer, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})
    .fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(nav, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2");


//Function for text appearing on scroll
const scrollAppear = () => {
    const introText2 = document.querySelector('.intro-text2');
    const introText3 = document.querySelector('.intro-text3');
    const introText4 = document.querySelector('.intro-text4');
    const introPosition2 = introText2.getBoundingClientRect().top;
    const introPosition3 = introText3.getBoundingClientRect().top;
    const introPosition4 = introText4.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if(introPosition2 < screenPosition){
        introText2.classList.add('intro-text-appear');
    }

    if(introPosition3 < screenPosition){
        introText3.classList.add('intro-text-appear');
    }

    if(introPosition4 < screenPosition){
        introText4.classList.add('intro-text-appear');
    }
};

//Starting the function
window.addEventListener('scroll', scrollAppear);