// MOBILE MENU TOGGLE

const body = document.querySelector('body');
const header = document.querySelector('header');
const menuIconImg = document.querySelector('.header__menu-icon img');

function changeMenu() {
    header.classList.toggle('open');
    body.classList.toggle('noscroll');

    if (header.classList.contains('open')){
        menuIconImg.setAttribute('src','images/icon-close.svg');
    } else {
        menuIconImg.setAttribute('src','images/icon-hamburger.svg');
    }
}

menuIconImg.addEventListener('click', changeMenu);

// SLIDER

const sliderImages = document.querySelector('.slider__images');
const images = document.querySelectorAll('.slider__images .image');

const sliderInfo = document.querySelector('.slider__info');
const infos = document.querySelectorAll('.slider__info .info');

// Buttons
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Counter
let counter = 1;
const imageSize = images[0].clientWidth; // image width to know how much to slide
const infoSize = infos[0].clientWidth; // info width to know how much to slide

sliderImages.style.transform = 'translateX(' + (-imageSize * counter) + 'px)'; // to shift the clone image and show the first one
sliderInfo.style.transform = 'translateX(' + (-infoSize * counter) + 'px)';

// Button Listeners

function slideNext() {
    if (counter >= images.length -1) {
        return;
    }
    sliderImages.style.transition = "transform 0.4s ease-in-out";
    sliderInfo.style.transition = "transform 0.4s ease-in-out";
    counter++;
    sliderImages.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
    sliderInfo.style.transform = 'translateX(' + (-infoSize * counter) + 'px)';
}

function slidePrev() {
    if (counter <= 0) {
        return;
    }
    sliderImages.style.transition = "transform 0.4s ease-in-out";
    sliderInfo.style.transition = "transform 0.4s ease-in-out";
    counter--;
    sliderImages.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
    sliderInfo.style.transform = 'translateX(' + (-infoSize * counter) + 'px)';
}

nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);

// Reset Transition

function resetTransition() {
    if (images[counter].id === 'lastClone'){
        sliderImages.style.transition = "none"; // so it doesnt jump back
        sliderInfo.style.transition = "none";
        counter = images.length -2 ; // deduct two clone images
        sliderImages.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
        sliderInfo.style.transform = 'translateX(' + (-infoSize * counter) + 'px)';
    }
    if (images[counter].id === 'firstClone'){
        sliderImages.style.transition = "none";
        sliderInfo.style.transition = "none";
        counter = images.length - counter;
        sliderImages.style.transform = 'translateX(' + (-imageSize * counter) + 'px)';
        sliderInfo.style.transform = 'translateX(' + (-infoSize * counter) + 'px)';
    }
}

sliderImages.addEventListener('transitionend', resetTransition);