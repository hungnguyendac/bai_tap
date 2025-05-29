const buttonNav = document.querySelectorAll(".is_active");
const menuList = document.querySelectorAll(".nav_menu");

const textPrivacy = document.querySelector(".is_changed");

const updateText = () => {
    if (window.innerWidth <= 600) {
        textPrivacy.textContent = "Terms of Use";
    } else {
        textPrivacy.textContent = "Terms & Conditions";
    }
};

// Gọi khi trang load
window.addEventListener("load", updateText);

// Gọi khi resize trình duyệt
window.addEventListener("resize", updateText);

//     btn.addEventListener("click", () => {
//         const menu = menuList[index];
//         if (window.innerWidth <= 600) {
//             if (menu.style.display === "none" || menu.style.display === "") {
//                 menu.style.display = "flex";
//             } else {
//                 menu.style.display = "none";
//             }
//         }
//     });
//     window.addEventListener("resize", () => {
//         if (window.innerWidth > 600) {
//             menuList.forEach((menu) => {
//                 menu.style.display = "flex";
//             });
//         }
//     });
// });
buttonNav.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const menu = menuList[index];
        menu.classList.toggle("closed");
    });
});