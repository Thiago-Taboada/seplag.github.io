const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 500,
  
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  });