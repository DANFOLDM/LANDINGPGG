// Slideshow logic
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === slideIndex) slide.classList.add("active");
  });
  slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlides, 5000);

// Modal and form logic after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("signupModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.querySelector(".close-modal");
  const form = document.querySelector("#signupModal form"); // select the form inside modal

  // ✅ Open modal
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "block";
      document.body.classList.add("modal-open");
    });
  }

  // ✅ Close modal
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    });
  }

  // ✅ Close if clicking outside modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });

  // ✅ Submit event to trigger redirect after delay
  if (form) {
    form.addEventListener("submit", function () {
      setTimeout(() => {
        window.location.href = "thankyou.html"; // Change if needed
      }, 5000);
    });
  }
});
