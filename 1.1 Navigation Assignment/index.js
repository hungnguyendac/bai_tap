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
    popup.classList.add("active");

    header.classList.toggle("menu-open");

    headerList.classList.add("column_mode");

    headerItems.forEach((item) => {
        item.classList.add("popup_menu_item");
    });
};
// Hàm tắt popup
const closePopup = () => {
    document.querySelector(".header_menu").appendChild(headerList);
    popup.classList.remove("active");

    headerList.classList.remove("column_mode");

    headerItems.forEach((item) => {
        item.classList.remove("popup_menu_item");
    });

    header.classList.remove("menu-open");
};

menuIcon.addEventListener("click", openPopup);

closeIcon.addEventListener("click", closePopup);

document.querySelector(".dimed").addEventListener("click", () => {
    header.classList.remove("menu-open");
    closePopup();
});

// Kiểm tra độ dài web để tắt Popup
window.addEventListener("resize", () => {
    const width = window.innerWidth;
    if (header.classList.contains("menu-open") && width >= 769) {
        closePopup();
    }
});
