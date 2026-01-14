document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".navlinks");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
});
