// Swiper library
const swiper = new Swiper(".product_slides", {
  slidesPerView: 'auto',
  spaceBetween: 16,
  freeMode: true,
  touchReleaseOnEdges: true,
  breakpoints: {
    768: {
      spaceBetween: 24,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  mousewheel: true,
});