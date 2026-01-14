// main.js — bulletproof mobile menu (works even if CSS is cached or conflicting)
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".navlinks");
  if (!btn || !nav) return;

  // Start hidden on small screens (safe)
  function syncInitial() {
    if (window.innerWidth <= 860) {
      // If CSS is hiding it, keep it hidden until opened
      if (!nav.classList.contains("open")) nav.style.display = "none";
    } else {
      // Desktop always visible
      nav.style.display = "";
      nav.classList.remove("open");
    }
  }

  function toggleMenu() {
    const isOpen = nav.classList.contains("open") || nav.style.display === "block";
    if (isOpen) {
      nav.classList.remove("open");
      nav.style.display = "none";
      btn.setAttribute("aria-expanded", "false");
    } else {
      nav.classList.add("open");
      nav.style.display = "block";
      btn.setAttribute("aria-expanded", "true");
    }
  }

  // Accessibility
  btn.setAttribute("type", "button");
  btn.setAttribute("aria-expanded", "false");

  // Click + touch (Chrome mobile can be picky; touchstart makes it deterministic)
  btn.addEventListener("click", toggleMenu);
  btn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    toggleMenu();
  }, { passive: false });

  // Close after clicking a link (nice mobile UX)
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (window.innerWidth <= 860) {
        nav.classList.remove("open");
        nav.style.display = "none";
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });

  window.addEventListener("resize", syncInitial);
  syncInitial();
});
