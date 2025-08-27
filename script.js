
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
    menuToggle.classList.toggle("fa-bars");
    menuToggle.classList.toggle("fa-xmark");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.classList.add("fa-bars");
        menuToggle.classList.remove("fa-xmark");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".outer-circle");

    circles.forEach(circle => {
        const percent = circle.getAttribute("data-percent");
        let angle = 0;
        const targetAngle = percent * 3.6;

        function animate() {
            angle += 3;
            if (angle > targetAngle) angle = targetAngle;
            circle.style.background = `conic-gradient(#3564fd ${angle}deg, #222 ${angle}deg)`;
            if (angle < targetAngle) requestAnimationFrame(animate);
        }

        animate();
    });
});

const sections = document.querySelectorAll("section");
const timelineItems = document.querySelectorAll(".timeline-item");

function handleScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        if (section.getBoundingClientRect().top < triggerBottom) {
            section.classList.add("show-up");
        }
    });

    timelineItems.forEach((item, i) => {
        if (item.getBoundingClientRect().top < triggerBottom) {
            setTimeout(() => item.classList.add("show"), i * 150);
        }
    });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
