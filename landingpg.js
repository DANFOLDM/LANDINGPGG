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
  const modal = document.getElementById("emailModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.querySelector(".close-btn");

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

  // ✅ Initialize EmailJS
  emailjs.init("GxYFAN19aGFQmpKPD"); // Replace with your EmailJS public key

  // ✅ Handle form submission
  const emailForm = document.getElementById("emailForm");
  if (emailForm) {
    emailForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = {
        from_name: document.getElementById("userName").value,
        from_email: document.getElementById("userEmail").value
      };

      emailjs.send("service_s0mc9z4", "template_ittxkll", formData)
        .then(function () {
          alert("✅ Email sent successfully!");
          emailForm.reset();
          modal.style.display = "none";

          // ✅ Redirect to thank-you page after 5 seconds
          setTimeout(() => {
            window.location.href = "ThankYpg.html"; // Change if needed
          }, 5000);
        }, function (error) {
          console.error("❌ Email send failed:", error);
          alert("❌ Failed to send email. Please try again.");
        });
    });
  }
});
