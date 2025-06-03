const menuIcon = document.querySelector(".icon_bars");
const popup = document.querySelector(".popup");
const closeIcon = document.querySelector(".icon_close");
const headerList = document.querySelector(".header_list");
const headerItems = document.querySelectorAll(".header_item");
const popupMenu = document.querySelector(".popup_menu");
const header = document.querySelector(".header");

// Hàm mở popup
const openPopup = () => {
  popupMenu.appendChild(headerList);
  header.classList.add("menu_open");
};
// Hàm tắt popup
const closePopup = () => {
  document.querySelector(".header_menu").appendChild(headerList);
  header.classList.remove("menu_open");
};

menuIcon.addEventListener("click", openPopup);
closeIcon.addEventListener("click", closePopup);
document.querySelector(".dimmed").addEventListener("click", closePopup);
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  if (header.classList.contains("menu_open") && width >= 770) {
    closePopup();
  }
});
