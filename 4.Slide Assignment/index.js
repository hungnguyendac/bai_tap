// Swiper library
const swiper = new Swiper(".swiper", {
  slidesPerView: 'auto',
  spaceBetween: 16,
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

// Event rating
const ratingBox = document.querySelectorAll('.rating');
const starFill = document.querySelectorAll('.star');

ratingBox.forEach((box, index) => {
  box.addEventListener('click', (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    starFill[index].style.width = percent + '%';
  });
});