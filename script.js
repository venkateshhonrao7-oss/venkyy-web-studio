// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Thanks! I'll get back to you soon.");

    contactForm.reset();

});