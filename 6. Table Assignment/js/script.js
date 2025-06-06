const btnList = document.querySelector('.btn_option');
const menuList = document.querySelector('.select_option');

btnList.addEventListener('click', () => {
  btnList.classList.toggle('is_active');
  menuList.classList.toggle('is_show');
});

document.addEventListener('click', (e) => {
  const isClickOutside = !btnList.contains(e.target) && !menuList.contains(e.target);
  const isLargeScreen = window.innerWidth > 768;

  if (isClickOutside || isLargeScreen) {
    btnList.classList.remove('is_active');
    menuList.classList.remove('is_show');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    if (menuList.classList.contains('is_show')) {
      btnList.classList.remove('is_active');
      menuList.classList.remove('is_show');
    }
  }
});