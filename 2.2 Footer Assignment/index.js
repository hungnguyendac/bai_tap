const navTitles = document.querySelectorAll(".nav_title");
const buttonNav = document.querySelectorAll(".is_active");
const menuList = document.querySelectorAll(".nav_menu");
const textPrivacy = document.querySelector(".is_changed");

const updateText = () => {
  if (textPrivacy) {
    textPrivacy.textContent = window.innerWidth <= 670
      ? "Terms of Use"
      : "Terms & Conditions";
  }
};

navTitles.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const menu = menuList[index];
    if (menu) {
      menu.classList.toggle("is_show");
    }
  });
});

// Bắt sự kiện click để toggle .rotated (chỉ khi màn hình nhỏ)
navTitles.forEach(title => {
  title.addEventListener("click", () => {
    if (window.innerWidth <= 670) {
      title.classList.toggle("rotated");
    }
  });
});

// Khi màn hình to ra (> 670px), tự động gỡ .rotated
const removeRotatedOnDesktop = () => {
  if (window.innerWidth > 670) {
    navTitles.forEach(title => {
      title.classList.remove("rotated");
    });
  }
};

removeRotatedOnDesktop();
// Gọi khi trang load
window.addEventListener("load", () => {
  updateText();
});
window.addEventListener("resize", () => {
  updateText();
});