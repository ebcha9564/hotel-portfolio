

$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'right',
    drops: 'up'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});


var swiper = new Swiper(".mySwiper-0", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 2000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: ".swiper-pagination-0",
        clickable: true,
    },
});


document.addEventListener('DOMContentLoaded', function () {
    const plusButtons = document.querySelectorAll('.plus');
    const minusButtons = document.querySelectorAll('.minus');

    plusButtons.forEach(button => {
        button.addEventListener('click', function () {
            const parentDiv = this.parentElement;
            const numberElement = parentDiv.querySelector('p');
            let currentValue = parseInt(numberElement.textContent);

            if (currentValue < 5) {
                numberElement.textContent = currentValue + 1;
            } else {
                alert('Rooms can be only reserved up to 5 rooms.');
            }
        });
    });

    minusButtons.forEach(button => {
        button.addEventListener('click', function () {
            const parentDiv = this.parentElement;
            const numberElement = parentDiv.querySelector('p');
            let currentValue = parseInt(numberElement.textContent);

            if (currentValue > 0) {
                numberElement.textContent = currentValue - 1;
            } else {
                alert('Number cannot be negative.');
            }
        });
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 800,
    pagination: {
        el: ".swiper-pagination-1",
        clickable: true,
    },
    on: {
        slideChange: function () {
            const texts = document.querySelectorAll('.slide-text-6');

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
            const firstText = document.querySelector('.slide-text-6');
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
            const textSlides = document.querySelectorAll('.slide-text-5');
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

            const textSlides = document.querySelectorAll('.slide-text-5');

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
      loop: true,
      pagination : {
        el: ".swiper-pagination-2",
        dynamicBullets: true,
      },

    breakpoints: {

        1920: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        540: {
            slidesPerView: 1,
            spaceBetween: 10
        },

        348: {
            slidesPerView: 1,
            spaceBetween: 5,
        }


    }
});

document.addEventListener('DOMContentLoaded', function () {
    const roomTabs = document.getElementById('roomTabs');
    const section02 = document.getElementById('sec02-accomandations');
    const tabPanes = document.querySelectorAll('.tab-pane');

    roomTabs.addEventListener('click', function (e) {
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
