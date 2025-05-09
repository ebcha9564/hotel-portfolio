var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            const texts = document.querySelectorAll('.slide-text');

            texts.forEach(text => {
                text.style.display = "none";
                text.classList.remove('active');
            });

            const activeText = texts[this.activeIndex];
            activeText.style.display = "block";

            void activeText.offsetWidth;

            activeText.classList.add('active');
        },

        init: function () {
            const firstText = document.querySelector('.slide-text');
            firstText.style.display = "block";
            firstText.classList.add('active');
        }
    }
});

var swiper = new Swiper(".mySwiper-1", {
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 1500,
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
    },
    on: {
        init: function () {
            const textSlides = document.querySelectorAll('.slide-text-1');
            textSlides.forEach((slide, index) => {
                if (index === 0) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        },
        slideChange: function () {
            const activeIndex = this.activeIndex;

            const textSlides = document.querySelectorAll('.slide-text-1');

            textSlides.forEach(slide => {
                slide.classList.remove('active');
            });

            if (textSlides[activeIndex]) {
                textSlides[activeIndex].classList.add('active');
            }
        }
    }
});


var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    speed: 300,
    pagination: {
      el: ".swiper-pagination-2",
      clickable: true,
    },

    breakpoints: {

        1920:{
            slidesPerView: 3,
            spaceBetween: 30,
        },

        768:{
            slidesPerView: 2,
            spaceBetween: 20
        },

        540:{
            slidesPerView: 1,
            spaceBetween: 10
        },
        
        348:{
            slidesPerView: 1,
            spaceBetween: 5,
        }


    }
});

document.addEventListener('DOMContentLoaded', function() {
    const roomTabs = document.getElementById('roomTabs');
    const section02 = document.getElementById('sec02-accomandations');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    roomTabs.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link')) {
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                pane.classList.remove('show');
            });
            
            section02.classList.remove('bg-standard', 'bg-premier', 'bg-family', 'bg-king');
            
            setTimeout(() => {
                if (e.target.id === 'standard-tab') {
                    section02.classList.add('bg-standard');
                    document.getElementById('standard').classList.add('active', 'show');
                } else if (e.target.id === 'premier-tab') {
                    section02.classList.add('bg-premier');
                    document.getElementById('premier').classList.add('active', 'show');
                } else if (e.target.id === 'family-tab') {
                    section02.classList.add('bg-family');
                    document.getElementById('family').classList.add('active', 'show');
                } else if (e.target.id === 'king-tab') {
                    section02.classList.add('bg-king');
                    document.getElementById('king').classList.add('active', 'show');
                }
            }, 0); 
        }
    });
});