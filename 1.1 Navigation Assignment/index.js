const menuIcon = document.querySelector(".icon_menu");
const popup = document.querySelector(".popup");
const closeIcon = document.querySelector(".icon_close");

const headerList = document.querySelector(".header_list");
const headerItems = document.querySelectorAll(".header_item");
const popupMenu = document.querySelector(".popup_menu");

menuIcon.addEventListener("click", () => {
    popupMenu.appendChild(headerList);
    popup.classList.add("active");

    headerList.classList.add("column-mode");

    headerItems.forEach((item) => {
        item.classList.add("popup_menu_item");
    });
});

closeIcon.addEventListener("click", () => {
    document.querySelector(".header_menu").appendChild(headerList);
    popup.classList.remove("active");

    headerList.classList.remove("column-mode");

    headerItems.forEach((item) => {
        item.classList.remove("popup_menu_item");
    });
});
