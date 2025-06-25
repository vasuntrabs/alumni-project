// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Fade-in scroll effect
const fadeElements = document.querySelectorAll(".fade-in");

const showOnScroll = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
// Simple image sliders
function startSlider(sliderClass) {
  const sliders = document.querySelectorAll(`.${sliderClass}`);
  sliders.forEach(slider => {
    const images = slider.querySelectorAll('.slide');
    let index = 0;
    setInterval(() => {
      images[index].classList.remove('show');
      index = (index + 1) % images.length;
      images[index].classList.add('show');
    }, 3500);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  startSlider('about-slider');
  startSlider('contact-slider');
});
