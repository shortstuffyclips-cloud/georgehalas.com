// main.js — FINAL, bulletproof mobile navigation for GeorgeHalas.com
(function () {
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(function () {
    var btn = document.querySelector(".menu-btn");
    var nav = document.querySelector(".navlinks");

    if (!btn || !nav) return;

    // Force predictable base state
    btn.setAttribute("type", "button");
    btn.style.cursor = "pointer";

    function isMobile() {
      return window.innerWidth <= 860;
    }

    function closeMenu() {
      nav.style.display = "none";
      btn.setAttribute("aria-expanded", "false");
    }

    function openMenu() {
      nav.style.display = "block";
      btn.setAttribute("aria-expanded", "true");
    }

    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();

      if (!isMobile()) return;

      if (nav.style.display === "block") {
        closeMenu();
      } else {
        openMenu();
      }
    }

    // Initial state
    if (isMobile()) {
      closeMenu();
    } else {
      nav.style.display = "block";
    }

    // CLICK + TOUCH (Chrome mobile fix)
    btn.addEventListener("click", toggleMenu, true);
    btn.addEventListener(
      "touchstart",
      function (e) {
        toggleMenu(e);
      },
      { passive: false }
    );

    // Close menu when link is tapped
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (isMobile()) closeMenu();
      });
    });

    // Handle resize
    window.addEventListener("resize", function () {
      if (isMobile()) {
        closeMenu();
      } else {
        nav.style.display = "block";
      }
    });
  });
})();
