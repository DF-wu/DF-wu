window.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector("#year");
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  const revealElements = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  revealElements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index * 80, 320)}ms`);
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  } else {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });
  }

  if (prefersReducedMotion) {
    return;
  }

  const heroShell = document.querySelector(".hero-shell");
  if (!heroShell) {
    return;
  }

  const setHeroPointer = (event) => {
    const bounds = heroShell.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    heroShell.style.setProperty("--hero-x", `${x}%`);
    heroShell.style.setProperty("--hero-y", `${y}%`);
  };

  heroShell.addEventListener("pointermove", setHeroPointer);
  heroShell.addEventListener("pointerleave", () => {
    heroShell.style.setProperty("--hero-x", "78%");
    heroShell.style.setProperty("--hero-y", "18%");
  });
});
