// main.js — stable navigation handler for GeorgeHalas.com
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".navlinks");

  if (!menuBtn || !nav) return;

  // Toggle mobile menu
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  // Close menu when a link is clicked (mobile UX)
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });

  // Safety: close menu on resize to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) {
      nav.classList.remove("open");
    }
  });
});
