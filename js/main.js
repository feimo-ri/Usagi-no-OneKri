
document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // HAMBURGER MENU
  // =========================

  const hamburger =
    document.getElementById("hamburger") ||
    document.getElementById("js-hamburger");

  const nav =
    document.getElementById("nav-menu") ||
    document.getElementById("js-nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      const isActive = hamburger.classList.toggle("is-active");

      nav.classList.toggle("is-active", isActive);
      hamburger.setAttribute("aria-expanded", String(isActive));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        nav.classList.remove("is-active");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // =========================
  // PAGE TOP BUTTON
  // =========================

  const pageTop = document.getElementById("pageTop");

  if (pageTop) {
    const updatePageTop = () => {
      pageTop.classList.toggle("show", window.scrollY > 200);
    };

    window.addEventListener("scroll", updatePageTop, {
      passive: true,
    });

    updatePageTop();

    pageTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
