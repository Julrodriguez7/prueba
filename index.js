
window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    let logo = document.querySelector(".logo");

    header.classList.toggle("sticky", window.scrollY > 0);
    logo.classList.toggle("logo-pequeño", window.scrollY > 0);
})