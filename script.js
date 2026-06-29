document.getElementById("year").textContent = new Date().getFullYear();

const observed = document.querySelectorAll(".services-heading, .service-card, .automation-copy, .flow-panel, .about-content, .principles article, .contact > *");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  observed.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(18px)";
    element.style.transition = `opacity .7s ease ${Math.min(index % 4, 3) * 0.07}s, transform .7s ease ${Math.min(index % 4, 3) * 0.07}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  observed.forEach((element) => observer.observe(element));

  document.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
  });

  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
    });
  });
}
