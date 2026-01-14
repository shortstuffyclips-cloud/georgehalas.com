document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile menu
  const header = document.querySelector("header");
  const btn = document.querySelector("[data-menu-btn]");

  if (btn && header) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      header.classList.toggle("open");
    });
  } else {
    console.warn("Menu elements not found:", { headerFound: !!header, btnFound: !!btn });
  }

  // Active link highlight
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".navlinks a").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });

  // Simple lightbox for gallery
  const lb = document.createElement("div");
  lb.id = "lightbox";
  lb.style.cssText =
    "position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.75);z-index:1000;padding:18px;";

  lb.innerHTML =
    '<div style="max-width:1000px;width:100%;background:rgba(17,24,39,.96);border:1px solid rgba(255,255,255,.12);border-radius:18px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.45)">' +
    '<img alt="" style="width:100%;height:auto;display:block"/>' +
    '<div style="padding:12px 14px;color:#9ca3af;font-size:.95rem" data-cap></div>' +
    "</div>";

  document.body.appendChild(lb);

  const lbImg = lb.querySelector("img");
  const lbCap = lb.querySelector("[data-cap]");

  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-lightbox]");
    if (a) {
      e.preventDefault();
      lbImg.src = a.getAttribute("href");
      lbImg.alt = a.getAttribute("data-alt") || "";
      lbCap.textContent = a.getAttribute("data-cap") || "";
      lb.style.display = "flex";
    }
    if (e.target.id === "lightbox") {
      lb.style.display = "none";
      lbImg.src = "";
      lbCap.textContent = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lb.style.display === "flex") {
      lb.style.display = "none";
      lbImg.src = "";
      lbCap.textContent = "";
    }
  });
});
