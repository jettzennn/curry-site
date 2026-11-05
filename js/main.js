(() => {
  "use strict";

  // 1. Hero animations: tandai body.loaded setelah window load + 100ms
  const markLoaded = () => {
    setTimeout(() => document.body.classList.add("loaded"), 100);
  };
  if (document.readyState === "complete") {
    markLoaded();
  } else {
    window.addEventListener("load", markLoaded, { once: true });
  }

  // 2. Navbar scrolled state
  const navbar = document.querySelector(".navbar");
  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 3. Smooth scroll untuk anchor navbar
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // 4. Scroll reveal dengan IntersectionObserver
  const reveals = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const parent = el.parentElement;
        if (parent) {
          const siblings = Array.from(parent.querySelectorAll(".reveal"));
          const index = siblings.indexOf(el);
          if (index >= 0) {
            el.style.transitionDelay = index * 80 + "ms";
          }
        }
        el.classList.add("visible");
        observer.unobserve(el);
      });
    },
    { threshold: 0.15 },
  );

  reveals.forEach((el) => observer.observe(el));
})();
