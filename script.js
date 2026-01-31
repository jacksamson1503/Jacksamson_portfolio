const sections = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      section.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
