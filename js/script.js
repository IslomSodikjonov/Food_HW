let tabs = document.querySelectorAll('.tabheader__item')
let tabContents = document.querySelectorAll('.tabcontent')

tabs.forEach((tab, index) => {

    tab.onclick = () => {

        tabs.forEach(elem => elem.classList.remove('tabheader__item_active'))

        tab.classList.add('tabheader__item_active')

        showContent(index)
    }
})

function showContent(i) {
    tabContents.forEach(elem => elem.classList.add('hide'))
    
    tabContents[i].classList.remove('hide')
    
    tabContents[i].classList.add('show', 'fade')
}
showContent(0)



// Конец акции
let deadline = '2024-06-30'

function getTime(endtime) {
    let now = new Date();

    const total = Date.parse(endtime) - Date.parse(now);

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return {total, days, hours, minutes, seconds};
}

function timeLeft() {
    const remainingTime = getTime(deadline);

    document.getElementById("days").textContent = remainingTime.days;
    document.getElementById("hours").textContent = remainingTime.hours;
    document.getElementById("minutes").textContent = remainingTime.minutes;
    document.getElementById("seconds").textContent = remainingTime.seconds;

    if (remainingTime.total <= 0) {
        clearInterval(timeinterval);
        document.getElementById("timer_title").textContent = "Акция завершена!";
        
        document.getElementById("days").textContent = 0;
        document.getElementById("hours").textContent = 0;
        document.getElementById("minutes").textContent = 0;
        document.getElementById("seconds").textContent = 0;
    }
}

const timeinterval = setInterval(timeLeft, 1000);



// Слайдер
let slides = document.querySelectorAll('.offer__slide')
let nextSlide = document.querySelector('.offer__slider-next')
let prevSlide = document.querySelector('.offer__slider-prev')
let currSlide = document.querySelector('#current')
// let totalSlides = document.querySelector('#total')
let slideIndex = 0 


function showSlider(n) {

    if(n >= slides.length) {
        slideIndex = 0
    }

    if(n <= -1) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')

    currSlide.innerHTML = `0${slideIndex + 1}`
}

showSlider(0)

nextSlide.onclick = () =>{
    slideIndex++
    showSlider(slideIndex)
}

prevSlide.onclick = () =>{
    slideIndex--
    showSlider(slideIndex)
}



// Модальное окно
let modal = document.querySelector('.modal')
let modalOpen = document.querySelectorAll('[data-modal]')
let modalClose = document.querySelectorAll('[data-close]')

modalOpen.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'block'
    }
})

modalClose.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'none'
    }
})