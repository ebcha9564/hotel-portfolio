new WOW().init();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 2,
    },

    347: {
      slidesPerView: 1,
    }
  }
});