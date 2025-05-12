const titleArr = ["Kai Le Aw", "Monash CS", "Software Dev"];
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typed-text", {
    strings: titleArr,
    typeSpeed: 80,
    backSpeed: 30,
    loop: true,
  });
});

const connectArr = ["Contact?", "Connect?", "Let's connect :D"];
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".contact-text", {
    strings: connectArr,
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
  });
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const collapse = document.getElementById("navbarToggleExternalContent");
    const bootstrapCollapse = new bootstrap.Collapse(collapse, {
      toggle: false,
    });
    bootstrapCollapse.hide();
  });
});

const aboutSection = document.getElementById("about-section");
function isElementInView(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}
window.addEventListener("scroll", function () {
  if (isElementInView(aboutSection)) {
    aboutSection.classList.add("visible");
  }
});

// Project Script
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, 500);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card);
  });


  // not in used - below

  // Enlarge image modal
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeModal = document.querySelector(".modal-close");

  document.querySelectorAll(".enlarge-image").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});



const slideshowImages = [
  "/project-image/deception-detection-system-screenshot.png",
  "/project-image/deception-detection-system-home-image.png",
  "/project-image/deception-detection-system-demo-image.png",
];

let currentIndex = 0;
const imgElement = document.getElementById("test");

setInterval(() => {
  imgElement.style.opacity = 0;
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % slideshowImages.length;
    imgElement.src = slideshowImages[currentIndex];
    imgElement.style.opacity = 1;
  }, 500);
}, 3000);
