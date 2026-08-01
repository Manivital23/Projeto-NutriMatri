new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,
  cssMode: true,
  draggable: true,
  addIcons: true,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
 
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0:{
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1028: {
      slidesPerView: 3
    },
  }


});
