let menu = document.querySelector("header ul");
let icon = document.querySelector(".icon");
let cancel = document.querySelector("i.cancel");
icon.onclick = () => {
    menu.classList.toggle("active");
    cancel.onclick = () => {
        menu.classList.toggle("active");
    };
};

