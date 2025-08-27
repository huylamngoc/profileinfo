var typed = new Typed(".typing-text span", {
    strings: ["Designer", "Developer", "Engineer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const toggleBtn = document.querySelector(".theme-toggle i");
const body = document.body;

body.classList.add("dark-mode");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    if (body.classList.contains("light-mode")) {
        toggleBtn.classList.remove("fa-moon");
        toggleBtn.classList.add("fa-sun");
    } else {
        toggleBtn.classList.remove("fa-sun");
        toggleBtn.classList.add("fa-moon");
    }
});
const menuToggle = document.querySelector(".menu-toggle i");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.classList.remove("fa-bars");
        menuToggle.classList.add("fa-xmark");
    } else {
        menuToggle.classList.remove("fa-xmark");
        menuToggle.classList.add("fa-bars");
    }
});
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.classList.remove("fa-xmark");
        menuToggle.classList.add("fa-bars");
    });
});


