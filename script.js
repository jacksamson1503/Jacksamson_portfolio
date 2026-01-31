/* 🌙 Dark / Light Toggle */
const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.onclick = () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
  toggle.textContent = body.classList.contains("dark") ? "🌙" : "🌞";
};

/* 👀 Scroll Reveal Animation */
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
