const navTitles = document.querySelectorAll(".nav_title");
const menuList = document.querySelectorAll(".nav_menu");
const textPrivacy = document.querySelector(".is_changed");

// Text update event when screen is small
const updateText = () => {
  if (textPrivacy) {
    textPrivacy.textContent = window.innerWidth <= 670
      ? "Terms of Use"
      : "Terms & Conditions";
  }
};

// Call function when page loads and resizes
window.addEventListener("load", () => {
  updateText();
});
window.addEventListener("resize", () => {
  updateText();
});

// Click mở menu + xoay icon khi màn nhỏ
navTitles.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const menu = menuList[index];
    if (menu) {
      menu.classList.toggle("is_show");
    }
    if (window.innerWidth <= 768) {
      btn.classList.toggle("rotated");
    }
  });
});