const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

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
    { threshold: 0.12 }
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(18px)";
    section.style.transition = "opacity 500ms ease, transform 500ms ease";
    observer.observe(section);
  });
}
