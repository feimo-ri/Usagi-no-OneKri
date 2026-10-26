document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // HAMBURGER MENU
  // =========================

  const hamburger =
    document.getElementById("hamburger") ||
    document.getElementById("js-hamburger");

  const nav =
    document.getElementById("nav") ||
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

  // =========================
  // ILLUSTRATION FILTER
  // Works / Fan Art
  // =========================

  const filterButtons = document.querySelectorAll(".filter-button");
  const illustrationItems =
    document.querySelectorAll(".illustration-item");

  if (filterButtons.length && illustrationItems.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        // ボタンの状態を変更
        filterButtons.forEach((btn) => {
          btn.classList.remove("active");
        });

        button.classList.add("active");

        // カテゴリーで絞り込む
        illustrationItems.forEach((item) => {
          const category = item.dataset.category;

          if (category === filter) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  }
});