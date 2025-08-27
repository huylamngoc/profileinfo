var typed = new Typed(".typing-text span", {
    strings: ["Designer", "Developer", "Engineer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Nút toggle dark/light
const toggleBtn = document.querySelector(".theme-toggle i");
const body = document.body;

// Mặc định dark mode
body.classList.add("dark-mode");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    // Đổi icon
    if (body.classList.contains("light-mode")) {
        toggleBtn.classList.remove("fa-moon");
        toggleBtn.classList.add("fa-sun");
    } else {
        toggleBtn.classList.remove("fa-sun");
        toggleBtn.classList.add("fa-moon");
    }
});
// Menu toggle
const menuToggle = document.querySelector(".menu-toggle i");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");

    // Đổi icon bars ↔ close
    if (nav.classList.contains("active")) {
        menuToggle.classList.remove("fa-bars");
        menuToggle.classList.add("fa-xmark");
    } else {
        menuToggle.classList.remove("fa-xmark");
        menuToggle.classList.add("fa-bars");
    }
});

// Khi click link trong menu thì tự động đóng
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.classList.remove("fa-xmark");
        menuToggle.classList.add("fa-bars");
    });
});

