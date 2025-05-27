const menuTitle = document.querySelectorAll(".is_show");
const menuList = document.querySelectorAll(".menu_list");

menuTitle.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const menu = menuList[index];
        if (window.innerWidth <= 600) {
            if (menu.style.display === "none" || menu.style.display === "") {
                menu.style.display = "flex";
            } else {
                menu.style.display = "none";
            }
        }
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 600) {
            menuList.forEach((menu) => {
                menu.style.display = "flex";
            });
        }
    });
});
