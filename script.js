// ===============================
// MOBILE NAVIGATION
// ===============================

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("show");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen
    );

    menuButton.textContent = isOpen ? "✕" : "☰";

  });


  // Close menu when a link is clicked

  document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("show");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.textContent = "☰";

    });

  });

}


// ===============================
// HEADER ON SCROLL
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {

    header.style.background =
      "rgba(17, 31, 35, 0.96)";

    header.style.backdropFilter =
      "blur(12px)";

  } else {

    header.style.background =
      "transparent";

    header.style.backdropFilter =
      "none";

  }

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
  ".food-card, .storefront-content, .about-content, .contact-whatsapp"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(element => {

  element.classList.add("reveal");

  observer.observe(element);

});