// Dynamic year in footer
const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Fade-in animation on scroll using Intersection Observer
const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateY(0)";
          entry.target.style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(24px)";
    section.style.transition = "opacity 600ms ease, transform 600ms ease";
    observer.observe(section);
  });
}
